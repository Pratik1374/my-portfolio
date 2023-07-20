import React, { useState } from "react";
import { myWork } from "../data/data";
import { dummy, profileImg } from "../assets";
// import { dummy } from "../assets";

const Work = () => {
  const [dummy,setDummy] = useState('');
  const getImage = async => {
    const img = import("../assets/dummy.jpg");
    console.log(img);
    setDummy(img);
  }
  return (
    <section id="work" className="my-bg-dark-gradient py-20">
      <div className="flex flex-col justify-center items-center mx-2">
        <p className="text-3xl mb-4 underline underline-offset-4 text-cyan-300 font-extrabold">
          Work
        </p>
        <div className="mx-2 flex flex-col justify-center mt-3">
          <div className="flex justify-center">
            <p className="text-lg text-sky-400 font-semibold outline-sky-800 outline-dashed p-1" onClick={getImage}>
              Personal Projects
            </p>
          </div>

          <div className="flex flex-wrap">
            <div className="mx-2 flex flex-wrap justify-center mt-3">
              {myWork.map((work) => (
                <div className="flex items-center h-[300px] w-[350px] p-2 m-2 cursor-pointer justify-center flex-col border-sky-500 border-2">
                  {/* <div className="w-full h-[80%] rounded-lg">
                    <img
                      className="w-[200px] h-[200px] object-contain cursor-pointer"
                      src={dummy}
                      alt=""
                    />
                  </div> */}
                  
                  <img
                    key={work.title}
                    src={work.img}
                    alt=""
                    className="h-[350px] w-[350px] object-fill duration-300"
                  />
                  <p>{work.title}</p>
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
