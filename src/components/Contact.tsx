"use client";

import { useRef, useState } from "react";

import { motion } from "framer-motion";

import { styles } from "@/app/styles";
import { SectionWrapper } from "@/hoc";
import { slideIn } from "@/utils/motion";
import { EarthCanvas } from "./canvas";

const Contact = () => {
  const formRef = useRef(null);

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [feedback, setFeedback] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const handleFormDataChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true);
    setFeedback({ type: null, message: "" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (response.ok) {
        setFeedback({
          type: "success",
          message: data.message || "Message sent successfully!",
        });
        setForm({ name: "", email: "", message: "" });
      } else if (response.status === 429) {
        // Rate limited
        setFeedback({
          type: "error",
          message: data.error || "Too many requests. Please try again later.",
        });
      } else {
        setFeedback({
          type: "error",
          message: data.error || "Failed to send message. Please try again.",
        });
      }
    } catch (error) {
      setFeedback({
        type: "error",
        message: "Network error. Please check your connection and try again.",
      });
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse gap-2 md:gap-10 flex overflow-hidden">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-transparent p-8 rounded-2xl"
      >
        <p className={`${styles.sectionSubText}`}>Get in touch</p>
        <h2 className={`${styles.sectionHeadText}`}>Contact.</h2>

        {feedback.type && (
          <div
            className={`mt-4 p-4 rounded-lg ${
              feedback.type === "success"
                ? "bg-green-900/20 border border-green-500 text-green-400"
                : "bg-red-900/20 border border-red-500 text-red-400"
            }`}
          >
            {feedback.message}
          </div>
        )}

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Name</span>
            <input
              type="text"
              name={"name"}
              value={form.name}
              onChange={handleFormDataChange}
              placeholder="What's Your Name?"
              disabled={loading}
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg oulined-none border-none font-medium disabled:opacity-50"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Email</span>
            <input
              type="email"
              name={"email"}
              value={form.email}
              onChange={handleFormDataChange}
              placeholder="What's Your Email?"
              disabled={loading}
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg oulined-none border-none font-medium disabled:opacity-50"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Message</span>
            <textarea
              rows={7}
              onChange={handleFormDataChange}
              name={"message"}
              value={form.message}
              placeholder="Let's talk about something, shall we?"
              disabled={loading}
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg oulined-none border-none font-medium resize-none disabled:opacity-50"
            />
          </label>
          <button
            className="bg-tertiary py-3 px-8 outline-none w-fit font-bold text-white shadow-md shadow-primary rounded-xl disabled:opacity-50 disabled:cursor-not-allowed"
            type="submit"
            disabled={loading}
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
