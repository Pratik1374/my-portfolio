import React from "react";
import { FaLinkedinIn } from "react-icons/fa";
import { SiGithub, SiGmail } from "react-icons/si";

const ContactBox = () => {
  return (
    <div className="flex gap-10">
      <a
        href="https://github.com/Pratik1374/"
        target="_blank"
        rel="noopener noreferrer"
        className="p-3 hover:bg-sky-200 rounded-xl bg-cyan-500 text-black text-xl"
        style={{boxShadow: "0px 2px 28px 1px rgba(83,229,242,1)"}}
      >
        <SiGithub />
      </a>

      <a
        href="mailto:pratik1374@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
        className="p-3 hover:bg-sky-200 rounded-xl bg-cyan-500 text-black text-xl"
        style={{boxShadow: "0px 2px 28px 1px rgba(83,229,242,1)"}}
      >
        <SiGmail />
      </a>

      <a
        href="https://www.linkedin.com/in/pratik-jadhav-7a969920b"
        target="_blank"
        rel="noopener noreferrer"
        className="p-3 hover:bg-sky-200 rounded-xl bg-cyan-500 text-black text-xl"
        style={{boxShadow: "0px 2px 28px 1px rgba(83,229,242,1)"}}
      >
        <FaLinkedinIn />
      </a>
    </div>
  );
};

export default ContactBox;
