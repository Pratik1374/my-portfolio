import React from "react";
import { FaLinkedinIn } from "react-icons/fa";
import { SiGithub, SiGmail } from "react-icons/si";

const ContactBox = () => {
  return (
    <div className="flex gap-4">
      <a
        href="https://github.com/Pratik1374/"
        target="_blank"
        rel="noopener noreferrer"
        className="p-3 hover:bg-sky-200 rounded-xl bg-cyan-500 text-black text-xl"
      >
        <SiGithub />
      </a>

      <a
        href="mailto:pratik1374@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
        className="p-3 hover:bg-sky-200 rounded-xl bg-cyan-500 text-black text-xl"
      >
        <SiGmail />
      </a>

      <a
        href="https://www.linkedin.com/in/pratik-jadhav-7a969920b"
        target="_blank"
        rel="noopener noreferrer"
        className="p-3 hover:bg-sky-200 rounded-xl bg-cyan-500 text-black text-xl"
      >
        <FaLinkedinIn />
      </a>
    </div>
  );
};

export default ContactBox;
