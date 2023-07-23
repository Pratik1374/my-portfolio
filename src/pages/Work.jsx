import React, { useState } from "react";
import { myWork, teamWork } from "../data/data";
import { Link } from "react-router-dom";
import { github, live } from "../assets";
import ReactCardFlip from "react-card-flip";

const Work = () => {
  const [isFlippedArray, setIsFlippedArray] = useState(myWork.map(() => false));
  const [isFlippedArrayTeam, setIsFlippedArrayTeam] = useState(
    teamWork.map(() => false)
  );

  const handleFlip = (index) => {
    const updatedFlippedArray = [...isFlippedArray];
    updatedFlippedArray[index] = !updatedFlippedArray[index];
    setIsFlippedArray(updatedFlippedArray);
  };

  const handleFlipTeam = (index) => {
    const updatedFlippedArray = [...isFlippedArrayTeam];
    updatedFlippedArray[index] = !updatedFlippedArray[index];
    setIsFlippedArrayTeam(updatedFlippedArray);
  };

  return (
    <section id="work" className="my-bg-dark-gradient py-20">
      <div className="flex flex-col justify-center items-center mx-2">
        <p className="text-3xl mb-4 underline underline-offset-4 text-cyan-300 font-extrabold">
          Work
        </p>
        <div className="mx-2 flex flex-col justify-center mt-3">
          <div className="flex justify-center">
            <p className="text-lg text-cyan-400 font-semibold outline-sky-800 outline-dashed p-1 my-2">
              Personal Projects
            </p>
          </div>

          <div className="flex flex-wrap">
            <div className="mx-2 flex flex-wrap gap-3 gap-y-8 justify-center mt-3">
              {myWork.map((work, index) => (
                <div className="flex flex-col items-center m-2">
                  <div
                    className="flex text-black h-9 items-center -mb-2.5 cursor-pointer px-7 font-semibold bg-cyan-300 rounded-tl-full rounded-tr-full"
                    onClick={() => handleFlip(index)}
                  >
                    Click here to Flip
                  </div>
                  <ReactCardFlip
                    key={work.title}
                    isFlipped={isFlippedArray[index]}
                    flipDirection="horizontal"
                  >
                    <div
                      key={work.title}
                      className="flex items-center h-[300px] w-[350px] p-2 m-2 cursor-pointer justify-center flex-col rounded-lg my-bg-bright-gradient  "
                    >
                      <img
                        key={work.title}
                        src={work.image}
                        alt=""
                        className="h-[350px] w-[350px] object-fill hover:scale-105"
                      />
                      <p className="uppercase font-bold text-purple-600 my-3">
                        {work.title}
                      </p>
                      <div className="w-full flex justify-around ">
                        <a
                          href={work.githubLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex bg-cyan-400 justify-center items-center rounded-full p-1"
                        >
                          <img
                            src={github}
                            alt=""
                            className="h-[20px] w-[20px] object-fill "
                          />
                          <p className="text-black font-semibold mx-[2px]">
                            GitHub
                          </p>
                        </a>
                        {work.liveLink && (
                          <a
                            href={work.liveLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex bg-cyan-400 justify-center items-center rounded-full p-1"
                          >
                            <img
                              src={live}
                              alt=""
                              className="h-[20px] w-[20px] object-fill "
                            />
                            <p className="text-black font-semibold mx-[2px]">
                              Live
                            </p>
                          </a>
                        )}
                      </div>
                    </div>
                    <div
                      key={`${work.title}_back`}
                      className="flex flex-col h-[300px] w-[350px] p-2 m-2 cursor-pointer  rounded-lg my-bg-bright-gradient overflow-clip hover:overflow-auto"
                    >
                      <p className="uppercase font-bold text-purple-600 text-center">
                        {work.title}
                      </p>
                      <div className="mx-3 my-bg-black-gradient p-2 mt-2 rounded-md">
                        {work.description.split("\n").map((line, ind) => (
                          <p key={ind} className="text-blue-100">
                            {line}
                          </p>
                        ))}
                      </div>
                    </div>
                  </ReactCardFlip>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="mx-2 flex flex-col justify-center mt-8">
          <div className="flex justify-center">
            <p className="text-lg text-cyan-400 font-semibold outline-sky-800 outline-dashed p-1 my-2">
              Group Projects
            </p>
          </div>

          <div className="flex flex-wrap">
            <div className="mx-2 flex flex-wrap gap-3 gap-y-8 justify-center mt-3">
              {teamWork.map((work, index) => (
                <div className="flex flex-col items-center m-2">
                  <div
                    className="flex text-black h-9 items-center -mb-2.5 cursor-pointer px-7 font-semibold bg-cyan-300 rounded-tl-full rounded-tr-full"
                    onClick={() => handleFlipTeam(index)}
                  >
                    Click here to Flip
                  </div>
                  <ReactCardFlip
                    key={work.title}
                    isFlipped={isFlippedArrayTeam[index]}
                    flipDirection="horizontal"
                  >
                    <div
                      key={work.title}
                      className="flex items-center h-[300px] w-[350px] p-2 m-2 cursor-pointer justify-center flex-col rounded-lg my-bg-bright-gradient  "
                    >
                      <img
                        key={work.title}
                        src={work.image}
                        alt=""
                        className="h-[350px] w-[350px] object-fill hover:scale-105"
                      />
                      <p className="uppercase font-bold text-purple-600 my-3">
                        {work.title}
                      </p>
                      <div className="w-full flex justify-around ">
                        <a
                          href={work.githubLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex bg-cyan-400 justify-center items-center rounded-full p-1"
                        >
                          <img
                            src={github}
                            alt=""
                            className="h-[20px] w-[20px] object-fill "
                          />
                          <p className="text-black font-semibold mx-[2px]">
                            GitHub
                          </p>
                        </a>
                        {work.liveLink && (
                          <a href={work.liveLink} className="flex bg-cyan-400 justify-center items-center rounded-full p-1">
                            <img
                              src={live}
                              alt=""
                              className="h-[20px] w-[20px] object-fill "
                            />
                            <p className="text-black font-semibold mx-[2px]">
                              Live
                            </p>
                          </a>
                        )}
                      </div>
                    </div>
                    <div
                      key={`${work.title}_back`}
                      className="flex flex-col h-[300px] w-[350px] p-2 m-2 cursor-pointer  rounded-lg my-bg-bright-gradient overflow-clip hover:overflow-auto"
                    >
                      <p className="uppercase font-bold text-purple-600 text-center">
                        {work.title}
                      </p>
                      <div className="mx-3 my-bg-black-gradient p-2 mt-2 rounded-md">
                        {work.description.split("\n").map((line, ind) => (
                          <p key={ind} className="text-blue-100">
                            {line}
                          </p>
                        ))}
                      </div>
                    </div>
                  </ReactCardFlip>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
