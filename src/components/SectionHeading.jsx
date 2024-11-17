import React, { useEffect, useRef } from "react";
import FeatherIcon from "feather-icons-react";
import { motion, useInView, useAnimation } from "framer-motion";

const SectionHeading = ({ title, subtitle, icon }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.2 });
  const controls = useAnimation();

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [isInView, controls]);

  return (
    <motion.div
      ref={ref}
      className="flex flex-col items-center text-center mb-12"
      initial="hidden"
      animate={controls}
      variants={containerVariants}
    >
      <motion.div
        className="flex items-center space-x-4"
        variants={itemVariants}
      >
        {icon && (
          <motion.div variants={itemVariants}>
            <FeatherIcon
              icon={icon}
              size="36"
              className="text-indigo-500 animate-pulse"
            />
          </motion.div>
        )}
        <motion.h2
          className="relative z-10 text-4xl lg:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500"
          variants={itemVariants}
        >
          {title}
        </motion.h2>
      </motion.div>

      {subtitle && (
        <motion.p
          className="mt-2 text-gray-200 text-lg max-w-2xl"
          variants={itemVariants}
        >
          {subtitle}
        </motion.p>
      )}

      <motion.div
        className="w-16 h-1 bg-violet-500 rounded-full mt-6"
        variants={itemVariants}
      />
    </motion.div>
  );
};

export default SectionHeading;
