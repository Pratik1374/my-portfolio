import React from "react";
import { mySkills } from "../data/data";
import dummy from "../assets/profileImg.svg";
import { profileImg } from "../assets";
import { motion } from "framer-motion";

const Skills = () => {
  return (
    <section id="skills" className="my-bg-dark-gradient py-20">
      <div className="flex flex-col justify-center items-center mx-2">
        <p className="text-3xl mb-4 underline underline-offset-4 text-cyan-300 font-extrabold">
          Skills
        </p>
        <div className="mx-2 flex flex-wrap justify-center mt-3">
          {mySkills.map((skill) => (
            <div className="flex flex-col justify-center items-center m-2 animate-pulse hover:animate-none cursor-pointer">
              <img
                src={skill.image}
                alt=""
                className="p-0.5 rounded-full h-[70px] w-[70px] border-blue-300 border-2 object-contain"
              ></img>
              <span className="border-blue-400 border-2 h-[30px] w-[2px] "></span>
              <div className="rounded-md h-[300px] w-[350px] border-blue-400 border-2 overflow-hidden hover:overflow-auto p-2 ">
                <h3 className="mt-3 text-center font-bold text-lg text-purple-600">
                  {skill.title}
                </h3>
                <p className="m-3">{skill.description}</p>

                <p className="ml-3 mb-2">
                  Sub-domains in this field that I have learned : 
                </p>
                {skill.subdomains.map((subdomain) => (
                  <div className="ml-4 flex items-center group">
                    <div className="flex flex-col items-center">
                      <span className="h-[15px] w-[2px] border-purple-600 border-[1.5px]"></span>
                      <span className="rounded-full h-[15px] w-[15px] border-purple-600 border-[1.5px] group-hover:bg-purple-600"></span>
                      <span className="h-[15px] w-[2px] border-purple-600 border-[1.5px]"></span>
                    </div>
                    <span className="h-[2px] w-[15px] border-purple-600 border-[1.5px]"></span>
                    <div className="relative">
                      <p className="ml-2 group-hover:text-purple-400 group-hover:font-extrabold">{subdomain.title}</p>
                      <div
                        className="flex invisible w-[250px] top-7 left-2 
                        absolute group-hover:visible bg-violet-400 z-10 
                        text-black p-2 border-2 rounded-lg"
                      >
                        {subdomain.description}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
