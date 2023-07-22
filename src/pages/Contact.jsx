import React from "react";
import ContactBox from "../components/ContactBox";
import { downArrow, handshake } from "../assets";


const Contact = () => {
  return (
    <section id="contact" className="my-bg-dark-gradient py-20">
      <div className="flex justify-center flex-col items-center">
        <p className="text-3xl mb-4 underline underline-offset-4 text-cyan-300 font-extrabold">
          Contact
        </p>
        <p className="text-lg text-violet-400 ">Let's Connect</p>
        <img src={handshake} alt="" className="h-[300px] w-[400px]"/>
        <img src={downArrow} alt="" className="mb-7 animate-bounce"/>
        <ContactBox />
      </div>
    </section>
  );
};

export default Contact;
