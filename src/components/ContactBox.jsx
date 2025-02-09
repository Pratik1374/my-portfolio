import React from "react";
import FeatherIcon from "feather-icons-react";
import { motion } from "framer-motion";

const socialLinks = [
  {
    platform: "github",
    url: "https://github.com/Pratik1374/",
  },
  {
    platform: "mail",
    url: "mailto:pratik1374@gmail.com",
  },
  {
    platform: "linkedin",
    url: "https://www.linkedin.com/in/pratik1374",
  },
];

const ContactBox = () => {
  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, delayChildren: 0.2, staggerChildren: 0.2} },
  };

  return (
    <motion.div className="flex gap-10" variants={variants}
    initial="hidden"
    animate="visible">
      {socialLinks.map((link) => (
        <motion.a
        key={link.platform}
        href={link.url}
        target="_blank"
        rel="noopener noreferrer"
        className={`p-3 hover:bg-gray-900 rounded-xl text-black text-xl bg-black border border-purple-200`}
        whileHover={{ scale: 1.1, backgroundColor: "rgb(17 24 39 / #111827) " }} // Hover animation
        whileTap={{ scale: 0.9 }} // Tap/click animation
        transition={{ type: "spring", stiffness: 40, damping: 4 }}
           variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <FeatherIcon icon={link.platform} size={"20px"} fill="white" />
        </motion.a>
      ))}
    </motion.div>
  );
};

export default ContactBox;
