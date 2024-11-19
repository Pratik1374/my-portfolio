import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";
import FeatherIcon from "feather-icons-react";

const ProjectCard = ({ project, flipDirection = "horizontal" }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => setIsFlipped(!isFlipped);

  return (
    <div className="flex flex-col items-center m-2">
      <div
        className="text-xs flex text-white h-8 items-center  cursor-pointer px-5 font-semibold border border-b-0 border-violet-500 hover:bg-violet-950 rounded-tl-full rounded-tr-full z-10 select-none"
        onClick={handleFlip}
      >
        Click here to Flip
      </div>
      <ReactCardFlip isFlipped={isFlipped} flipDirection={flipDirection}>
        {/* Front of the Card */}
        <div
          className="flex flex-col items-center h-[320px] w-[350px] p-2 cursor-pointer justify-center rounded-lg overflow-hidden"
          style={{
            background:
              "linear-gradient(135deg, rgba(0,0,0,0.7) 0%, rgba(50,50,100,0.7) 100%)",
            boxShadow: "0px 0px 15px rgba(148, 0, 211, 0.3)",
          }}
        >
          <div className="h-[200px] w-full border border-red-200 overflow-hidden rounded-lg">
            <img
              src={project.image}
              alt=""
              className="w-full h-full object-contain transition-transform duration-300 hover:scale-105"
            />
          </div>
          <div className="flex-1 w-full mt-3">
            <p className="uppercase font-bold text-gray-300 text-center">
              {project.title}
            </p>
            <div className="w-full flex justify-around mt-2">
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center text-purple-200 hover:text-purple-100 transition duration-300 shadow-md shadow-violet-500 py-1 px-2 bg-transparent rounded-md hover:scale-110"
              >
                GitHub
                <FeatherIcon
                  icon="external-link"
                  size={16}
                  className="ml-1 stroke-purple-300 group-hover:stroke-purple-100 transition-colors duration-300"
                />
              </a>
              {project.liveLink && (
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center text-purple-200 hover:text-purple-100 transition duration-300 shadow-md shadow-violet-500 py-1 px-2 bg-transparent rounded-md hover:scale-110"
                >
                  Live
                  <FeatherIcon
                    icon="external-link"
                    size={16}
                    className="ml-1 stroke-purple-300 group-hover:stroke-purple-100 transition-colors duration-300"
                  />
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Back of the Card */}
        <div
          className="flex flex-col h-[320px] w-[350px] p-2 cursor-pointer rounded-lg overflow-hidden"
          style={{
            background:
              "linear-gradient(135deg, rgba(0,0,0,0.7) 0%, rgba(50,50,100,0.7) 100%)",
            boxShadow: "0px 0px 15px rgba(148, 0, 211, 0.3)",
          }}
        >
          <p className="uppercase font-bold text-purple-600 text-center mb-3">
            {project.title}
          </p>
          <div className="rounded-md overflow-y-auto">
            {project.description.split("\n").map((line, ind) => (
              <p key={ind} className="text-blue-100 mb-1">
                {line}
              </p>
            ))}
          </div>
        </div>
      </ReactCardFlip>
    </div>
  );
};

export default ProjectCard;
