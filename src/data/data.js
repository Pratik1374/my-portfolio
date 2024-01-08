import { adcetCertificate, android, attendify, backend, codigoCertificate, csiInAppCertificate, database, dummy, ecommerceAppImage, mauliSalon, mernStack, newsAppImage, portfolioWebsite, promptShare, squidSagaCertificate, udemyWebDevelopmentCertificate, sihCertificate } from "../assets";
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

export const mySkills = [
  {
    title: "Full Stack Web Development",
    description:
      "I specialize in building robust and scalable web applications using the MERN (MongoDB, Express, React, Node) stack. I have experience working with each component of the stack, allowing me to handle both frontend and backend development.",
    image: mernStack,
    subdomains: [
      {
        title: "MongoDB",
        description:
          "I am proficient in MongoDB, a NoSQL database, which enables me to design and manage the database schema efficiently. It allows me to handle large amounts of data and perform complex queries seamlessly.",
      },
      {
        title: "Express",
        description:
          "I use Express, a Node.js framework, to build robust and performant APIs for my web applications. It helps me handle routing, middleware, and other backend functionalities with ease.",
      },
      {
        title: "React",
        description:
          "I leverage React to build interactive and dynamic user interfaces for web applications. It enables me to create reusable components, manage state efficiently, and deliver smooth user experiences.",
      },
      {
        title: "Node",
        description:
          "I have expertise in Node.js, which allows me to develop server-side applications and APIs. I use it to handle server-side logic, connect with databases, and ensure seamless communication with the frontend.",
      },
    ],
  },
  {
    title: "Frontend Development",
    description:
      "I specialize in creating responsive and interactive user interfaces using cutting-edge frontend technologies. I am passionate about delivering seamless user experiences that engage and delight users.",
    image: frontend,
    subdomains: [
      {
        title: "React JS",
        description:
          "I have hands-on experience with React, a popular JavaScript library for building reusable and efficient UI components. I use React to create dynamic and engaging user interfaces for web applications.",
      },
      {
        title: "Tailwind CSS",
        description:
          "I am proficient in Tailwind CSS, a utility-first CSS framework, which allows me to rapidly build custom designs with minimal CSS code. It enables me to create beautiful and responsive layouts effortlessly.",
      },
      {
        title: "Bootstrap",
        description:
          "I have a strong grasp of Bootstrap, a widely-used CSS framework, to build responsive and mobile-first web designs. Bootstrap empowers me to create visually appealing websites with its pre-built components and styles.",
      },
    ],
  },
  {
    title: "Backend Development",
    description:
      "As a backend developer, I specialize in building the server-side logic and APIs that power web applications. I enjoy designing and implementing efficient and secure server architectures that handle complex data operations.",
    image: backend,
    subdomains: [
      {
        title: "MongoDB",
        description:
          "I am well-versed in MongoDB, a powerful NoSQL database, which allows me to create scalable and flexible database schemas. I use MongoDB to manage and store large volumes of data efficiently for web applications.",
      },
      {
        title: "Express",
        description:
          "I have extensive experience with Express, a fast and minimalist web framework for Node.js. I use Express to build robust and scalable APIs, handle middleware, and implement routing for backend services.",
      },
      {
        title: "Node",
        description:
          "I have strong expertise in Node.js, a JavaScript runtime, which enables me to build server-side applications and handle server-side logic. I leverage Node.js to create high-performance and scalable backend solutions for web applications.",
      },
    ],
  },
  {
    title: "Android Development",
    description:
      "I am passionate about creating native Android applications that provide seamless experiences for users. I enjoy developing interactive and user-friendly mobile apps that leverage the latest Android technologies.",
    image: android,
    subdomains: [
      {
        title: "Java",
        description:
          "As an Android developer, I am proficient in Java, the primary language used for Android app development. I leverage Java's object-oriented programming capabilities to build robust and efficient Android applications. I use Java to implement the core functionalities of my apps, handle data manipulation, and interact with various Android components.",
      },
      {
        title: "Firebase",
        description:
          "I have hands-on experience with Firebase, a powerful backend platform for mobile and web applications. I utilize Firebase services like Firestore, Authentication, and Cloud Functions to build real-time and scalable mobile applications.",
      },
    ],
  },
  {
    title: "Database Management",
    description: "I am passionate about managing databases to store and retrieve data efficiently for web and mobile applications. I ensure data integrity, performance, and security while working with both SQL and NoSQL databases.",
    image: database,
    subdomains: [
      {
        title: "NoSQL",
        description: "I have extensive experience with NoSQL databases, which provide flexibility and scalability for handling large volumes of unstructured data. I am proficient in NoSQL database systems like MongoDB, and I use them to design efficient data storage solutions for various projects."
      },
      {
        title: "SQL",
        description: "I am well-versed in SQL databases, which offer robust data integrity and support for complex queries. I work with SQL database systems like PostgreSQL, and SQLite to design relational database schemas and optimize data retrieval for web and mobile applications."
      }
    ]
  },
];

export const myCertificates = [
  {
    title: "SIH 2023 Finalist",
    image: sihCertificate 
  },
  {
    title: "Web Developer Bootcamp (Udemy)",
    image: udemyWebDevelopmentCertificate 
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

export const myWork = [
  {
    title: "Personal Portfolio Website",
    description:
      "My personal portfolio website (right before your eyes) showcases my passion for web development, design, and creativity. As a React.js enthusiast, I have crafted this website to provide visitors with a seamless and interactive experience. Leveraging the power of Tailwind CSS, I have designed a visually appealing interface with responsive layouts that adapt to different screen sizes.\nImplemented Using :\n -> React\n -> Tailwind CSS\n -> Framer Motion (for animations)\n",
    image: portfolioWebsite,
    githubLink: "https://github.com/Pratik1374/my-portfolio",
    liveLink: "https://github.com/Pratik1374/my-portfolio",
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

export const teamWork = [
  {
    title: "Mauli Salon Website",
    description:
      "Introducing the stunning online presence of Mauli Salon, a renowned salon nestled in the heart of Sangli. We are thrilled to present the successful completion of this freelance project by our talented team! Our team embarked on an exciting journey to craft a captivating website for Mauli Salon, elevating their brand to new heights in the digital realm. Leveraging the power of cutting-edge technologies, we brought their vision to life with React JS, while ensuring seamless functionality with MongoDB and Node for the backend.\nImplemented Using :\n -> React\n -> Node\n -> Express\n -> MongoDB\n -> JWT based Authentication(for admin login)\n -> Framer Motion (for animations)\n",
    image: mauliSalon,
    githubLink: "https://github.com/Pratik1374/Mauli_Salon",
    liveLink: "https://mauli-salon.onrender.com",
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
