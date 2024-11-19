import {
  adcetCertificate,
  android,
  attendify,
  backend,
  codigoCertificate,
  csiInAppCertificate,
  database,
  dummy,
  ecommerceAppImage,
  mauliSalon,
  mernStack,
  newsAppImage,
  portfolioWebsite,
  promptShare,
  squidSagaCertificate,
  udemyWebDevelopmentCertificate,
  sihCertificate,
  storyCopilot,
  sihWebsite,
} from "../assets";
import { frontend } from "../assets";

export const navLinks = [
  {
    id: "home",
    title: "Home",
  },
  {
    id: "about",
    title: "About",
  },
  {
    id: "skills",
    title: "Skills",
  },
  {
    id: "experience",
    title: "Experience",
  },
  {
    id: "certificates",
    title: "Certificates",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

export const mySkillsData = [
  {
    category: "Frontend Development",
    description:
      "Crafting beautiful and interactive user interfaces with modern web technologies.",
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "HTML",
      "CSS",
      "Tailwind CSS",
      "Bootstrap",
      "JavaScript",
    ],
    shade: "#DA70D6", // Orchid
  },
  {
    category: "Backend Development",
    description: "Building robust and scalable server-side logic and APIs.",
    skills: [
      "Node.js",
      "Express",
      "PostgreSQL",
      "Firebase",
      "MongoDB",
      "SQL",
      "Redis",
      "REST API",
      "GraphQL",
    ],
    shade: "#9400D3", // Dark Violet
  },
  {
    category: "Other Skills",
    description: "A collection of other valuable skills and tools I utilize.",
    skills: ["Jest", "C++", "Java", "C", "Git", "GitHub", "Bitbucket"],
    shade: "#8B008B", // Darker purple
  },
];

export const myCertificates = [
  {
    title: "SIH 2023 Finalist",
    image: sihCertificate,
  },
  {
    title: "Web Developer Bootcamp (Udemy)",
    image: udemyWebDevelopmentCertificate,
  },
  {
    title: "CSI InApp Hackathon",
    image: csiInAppCertificate,
  },
  {
    title: "Codigo Coding Competition",
    image: codigoCertificate,
  },
  {
    title: "ADCET Innovation Project Competition",
    image: adcetCertificate,
  },
  {
    title: "SquidSaga Coding Competition",
    image: squidSagaCertificate,
  },
];

export const myProjects = [
  {
    title: "Story_Co-Pilot: AI-Powered Platform for Story Writers",
    description:
      "Story_Co-Pilot is an AI-powered web platform designed to revolutionize the creative writing process. Recognizing the fragmented workflow writers often face – juggling tools like Word/Docs for writing, ChatGPT/Gemini for AI ideation, and Midjourney/Stable Diffusion for image generation –  Story_Co-Pilot unifies these core functions. The platform features a rich text editor integrated with Gemini LLM for seamless AI assistance, along with image generation capabilities, all within a single, streamlined interface.\nFrontend technologies :\n -> NextJS\n -> Tailwind CSS\n -> Typescript\n -> Framer Motion\n -> NextUI\n -> Firebase Authentication\n \nBackend technologies :\n -> NodeJS\n -> Express\n -> Typescript\n -> Firebase\n",
    image: storyCopilot,
    githubLink: "https://github.com/Pratik1374/Story_Co-Pilot.frontend",
    liveLink: "https://story-copilot.vercel.app/",
  },
  {
    title: "Personal Portfolio Website",
    description:
      "My personal portfolio website (right before your eyes) showcases my passion for web development, design, and creativity. As a React.js enthusiast, I have crafted this website to provide visitors with a seamless and interactive experience. Leveraging the power of Tailwind CSS, I have designed a visually appealing interface with responsive layouts that adapt to different screen sizes.\nImplemented Using :\n -> React\n -> Tailwind CSS\n -> Framer Motion (for animations)\n",
    image: portfolioWebsite,
    githubLink: "https://github.com/Pratik1374/my-portfolio",
    liveLink: "https://pratik-portfolio-temp.netlify.app/",
  },
  {
    title: "Ecommerce App",
    description:
      "Introducing the extraordinary Ecommerce App, a testament to my journey of growth and learning in the world of web development! Developed with the powerful MERN stack, this app showcases my expertise in building dynamic and feature-rich applications.In crafting this app, I have delved into the intricacies of pagination, enabling seamless navigation through a vast array of items. Additionally, I've implemented JWT-based authentication, mastering the art of securing user data and ensuring privacy.From the very foundation to the finest details, every aspect of this app represents my dedication to creating polished and user-friendly experiences. As visitors explore the app, they'll witness the fusion of design and technology, a result of countless hours spent honing my skills.\nImplemented Using :\n -> React\n -> Node\n -> Express\n -> MongoDB\n -> JWT based Authentication\n -> Ant-design (UI library for React)\n -> Bootstrap ",
    image: ecommerceAppImage,
    githubLink: "https://github.com/Pratik1374/Ecommerce_Website_Project",
    liveLink: "https://myecom-ecommerce-app.onrender.com/",
  },
  {
    title: "PromptShare",
    description:
      "PromptShare is an innovative AI prompt sharing platform built using Next.js, Tailwind CSS, and MongoDB. The platform allows users to create and share their creative prompts, which can be used for training AI models, generating content, and inspiring artistic creations.\nImplemented Using :\n -> Next JS\n -> Node\n -> MongoDB\n -> Google account login using NextAuth\n -> Tailwind CSS",
    image: promptShare,
    githubLink: "https://github.com/Pratik1374/PromptShare",
    liveLink: "",
  },
  {
    title: "News App",
    description:
      "Through the amalgamation of React, Bootstrap, and Third-party APIs, I have crafted a cutting-edge application that brings the latest news right to your fingertips.With the News App, users can explore a wide range of news categories, from global headlines to specific topics of interest. The seamless integration of React and Bootstrap ensures a visually appealing and responsive user interface, providing an enjoyable browsing experience on any device.\nImplemented using : \n -> React\n -> Bootstrap\n -> Third party API",
    image: newsAppImage,
    githubLink: "https://github.com/Pratik1374/News-App-Using-React",
    liveLink: "",
  },
];

export const teamProjects = [
  {
    title: "Local Document Summarization Website (SIH 2023)",
    description:
      "This project, developed during the Smart India Hackathon 2023, involved fine-tuning a Large Language Model for document summarization and integrating it into a web app using ReactJS for the frontend and PostgreSQL for the backend. The web app enables users to efficiently summarize documents with the power of AI..\nImplemented using : \n -> React\n -> Tailwind CSS\n -> Python\n -> Flask\n -> PostgreSQL",
    image: sihWebsite,
    githubLink: "",
    liveLink: "",
  },
  {
    title: "Attendify Android App",
    description:
      "Introducing Attendify, a dynamic Android app that revolutionizes attendance management, leaving behind the hassles of paperwork. Crafted with precision and passion by our team of two, this app stands as a remarkable academic project, seamlessly merging an attractive UI with cutting-edge functionalities. We have utilized Firebase for dynamic data retrieval, ensuring real-time access to attendance records.Moreover, Attendify features an exciting module of face recognition for seamless student identification through their images. Although the face recognition module is currently in progress, we are planning to implement a direct attendance system using this innovative technology.\nImplemented Using :\n -> Android Studio\n -> Java\n -> Firebase\n",
    image: attendify,
    githubLink: "https://github.com/Pratik1374",
    liveLink: "",
  },
];

export const experience = [
  {
    company: "ApplyBuddy Technologies",
    role: "Software Developer",
    duration: "September 2024 - Present",
    description: [
      "Designed and optimized complex SQL queries to enhance data retrieval and management, improving the efficiency of backend operations.",
      "Enhanced the SEO of the React application by implementing structured data with JSON-LD and using the Helmet package for better metadata management. Optimized images and lazy-loaded content, resulting in better search engine visibility and improved user traffic.",
      "Worked on algorithms related to text analysis, including sentiment analysis, and applied these algorithms via the ChatGPT API to generate and refine outputs that meet specific requirements.",
      "Engaged in prompt engineering to optimize API interactions, refining prompts to ensure high-quality and accurate responses, thereby improving overall user satisfaction.",
    ],
    appLink: "https://applybuddy.co",
  },
  {
    company: "ApplyBuddy Technologies",
    role: "Full Stack Developer Intern",
    duration: "May 2024 - August 2024",
    description: [
      "Developed 25+ reusable React components and implemented 20+ API endpoints using Node.js and Express, contributing to a robust and scalable SaaS application.",
      "Enhanced user experience by implementing responsive web pages and components with React, TypeScript, and CSS, adhering to provided UI designs and ensuring cross-device compatibility.",
      "Improved application performance by implementing Redis for caching and employing frontend caching strategies and debouncing techniques to minimize API calls.",
      "Elevated code quality and reliability by writing and executing comprehensive test cases using Jest.",
      "Strengthened application security by implementing a full authentication flow, incorporating JWT and Google OAuth.",
      "Utilized Storybook for efficient management and documentation of UI components, promoting consistency and reusability across the application.",
      "Collaborated effectively with the development team using Bitbucket for version control, facilitating seamless project tracking and code collaboration.",
    ],
    appLink: "https://applybuddy.co",
  },
  {
    company: "Apt-Tech Solutions",
    role: "Application Development Intern",
    duration: "August 2023 - October 2023",
    description: [
      "Collaborated on the design and functionality of the Apt-Tech Solutions attendance management app, now with 500+ downloads on the Google Play Store.",
      "Leveraged Firebase as the primary data storage solution, enabling efficient data storage and real-time updates.",
      "Led database design and optimization efforts, ensuring data integrity and efficient data storage.",
    ],
    appLink:
      "https://play.google.com/store/apps/details?id=com.wisnolect.apttech",
  },
];

export const achievements = [
  { text: "Finalist - Smart India Hackathon 2023", icon: "shield" },
  { text: "1st Place - Braint-It-On 2.0 Hackathon 2024", icon: "shield" },
];
