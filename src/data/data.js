import { android, backend, database, dummy, ecommerceAppImage, mernStack, newsAppImage } from "../assets";
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
    "title": "Database Management",
    "description": "I am passionate about managing databases to store and retrieve data efficiently for web and mobile applications. I ensure data integrity, performance, and security while working with both SQL and NoSQL databases.",
    "image": database,
    "subdomains": [
      {
        "title": "NoSQL",
        "description": "I have extensive experience with NoSQL databases, which provide flexibility and scalability for handling large volumes of unstructured data. I am proficient in NoSQL database systems like MongoDB, and I use them to design efficient data storage solutions for various projects."
      },
      {
        "title": "SQL",
        "description": "I am well-versed in SQL databases, which offer robust data integrity and support for complex queries. I work with SQL database systems like PostgreSQL, and SQLite to design relational database schemas and optimize data retrieval for web and mobile applications."
      }
    ]
  },
];

export const myWork = [
  {
    title: "Personal Portfolio Website",
    description:
      "My personal portfolio website (right before your eyes) showcases my passion for web development, design, and creativity. As a React.js enthusiast, I have crafted this website to provide visitors with a seamless and interactive experience. Leveraging the power of Tailwind CSS, I have designed a visually appealing interface with responsive layouts that adapt to different screen sizes.\nImplemented Using :\n -> React\n -> Tailwind CSS",
    image: dummy,
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
    title: "Personal Portfolio Website1",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia quod commodi in autem adipisci asperiores ut soluta, culpa veritatis fuga corrupti cupiditate excepturi at, odit voluptates eveniet modi beatae cum!Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia quod commodi in autem adipisci asperiores ut soluta, culpa veritatis fuga corrupti cupiditate excepturi at, odit voluptates eveniet modi beatae cum!Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia quod commodi in autem adipisci asperiores ut soluta, culpa veritatis fuga corrupti cupiditate excepturi at, odit voluptates eveniet modi beatae cum!Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia quod commodi in autem adipisci asperiores ut soluta, culpa veritatis fuga corrupti cupiditate excepturi at, odit voluptates eveniet modi beatae cum!Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia quod commodi in autem adipisci asperiores ut soluta, culpa veritatis fuga corrupti cupiditate excepturi at, odit voluptates eveniet modi beatae cum!Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia quod commodi in autem adipisci asperiores ut soluta, culpa veritatis fuga corrupti cupiditate excepturi at, odit voluptates eveniet modi beatae cum!dfgdghddddd\nfirst\nsecond",
    image: dummy,
    githubLink: "https://github.com/Pratik1374/my-portfolio",
    liveLink: "",
  },
  {
    title: "Ecommerce App1",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia quod commodi in autem adipisci asperiores ut soluta, culpa veritatis fuga corrupti cupiditate excepturi at, odit voluptates eveniet modi beatae cum!",
    image: dummy,
    githubLink: "",
    liveLink: "",
  },
  {
    title: "News App1",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia quod commodi in autem adipisci asperiores ut soluta, culpa veritatis fuga corrupti cupiditate excepturi at, odit voluptates eveniet modi beatae cum!",
    image: dummy,
    githubLink: "",
    liveLink: "",
  },
];
