import React, { useRef, useState } from "react";
import { myCertificates } from "../data/data";

const Certificates = () => {
  const certificatesRef = useRef(null);
  const [hoveredIndex, setHoveredIndex] = useState(-1);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(-1);
  };

  return (
    <section
      id="certificates"
      className="my-bg-dark-gradient py-20 text-white"
      ref={certificatesRef}
    >
      <div className="flex flex-col justify-center items-center mx-2">
        <p className="text-3xl mb-4 underline underline-offset-4 text-cyan-300 font-extrabold">
          Certificates
        </p>
        <div className="m-2 flex flex-wrap justify-center mt-3 group">
          {myCertificates.map((certificate, index) => (
            <div
              key={certificate.title}
              className="border-2 border-cyan-500 flex items-center h-[350px] w-[350px] p-2 m-2 cursor-pointer justify-center flex-col my-4 "
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              <img
                key={certificate.title}
                src={certificate.image}
                alt=""
                className={`h-[350px] w-[350px] object-fill overflow-hidden md:hover:scale-150 md:hover:z-10 ${
                  hoveredIndex !== -1 && hoveredIndex !== index && "md:filter md:blur-sm"
                }`}
              />
              <p className="uppercase font-bold text-purple-600 my-3">
                {certificate.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;

