import React from "react";
import ContactBox from "../components/ContactBox";
import { downArrow, handshake } from "../assets";
import { motion } from "framer-motion";
import { Element } from "react-scroll";
import { useState, useEffect, useRef } from "react";

const Contact = () => {
  const handshakeRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const { top } = handshakeRef.current.getBoundingClientRect();
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
    <section id="contact" className="my-bg-dark-gradient py-20">
      <div className="flex justify-center flex-col items-center">
        <p className="text-3xl mb-4 underline underline-offset-4 text-cyan-300 font-extrabold">
          Contact
        </p>
        <p className="text-lg text-violet-400 ">Let's Connect</p>
        <motion.img
          ref={handshakeRef}
          animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.5 }}
          transition={{
            duration: 0.5,
            ease: "anticipate",
          }}
          initial={{ opacity: 0, scale: 0.5 }}
          src={handshake}
          alt=""
          className="h-[300px] w-[400px]"
        />
        <img src={downArrow} alt="" className="mb-7 animate-bounce" />
        <ContactBox />
      </div>
    </section>
  );
};

export default Contact;