import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { achievements, myCertificates } from "../data/data";
import SectionHeading from "../components/SectionHeading";
import FeatherIcon from "feather-icons-react";

const Certificates = () => {
  const [isFanned, setIsFanned] = useState(false);
  const containerRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

  const cardVariants = {
    fanned: (i) => {
      const middleIndex = (myCertificates.length - 1) / 2;
      const offset = i - middleIndex;
      const angle = offset * (isMobile ? 5 : 10);
      const xPosition = offset * (isMobile ? 25 : 90);
      const yPosition = Math.abs(offset) * -10;

      return {
        x: xPosition,
        y: yPosition,
        rotate: angle,
        opacity: 1,
        transition: {
          type: "spring",
          stiffness: 100,
          damping: 20,
          delay: i * 0.05,
        },
      };
    },
    stacked: {
      x: 0,
      y: 0,
      rotate: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
      },
    },
    hidden: { opacity: 0 },
    selected: {
      scale: 1.2,
      zIndex: myCertificates.length + 1, // Ensure it's on top
      y: -50, // Adjust vertical position as needed
      x: 0, // Center horizontally
      rotate: 0, // No rotation
      transition: { type: "spring" },
    },
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    const handleClickOutside = (event) => {
      if (
        selectedCard !== null &&
        !containerRef.current?.contains(event.target)
      ) {
        setSelectedCard(null);
      }
    };

    const handleScroll = () => {
      if (selectedCard !== null) {
        setSelectedCard(null);
      }
    };

    window.addEventListener("scroll", handleScroll);

    document.addEventListener("mousedown", handleClickOutside);

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [selectedCard]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsFanned(entry.isIntersecting);
      },
      {
        threshold: 0.5,
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  const achievementVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        delay: i * 0.1,
      },
    }),
  };

  const achievementsRef = useRef(null); // Ref for the achievements container
  const achievementsInView = useInView(achievementsRef, {
    once: false,
    margin: "-50px 0px",
  });

  const handleCardClick = (index) => {
    setSelectedCard(selectedCard === index ? null : index);
  };

  return (
    <section
      className="w-full flex flex-col justify-center items-center"
      ref={containerRef}
      id="certificates"
    >
      <SectionHeading
        title="Achievements & Certificates"
        subtitle="Capturing moments of growth and achievement"
        icon="award"
      />

      {/* Achievements Section - styled as chips */}
      <motion.div
        className="mt-12 flex flex-wrap justify-center gap-4"
        ref={achievementsRef} // Add the ref here
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 },
          },
        }}
        initial="hidden"
        animate={achievementsInView ? "visible" : "hidden"} // Animate based on inView
      >
        {achievements.map((achievement, index) => (
          <motion.div
            key={index}
            variants={achievementVariants}
            custom={index}
            whileHover={{
              scale: 1.05,
              rotate: 5,
              transition: { type: "spring" },
            }}
            className="bg-gray-800 px-4 py-2 rounded-full border border-violet-600 flex items-center gap-2 cursor-pointer"
          >
            {achievement.icon && (
              <FeatherIcon
                icon={achievement.icon}
                size="32"
                className="text-violet-500"
              />
            )}
            <span className="text-lg">{achievement.text}</span>
          </motion.div>
        ))}
      </motion.div>

      <div className="relative w-full mt-[240px] md:mt-[300px] mb-[100px] flex justify-center items-center">
        <AnimatePresence>
          {myCertificates.map((card, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              initial="stacked"
              animate={
                selectedCard === index
                  ? "selected"
                  : isFanned
                  ? "fanned"
                  : "stacked"
              }
              exit="hidden"
              custom={index}
              whileHover={
                selectedCard === null && {
                  scale: 1.1,
                  zIndex: myCertificates.length,
                }
              }
              onClick={() => handleCardClick(index)}
              className="absolute w-[200px] h-[200px] md:w-[350px] md:h-[300px] bg-white rounded shadow-md cursor-pointer border border-violet-400"
              style={{
                zIndex:
                  selectedCard === index
                    ? myCertificates.length + 1
                    : myCertificates.length - index,
              }}
            >
              <img
                src={card.image}
                alt=""
                className="w-full h-full object-contain"
              />
            </motion.div>
          ))}
        </AnimatePresence>

        {/* Backdrop for mobile modal effect */}
        {isMobile && selectedCard !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.7 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCard(null)}
            className="absolute inset-0 bg-black z-[1000]"
            selected
            card
            style={{ pointerEvents: "auto" }}
          />
        )}
      </div>
    </section>
  );
};

export default Certificates;
