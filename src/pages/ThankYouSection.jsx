import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import ContactBox from "../components/ContactBox";

const generateConfetti = () => {
  const confettiColors = [
    "#A855F7",
    "#C084FC",
    "#D8B4FE",
    "#F472B6",
    "#E879F9",
  ];
  const confettiArray = Array.from({ length: 100 }, (_, i) => ({
    id: i,
    x: Math.random() * window.innerWidth - window.innerWidth / 2,
    y: Math.random() * -600 - 300,
    rotation: Math.random() * 360,
    color: confettiColors[Math.floor(Math.random() * confettiColors.length)],
    size: Math.random() * 10 + 4,
  }));

  return confettiArray;
};

const ThankYouConfettiBurst = () => {
  const confetti = generateConfetti();
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false });

  return (
    <section
      ref={sectionRef}
      className="relative flex items-center justify-center w-full mt-[700px] text-white pb-16"
      id="thank-you"
    >
      {/* Confetti */}
      {isInView &&
        confetti.map((piece) => (
          <motion.div
            key={piece.id}
            className="absolute rounded-full"
            style={{
              backgroundColor: piece.color,
              width: `${piece.size}px`,
              height: `${piece.size}px`,
            }}
            initial={{
              x: 0,
              y: 0,
              rotate: 0,
              opacity: 1,
            }}
            animate={{
              x: piece.x,
              y: piece.y,
              rotate: piece.rotation,
              opacity: 0,
            }}
            transition={{
              duration: 3,
              delay: Math.random() * 0.5,
              ease: "easeOut",
            }}
          />
        ))}

      {/* Content in the Middle */}
      <div className="relative text-center z-10">
        <h2 className="text-4xl font-bold mb-4">Thank You!</h2>
        <p className="text-lg">
          I appreciate your time and interest in exploring my portfolio. Feel
          free to reach out if you’d like to connect!
        </p>
        {/* Optional Button */}
        <a
          href="#contact"
          className="inline-block mt-6  text-white border-b px-2 rounded-lg shadow-lg hover:shadow-xl hover:bg-purple-200 transition duration-300"
        >
          Let's Connect
        </a>
        <div className="w-full flex items-center justify-center mt-6">
          <ContactBox />
        </div>
      </div>
    </section>
  );
};

export default ThankYouConfettiBurst;
