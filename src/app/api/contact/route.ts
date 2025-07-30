import rateLimiter from "@/utils/rate-limiter";
import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

function getClientIP(request: NextRequest): string {
  // Check various headers for the real IP
  const forwardedFor = request.headers.get("x-forwarded-for");
  const realIP = request.headers.get("x-real-ip");
  const cfConnectingIP = request.headers.get("cf-connecting-ip");

  if (forwardedFor) {
    // x-forwarded-for can contain multiple IPs, take the first one
    return forwardedFor.split(",")[0].trim();
  }

  if (realIP) {
    return realIP;
  }

  if (cfConnectingIP) {
    return cfConnectingIP;
  }

  // Fallback to connection IP (might be proxy IP)
  return request.ip || "unknown";
}

const RATE_LIMITS = {
  IP: {
    maxRequests: 5, // 5 requests per hour per IP
    windowMs: 60 * 60 * 1000, // 1 hour
  },
  EMAIL: {
    maxRequests: 3, // 3 requests per hour per email
    windowMs: 60 * 60 * 1000, // 1 hour
    cooldownMs: 5 * 60 * 1000, // 5 minutes cooldown between requests
  },
  GLOBAL: {
    maxRequests: 100, // 100 total requests per hour
    windowMs: 60 * 60 * 1000, // 1 hour
  },
};

function formatWaitTime(ms: number): string {
  if (ms < 60000) {
    return `${Math.ceil(ms / 1000)} seconds`;
  } else {
    return `${Math.ceil(ms / 60000)} minutes`;
  }
}

export async function POST(request: NextRequest) {
  try {
    const clientIP = getClientIP(request);
    const userAgent = request.headers.get("user-agent") || "unknown";

    // Parse request body
    let body;
    try {
      body = await request.json();
    } catch (error) {
      return NextResponse.json(
        { error: "Invalid JSON format" },
        { status: 400 }
      );
    }

    const { name, email, message } = body;

    // Validate input
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required" },
        { status: 400 }
      );
    }

    // Basic input validation
    if (name.length > 100 || email.length > 254 || message.length > 5000) {
      return NextResponse.json(
        { error: "Input too long. Please check your message length." },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Please provide a valid email address" },
        { status: 400 }
      );
    }

    // Rate limiting checks

    // 1. Global rate limit
    const globalLimit = rateLimiter.checkLimit(
      "global",
      RATE_LIMITS.GLOBAL.maxRequests,
      RATE_LIMITS.GLOBAL.windowMs
    );

    if (!globalLimit.allowed) {
      return NextResponse.json(
        {
          error: "Service temporarily unavailable. Please try again later.",
          retryAfter: Math.ceil((globalLimit.resetTime - Date.now()) / 1000),
        },
        {
          status: 429,
          headers: {
            "Retry-After": Math.ceil(
              (globalLimit.resetTime - Date.now()) / 1000
            ).toString(),
          },
        }
      );
    }

    // 2. IP-based rate limit
    const ipLimit = rateLimiter.checkLimit(
      `ip:${clientIP}`,
      RATE_LIMITS.IP.maxRequests,
      RATE_LIMITS.IP.windowMs
    );

    if (!ipLimit.allowed) {
      return NextResponse.json(
        {
          error: `Too many requests from your IP. You can send ${RATE_LIMITS.IP.maxRequests} messages per hour. Please try again later.`,
          remainingRequests: ipLimit.remainingRequests,
          retryAfter: Math.ceil((ipLimit.resetTime - Date.now()) / 1000),
        },
        {
          status: 429,
          headers: {
            "X-RateLimit-Limit": RATE_LIMITS.IP.maxRequests.toString(),
            "X-RateLimit-Remaining": ipLimit.remainingRequests.toString(),
            "X-RateLimit-Reset": Math.ceil(ipLimit.resetTime / 1000).toString(),
            "Retry-After": Math.ceil(
              (ipLimit.resetTime - Date.now()) / 1000
            ).toString(),
          },
        }
      );
    }

    // 3. Email-based rate limit with cooldown
    const emailLimit = rateLimiter.checkLimit(
      `email:${email.toLowerCase()}`,
      RATE_LIMITS.EMAIL.maxRequests,
      RATE_LIMITS.EMAIL.windowMs,
      RATE_LIMITS.EMAIL.cooldownMs
    );

    if (!emailLimit.allowed) {
      if (emailLimit.waitTime) {
        return NextResponse.json(
          {
            error: `Please wait ${formatWaitTime(
              emailLimit.waitTime
            )} before sending another message from this email address.`,
            waitTime: emailLimit.waitTime,
          },
          { status: 429 }
        );
      } else {
        return NextResponse.json(
          {
            error: `Too many messages from this email address. You can send ${RATE_LIMITS.EMAIL.maxRequests} messages per hour. Please try again later.`,
            remainingRequests: emailLimit.remainingRequests,
            retryAfter: Math.ceil((emailLimit.resetTime - Date.now()) / 1000),
          },
          { status: 429 }
        );
      }
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      service: "gmail", // or your preferred email service
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS, // Use App Password for Gmail
      },
    });

    // Email content with additional security info
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.CONTACT_EMAIL || process.env.EMAIL_USER,
      subject: `Portfolio Contact Form - Message from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333; border-bottom: 2px solid #4f46e5; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          
          <div style="margin: 20px 0; padding: 20px; background-color: #f8fafc; border-radius: 8px;">
            <h3 style="color: #4f46e5; margin-top: 0;">Contact Information</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>IP Address:</strong> ${clientIP}</p>
            <p><strong>User Agent:</strong> ${userAgent}</p>
            <p><strong>Timestamp:</strong> ${new Date().toISOString()}</p>
          </div>
          
          <div style="margin: 20px 0; padding: 20px; background-color: #f1f5f9; border-radius: 8px;">
            <h3 style="color: #4f46e5; margin-top: 0;">Message</h3>
            <p style="line-height: 1.6; white-space: pre-wrap;">${message}</p>
          </div>
          
          <div style="margin-top: 30px; padding: 15px; background-color: #e0e7ff; border-radius: 8px; text-align: center;">
            <p style="margin: 0; color: #4338ca; font-size: 14px;">
              This message was sent from your portfolio contact form.
            </p>
          </div>
        </div>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    // Log successful submission (optional)
    console.log(
      `Contact form submission from ${email} (${clientIP}) at ${new Date().toISOString()}`
    );

    return NextResponse.json(
      {
        success: true,
        message: "Message sent successfully! I'll get back to you soon.",
        remainingRequests: {
          ip: ipLimit.remainingRequests,
          email: emailLimit.remainingRequests,
        },
      },
      {
        status: 200,
        headers: {
          "X-RateLimit-Limit": RATE_LIMITS.IP.maxRequests.toString(),
          "X-RateLimit-Remaining": ipLimit.remainingRequests.toString(),
          "X-RateLimit-Reset": Math.ceil(ipLimit.resetTime / 1000).toString(),
        },
      }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      {
        error:
          "Failed to send message. Please try again later or contact me directly.",
        details:
          process.env.NODE_ENV === "development"
            ? error instanceof Error
              ? error.message
              : "Unknown error"
            : undefined,
      },
      { status: 500 }
    );
  }
}
