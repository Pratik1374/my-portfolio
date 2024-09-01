import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const About = () => {
  const aboutRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const { top } = aboutRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      if (top < windowHeight * 0.8) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section
      id="about"
      className="my-bg-dark-gradient py-20 text-white"
      ref={aboutRef}
    >
      <div className="flex flex-col justify-center items-center mx-2">
        <p className="text-3xl mb-4 underline underline-offset-4 text-cyan-300 font-extrabold">
          About Me
        </p>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={isVisible ? { opacity: 1, scale: 1 } : {}}
          transition={{
            duration: 0.2,
            ease: [0, 0.1, 0.2, 0.01],
            scale: {
              type: "spring",
              damping: 10,
              stiffness: 30,
              restDelta: 0.001,
            },
          }}
        >
          <div className="text-xl mt-4 rounded-md mx-4 p-4 md:p-10 about-card">
            I'm Pratik Jadhav, a frontend and full stack developer from
            Maharashtra, India. With experience in building responsive and
            user-friendly web applications, I've developed a range of projects
            from an AI-powered story-writing platform to ecommerce apps and
            websites for local businesses. I enjoy working with technologies
            like React, Next.js, and Node.js, and I focus on creating clean,
            efficient, and maintainable code. Whether it's developing reusable
            components, optimizing performance, or integrating APIs, I strive to
            deliver solutions that meet both user and business needs.
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
