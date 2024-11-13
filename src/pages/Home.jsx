import React from "react";
import { profileImg } from "../assets";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { motion } from "framer-motion";
import { resumePDF } from "../assets";
import semicircleGlowImg from "../assets/semicircle-glow.png";
import NeonParticlesBackground from "../components/NeonParticles";
import ContactBox from "../components/ContactBox";
import NeonButton from "../components/Button";

const Home = () => {
  const [text] = useTypewriter({
    words: ["Hi, I'm Pratik Jadhav"],
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
        a.download = "Pratik_Resume.pdf";
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
      className="text-white relative w-full h-screen md:max-h-[1000px] flex justify-center items-center "
    >
      <div className="absolute top-0 left-0 w-[900px] h-[900px] -translate-x-[45%] -translate-y-[50%] rotate-[135deg]">
        <img src={semicircleGlowImg} alt="" className="w-full h-full" />
      </div>

      <NeonParticlesBackground />

      <div className="flex items-center justify-center mt-[100px] md:mt-[50px] z-50">
        <div className="flex flex-col gap-2 items-center justify-center">
          <h1 className="mx-[20px] font-black text-white lg:text-[40px] sm:text-[30px] xs:text-[30px] text-[30px] flex flex-col">
            {text}
          </h1>
          <motion.p
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 2,
              delay: 0.1,
              ease: "linear",
            }}
            initial={{ opacity: 0, scale: 0.5 }}
            className="p-2 my-tagline-bg rounded-md max-w-[600px] text-center"
          >
            Coding is my canvas, and technology is my palette. Through lines of
            code and pixels of innovation, I paint immersive digital worlds that
            inspire, engage, and push the boundaries of what's possible.
          </motion.p>
          <div className="flex w-full h-full items-center justify-center mt-9">
            <ContactBox />
          </div>
          <div className="flex justify-center mt-9">
            <NeonButton text={"Download Resume"} onClick={handleDownload}/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
