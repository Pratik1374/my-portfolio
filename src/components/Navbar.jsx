import React, { useEffect, useState } from "react";
import {profileImg,menu,close} from "../assets"
import { navLinks } from "../data/data";
import { Link } from "react-scroll";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [active, setActive] = useState("");

  return (
    <nav className="h-[70px] w-full flex items-center py-5 fixed top-0 z-20 bg-[#141829]  font-semibold ">
      <div className="w-full flex justify-between items-center max-w-7xl mx-2">
        <Link
          to="/"
          onClick={() => {
            setActive("Home");
            window.scrollTo(0, 0);
          }}
        >
          <img
            src={profileImg}
            alt="profileImg"
            className="w-9 ml-8 h-9 object-fill cursor-pointer rounded-full"
          />
        </Link>

        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className=" hover:bg-sky-300 hover:text-white text-black text-[18px] font-medium cursor-pointer  violet-gradient px-[10px] py-[2px] rounded-full "
              onClick={() => setActive(nav.title)}
            >
              <Link activeClass="active" to={nav.id} spy={true} smooth={true}  duration={500}>{nav.title}</Link>
            </li>
          ))}
        </ul>

        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain"
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-1 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className="list-none flex justify-end items-start flex-1 flex-col gap-4">
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px] ${
                    active === nav.title ? "text-yellow-200" : "text-white"
                  }`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(nav.title);
                  }}
                >
                  <Link to={nav.id} spy={true} smooth={true} offset={-70} duration={500}>{nav.title}</Link>
                  {/* <a href={`#${nav.id}`}>{nav.title}</a> */}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
