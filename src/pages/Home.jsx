import React from "react";
import { profileImg } from "../assets";
import { useTypewriter, Cursor } from "react-simple-typewriter";

const Home = () => {
  const [text] = useTypewriter({
    words: ["Pratik Sukhadev Jadhav"],
    typeSpeed: 60,
    delaySpeed: 2000,
  });

  return (
    <section
      id="home"
      className="my-bg-dark-gradient text-white relative w-full h-[700px] md:h-[500px] mx-auto pb-20 flex flex-wrap items-center "
    >
      <div className="w-full h-1/2 md:w-1/2 flex justify-center items-center">
        <img src={profileImg} alt="" className="w-[300px] h-[300px]" />
      </div>
      <div className="w-full h-1/2 md:w-1/2 flex">
        <div className="flex flex-col ">
          <h1 className="mx-[10px] font-black text-white lg:text-[40px] sm:text-[40px] xs:text-[50px] text-[40px] flex flex-col ">
            <span>Hi I'm </span>
            <div>
              <span className="text-[#915EFF]">{text}</span>
              <Cursor
                cursorBlinking="false"
                cursorStyle="|"
                cursorColor="#ff014f"
              />
            </div>
            {/* <span>Hi I'm </span>
            <span className="text-[#915EFF]">
              Pratik Sukhadev Jadhav
            </span> */}
          </h1>
          <p className="mx-[10px] p-2">
            Coding is my canvas, and technology is my palette. Through lines of
            code and pixels of innovation, I paint immersive digital worlds that
            inspire, engage, and push the boundaries of what's possible.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Home;
