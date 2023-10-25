import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const links = [
    {
      id: 1,
      link: "",
      text: "NEW",
    },
    {
      id: 2,
      link: "",
      text: "ADULT",
    },
    {
      id: 3,
      link: "",
      text: "CHILD",
    },
    {
      id: 4,
      link: "",
      text: "ACESSORIES",
    },
    {
      id: 5,
      link: "",
      text: "OUTLET",
    },
  ];

  return (
    <div className="flex justify-between items-center w-full h-20 px-10 text-[#224665] bg-white">
      <div>
        <h1 className="text-3xl ml-2">
          {" "}
          <span className="text-5xl">M</span>odern
          <span className="text-5xl">T</span>hreads
        </h1>
      </div>

      <ul className="hidden md:flex">
        {links.map(({ id, link, text }) => (
          <li
            key={id}
            className="px-8 cursor-pointer capitalize font-medium text-black hover:scale-105 duration-200"
          >
            <Link to={`/${link}`}>{text}</Link>
          </li>
        ))}
      </ul>

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-black md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-white to-[#D8D9D8]">
          {links.map(({ id, link, text }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize py-6 text-4xl"
            >
              <Link onClick={() => setNav(!nav)} to={`/${link}`}>
                {text}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Navbar;
