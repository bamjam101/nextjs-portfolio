import {
  backend,
  bartergramLogo,
  boringstudioLogo,
  css,
  figma,
  git,
  html,
  javascript,
  mongodb,
  nodejs,
  reactjs,
  redux,
  tailwind,
  threejs,
  typescript,
  web,
} from "../app/assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "project",
    title: "Project",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
];

const experiences = [
  {
    title: "Senior Backend Developer & Tech Lead",
    company_name: "Bartergram LLP",
    icon: bartergramLogo,
    iconBg: "#383E56",
    date: "Jul 2024 – Present",
    points: [
      "Led the development of Bartergram’s mobile and web platforms with complete backend architecture and AWS infrastructure setup.",
      "Built internal tools and admin dashboards with role-based access to streamline business operations.",
      "Deployed production-ready systems to App Store, Play Store, and web.",
    ],
  },
  {
    title: "Full-Stack Developer Intern",
    company_name: "The Boring Studio",
    icon: boringstudioLogo,
    iconBg: "#E6DEDD",
    date: "Jul 2023 – Jul 2024",
    points: [
      "Migrated backend services from JavaScript to TypeScript, improving maintainability.",
      "Built real-time internal dashboards using WebSockets and Azure Event Hubs.",
      "Contributed to full-stack development of client projects and company website.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "",
  },
];

const projects = [
  {
    name: "Predictye – AI Resale Estimator",
    description:
      "A full-stack platform for predicting resale value of second-hand items. Features dynamic chat, image uploads, and category-specific workflows for furniture, jewelry, and more.",
    tags: [
      { name: "next.js", color: "blue-text-gradient" },
      { name: "prisma", color: "green-text-gradient" },
      { name: "mongodb", color: "blue-text-gradient" },
      { name: "tailwind", color: "pink-text-gradient" },
      { name: "typescript", color: "blue-text-gradient" },
      { name: "vercel", color: "green-text-gradient" },
    ],
    image: "/predictye-poster.png",
    web_url: "https://predictye.vercel.app",
  },
  {
    name: "Bartergram – Web & Mobile",
    description:
      "A production-ready ecosystem for influencer-brand matchmaking, campaign management, and internal tooling. Includes web admin dashboard and cross-platform mobile app.",
    tags: [
      { name: "next.js", color: "blue-text-gradient" },
      { name: "node.js", color: "green-text-gradient" },
      { name: "react native", color: "blue-text-gradient" },
      { name: "aws", color: "blue-text-gradient" },
      { name: "prisma", color: "green-text-gradient" },
      { name: "postgresql", color: "green-text-gradient" },
      { name: "expo", color: "pink-text-gradient" },
    ],
    image: "/bartergram-poster.png",
    web_url: "https://www.bartergram.co",
  },
  {
    name: "Heyoo",
    description:
      "A social media portfolio platform with CMS features, real-time chat, and scalable backend. Built with Next.js, MongoDB, Tailwind, Recoil, and Azure App Service.",
    tags: [
      {
        name: "next",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "recoil",
        color: "blue-text-gradient",
      },
      { name: "socket.io", color: "green-text-gradient" },
      { name: "Microsoft Azure - App Service", color: "green-text-gradient" },
    ],
    image: "/heyoo.png",
    web_url: "https://heyoo.in",
  },
];

export { experiences, projects, services, technologies, testimonials };
