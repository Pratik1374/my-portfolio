import React, { useEffect, useRef, useState }  from "react";
import { mySkills } from "../data/data";
import { motion } from "framer-motion";

const ProgressBar = ({ percentage }) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <span className="w-full h-2 bg-white rounded-md inline-flex mt-2" ref={ref}>
      <motion.span
        initial={{ x: "-100%", opacity: 0 }}
        animate={{ x: isVisible ? 0 : "-100%", opacity: isVisible ? 1 : 0 }}
        transition={{ duration: 0.5, delay: isVisible ? 0.5 : 0 }}
        style={{ width: `${percentage}%` }}
        className="h-full bg-gradient-to-r from-blue-600 via-blue-400 to-blue-200 rounded-md relative"
      >
        <span className="absolute -top-7 right-0">{percentage}%</span>
      </motion.span>
    </span>
  );
};

const SkillItem = ({ skill }) => (
  <div
    key={skill.title}
    className="flex flex-col justify-center items-center m-2 animate-pulse hover:animate-none cursor-pointer"
  >
    <img
      src={skill.image}
      alt=""
      className="p-0.5 rounded-full h-[70px] w-[70px] border-cyan-300 border-2 object-contain"
    />
    <span className="border-cyan-400 border-2 h-[30px] w-[2px] "></span>
    <div className="rounded-2xl h-[300px] w-[350px] border-cyan-400 border-2 overflow-hidden hover:overflow-auto p-2">
      <h3 className="mt-3 text-center font-bold text-lg text-purple-600">
        {skill.title}
      </h3>
      <p className="m-3">{skill.description}</p>
      <p className="ml-3 mb-2">Sub-domains in this field that I have learned:</p>
      {skill.subdomains.map((subdomain) => (
        <div key={subdomain.title} className="ml-4 flex items-center group">
          <div className="flex flex-col items-center">
            <span className="h-[15px] w-[2px] border-purple-600 border-[1.5px]" />
            <span className="rounded-full h-[15px] w-[15px] border-purple-600 border-[1.5px] group-hover:bg-purple-600" />
            <span className="h-[15px] w-[2px] border-purple-600 border-[1.5px]" />
          </div>
          <span className="h-[2px] w-[15px] border-purple-600 border-[1.5px]" />
          <div className="relative">
            <p className="ml-2 group-hover:text-purple-400 group-hover:font-extrabold">
              {subdomain.title}
            </p>
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
);

const Skills = () => {
  return (
    <section id="skills" className="my-bg-dark-gradient py-20">
      <div className="flex flex-col justify-center items-center mx-2">
        <p className="text-3xl mb-4 underline underline-offset-4 text-cyan-300 font-extrabold">
          Skills
        </p>
        <div className="mx-2 flex flex-wrap justify-center mt-3">
          {mySkills.map((skill) => (
            <SkillItem key={skill.title} skill={skill} />
          ))}
        </div>
      </div>
      <div className="flex justify-center my-8">
        <p className="text-lg text-cyan-400 font-semibold outline-sky-800 outline-dashed p-1">
          Programming Languages and Frameworks
        </p>
      </div>
      <div className="flex w-full justify-center flex-col lg:flex-row lg:justify-around items-center">

        <div className="flex w-5/6 flex-col lg:w-1/3">
          {[
            { title: "Javascript", percentage: 85 },
            { title: "C++", percentage: 85 },
            { title: "Java", percentage: 75 },
            { title: "C", percentage: 65 },
            { title: "HTML & CSS", percentage: 80 },
          ].map((item) => (
            <div key={item.title} className="overflow-x-hidden">
              <p className="text-sm uppercase font-medium">{item.title}</p>
              <ProgressBar percentage={item.percentage} />
            </div>
          ))}
        </div>
        <div className="flex w-5/6 flex-col lg:w-1/3">
          {[
            { title: "React JS", percentage: 90 },
            { title: "Node JS", percentage: 80 },
            { title: "Tailwind CSS", percentage: 70 },
            { title: "SQL & NoSQL", percentage: 80 },
            { title: "Git & GitHub", percentage: 85 },
          ].map((item) => (
            <div key={item.title} className="overflow-x-hidden">
              <p className="text-sm uppercase font-medium">{item.title}</p>
              <ProgressBar percentage={item.percentage} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
