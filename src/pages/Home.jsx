import React from "react";
import { profileImg } from "../assets";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { motion } from "framer-motion";
import { resumePDF } from "../assets";
import Bubbles from "../components/Bubbles";
import NeonBulbs from "../components/neon-bulbs/NeonBulbs";
import NeuralNetworkBackground from "../components/temp";
import semicircleGlowImg from "../assets/semicircle-glow.png"
import NeonBackground from "../components/temp";

const Home = () => {
  const [text] = useTypewriter({
    words: ["Pratik Sukhadev Jadhav"],
    typeSpeed: 60,
    delaySpeed: 2000,
  });

  const handleDownload = () => {
    fetch(resumePDF)
      .then((response) => response.blob())
      .then((blob) => {
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = "Pratik_Resume.pdf"; // Change the file name if needed
        a.click();
        URL.revokeObjectURL(url);
      })
      .catch((error) => {
        console.error("Error fetching the resume PDF:", error);
      });
  };

  const [showBubbles, setShowBubbles] = React.useState(false);

  React.useEffect(() => {
    const timeout = setTimeout(() => {
      setShowBubbles(true);
    }, 2000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <section
      id="home"
      className="my-bg-dark-gradient text-white relative w-full flex justify-center items-center "
    >
      <div className="absolute top-0 left-0 w-[900px] h-[900px] -translate-x-[45%] -translate-y-[50%] rotate-[135deg]">
        <img src={semicircleGlowImg} alt="" className="w-full h-full"/>
      </div>

      <NeonBackground/>
    
      <div className="flex items-center justify-center mt-[200px] md:mt-[50px] z-50">
        <div className="flex flex-col ">
          <h1 className="mx-[20px] font-black text-white lg:text-[40px] sm:text-[40px] xs:text-[50px] text-[40px] flex flex-col ">
            <span className="text-[30px] lg:text-[40px]">Hi, I'm </span>
            <div>
              <span
                className="text-[#915EFF] text-[30px] lg:text-[40px] drop-shadow-lg  shadow-white"
                style={{ textShadow: "1px 1px 19px rgba(143, 53, 255, 1)" }}
              >
                {text}
              </span>
              <Cursor
                cursorBlinking={false}
                cursorStyle="|"
                cursorColor="#a44aff"
              />
            </div>
          </h1>
          <motion.p
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 2,
              delay: 0.1,
              ease: "linear",
            }}
            initial={{ opacity: 0, scale: 0.5 }}
            className=" p-2 my-tagline-bg mx-[20px] mt-4 rounded-md max-w-[600px]"
          >
            "Coding is my canvas, and technology is my palette. Through lines of
            code and pixels of innovation, I paint immersive digital worlds that
            inspire, engage, and push the boundaries of what's possible."
          </motion.p>
          <div className=" flex justify-center pt-10 lg:pt-20">
            <button
              className="bg-cyan-400 text-black font-semibold p-2 rounded-lg  hover:scale-105 z-10"
              onClick={handleDownload}
            >
              Download Resume
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
