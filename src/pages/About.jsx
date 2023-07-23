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
    <section id="about" className="my-bg-dark-gradient py-20 text-white" ref={aboutRef}>
      <div className="flex flex-col justify-center items-center mx-2">
        <p className="text-3xl mb-4 underline underline-offset-4 text-cyan-300 font-extrabold">
          About Me
        </p>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={isVisible ? { opacity: 1, scale: 1 } : {}}
          transition={{
            duration: 0.2,
            ease: [0, 0.71, 0.2, 1.01],
            scale: {
              type: "spring",
              damping: 5,
              stiffness: 100,
              restDelta: 0.001,
            },
          }}
        >
          <div className="text-xl mt-4 rounded-md mx-4 p-4 md:p-10 about-card">
            Welcome to my portfolio! I am a passionate and dedicated developer
            who thrives on creating impactful solutions that shape the world
            around us. With a strong foundation in MERN stack web development, I
            have honed my skills to craft stunning and dynamic applications.
            Driven by a desire to make a difference, I constantly seek new
            challenges and opportunities to expand my horizons. That's why I am
            eagerly looking forward to gaining valuable experience in the
            exciting realm of Artificial Intelligence and Machine Learning
            (AIML). By merging the power of AI with the versatility of web
            development, I aim to push boundaries and revolutionize industries.
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

