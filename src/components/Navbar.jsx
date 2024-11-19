import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FeatherIcon from "feather-icons-react";

export const navLinks = [
  {
    id: "home",
    title: "Home",
    icon: <FeatherIcon icon="home" size={"20px"} />,
  },
  {
    id: "about",
    title: "About",
    icon: <FeatherIcon icon="user" size={"20px"} />,
  },
  {
    id: "experience",
    title: "Experience",
    icon: <FeatherIcon icon="briefcase" size={"20px"} />,
  },
  {
    id: "skills",
    title: "Skills",
    icon: <FeatherIcon icon="code" size={"20px"} />,
  },
  {
    id: "projects",
    title: "Projects",
    icon: <FeatherIcon icon="trello" size={"20px"} />,
  },
  {
    id: "certificates",
    title: "Achievements & Certificates",
    icon: <FeatherIcon icon="award" size={"20px"} />,
  },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
        setIsOpen(false);
      } else {
        setIsScrolled(false);
        setIsOpen(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const containerVariants = {
    open: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
    closed: {
      opacity: 0,
      transition: {
        staggerChildren: 0.1,
        staggerDirection: -1,
      },
    },
  };

  const itemVariants = {
    open: {
      opacity: 1,
      y: 0,
    },
    closed: {
      opacity: 0,
      y: -20,
    },
  };

  const radius = 80;
  const centerX = radius;
  const centerY = radius;
  const startAngleOffset = -Math.PI / 2;

  return (
    <div className="fixed top-[100px] right-[5px] md:right-0 z-[1000]">
      <button
        onClick={toggleNavbar}
        className="h-[40px] w-[40px] rounded-full md:hover:bg-gray-700 focus:outline-none relative z-10 flex items-center justify-center"
      >
        <div
          className={`h-[20px] w-[20px] transform transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
          style={{
            clipPath:
              "polygon(100% 0%, 75% 50%, 100% 100%, 25% 100%, 0% 50%, 25% 0%)",
            background: "linear-gradient(45deg, #00ffff, #0077cc)",
            boxShadow: "0 0 10px #00ffff, 0 0 20px #0077cc",
          }}
        />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className=" absolute top-[20px] right-0 w-[160px] h-[160px] rounded-full overflow-visible shadow-lg -translate-y-[50%] translate-x-[30%]"
            variants={containerVariants}
            initial="closed"
            animate="open"
            exit="closed"
          >
            {navLinks.map((link, index) => {
              const angle =
                startAngleOffset - (index / (navLinks.length - 1)) * Math.PI;
              const x = centerX + radius * Math.cos(angle) - 16;
              const y = centerY + radius * Math.sin(angle) - 16;

              return (
                <motion.a
                  key={link.id}
                  href={`#${link.id}`}
                  variants={itemVariants}
                  style={{
                    position: "absolute",
                    left: `${x}px`,
                    top: `${y}px`,
                  }}
                  className="p-2 rounded-full overflow-visible bg-black md:hover:bg-gray-800 focus:outline-none text-white border border-cyan-50 flex items-center justify-center relative group"
                >
                  <span>{link.icon}</span>
                  <span
                    className={`hidden md:block absolute ${
                      index < 1
                        ? "top-0"
                        : index > navLinks.length - 2
                        ? "top-full"
                        : "top-1/2"
                    } right-full -translate-y-1/2 whitespace-nowrap bg-transparent text-white bg-gray-950 border border-purple-200 mr-1 px-2 py-0.5 rounded text-xs opacity-0 transition-opacity duration-300 md:group-hover:opacity-100 z-50`}
                  >
                    {" "}
                    {/* Tooltip */}
                    {link.title}
                  </span>
                </motion.a>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
