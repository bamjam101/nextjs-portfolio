import {
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  tedx,
  mobile,
  reddit,
  messenger,
  baytrend,
  netflix,
  spotify,
  quimzz,
  threejs,
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
  {
    title: "Blockchain Developer",
    icon: creator,
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
    title: "Full stack Developer (MERN)",
    company_name: "Outsourced Work",
    icon: mobile,
    iconBg: "#383E56",
    date: "Dec 2022 - Feb 2023",
    points: [
      "Developing and maintaining web applications using React.js and other MERN stack technologies.",
      "Employing required skills for development of full-stack application.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Debugging, optimizing and providing constructive feedback to project provider.",
    ],
  },
  {
    title: "ReactJS Developer",
    company_name: "TEDxACE",
    icon: tedx,
    iconBg: "#E6DEDD",
    date: "Feb 2023 - March 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Integrating state management tools for effective data-flow.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
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
    name: "Reddit Clone",
    description:
      "A replication of Reddit with subset of features integrated to provide a full-stack experience. Get indulged in community activities much like Reddit subreddit and browse across posts relating to different subreddit.",
    tags: [
      {
        name: "next",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "green-text-gradient",
      },
      {
        name: "firebase",
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
      { name: "chakra", color: "green-text-gradient" },
    ],
    image: reddit,
    source_code_link: "https://github.com/bamjam101/nextjs-reddit-clone",
    web_url: "https://nextjs-reddit-clone-60nrmxvqb-bamjam101.vercel.app",
  },
  {
    name: "Messenger Clone",
    description:
      "A full-stack implementation of messenger web application that provides user interface following responsive design with real-time sending and receiving of messages.",
    tags: [
      {
        name: "next",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "prisma",
        color: "pink-text-gradient",
      },
      {
        name: "nodejs",
        color: "blue-text-gradient",
      },
      {
        name: "pusher",
        color: "green-text-gradient",
      },
    ],
    image: messenger,
    source_code_link: "https://github.com/bamjam101/nextjs-messenger-clone",
    web_url: "https://nextjs-messenger-clone-flame.vercel.app",
  },
  {
    name: "Netflix Clone",
    description:
      "A lite build of Neflix with features to facilitate users to watch movie previews being fetched from TMDB library mapping to Youtube trailer videos. Enjoy creating user profiles and switching between them as per liking due optimized state management.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "contextapi",
        color: "green-text-gradient",
      },
      {
        name: "tmdbapi",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "pink-text-gradient",
      },
    ],
    image: netflix,
    source_code_link: "https://github.com/bamjam101/netflix-clone",
    web_url: "https://netflix-clone-dev-js.netlify.app/",
  },
  {
    name: "Baytrend - Ecommerce",
    description:
      "An E-commerce site which effectively fetches data from fakestore API and displays beautifully using Material UI Design Components. The site features a feed where users can select items and add them to cart which is stored in store and locally on client machine using Redux Toolkit.",
    tags: [
      {
        name: "react",
        color: "pink-text-gradient",
      },
      {
        name: "MUI",
        color: "green-text-gradient",
      },
      {
        name: "Redux",
        color: "blue-text-gradient",
      },
    ],
    image: baytrend,
    source_code_link: "https://github.com/bamjam101/baytrend-ecommerce-app",
    web_url: "https://baytrend-dev-js.netlify.app/",
  },
  {
    name: "Spotify Clone",
    description:
      "A music streaming application totally build using Vanilla JavaScript and Tailwindcss. The application requires users to have an API key for themselves using which they can authenticate their own Spotify account and fetch data as per their preference in a secure manner.",
    tags: [
      {
        name: "Vite",
        color: "blue-text-gradient",
      },
      {
        name: "Vanilla JavaScript",
        color: "green-text-gradient",
      },
      {
        name: "Spotify Developer API",
        color: "pink-text-gradient",
      },
    ],
    image: spotify,
    source_code_link: "https://github.com/bamjam101/vanilla-spotify-clone",
    web_url: "https://spotify-clone-dev-js.netlify.app",
  },
  {
    name: "Quimzz - A game app",
    description:
      "A quiz interface designed to prompt users with 5 questions each round. The user interface brings a great experience for users to interact and play quizzes. The questions are categorized and comes directly from database (MongoDB).",
    tags: [
      {
        name: "HTML, CSS, and JS",
        color: "blue-text-gradient",
      },
      {
        name: "NodeJs, ExpressJS, and EJS",
        color: "pink-text-gradient",
      },
      {
        name: "MongoDB",
        color: "green-text-gradient",
      },
    ],
    image: quimzz,
    source_code_link: "https://github.com/bamjam101/baytrend-ecommerce-app",
    web_url: "https://bamjam101.github.io/quimzz-frontend/",
  },
];

export { services, technologies, experiences, testimonials, projects };
