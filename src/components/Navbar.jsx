import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaCartShopping } from "react-icons/fa6";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const links = [
    {
      id: 1,
      link: "/sale",
      text: "SALES",
    },
    {
      id: 2,
      link: "/cart",
      text: <FaCartShopping />,
      style: "w-20 h-20 p-6",
    },
  ];

  return (
    <div className="flex justify-between items-center w-full h-20 px-10 text-[#224665] bg-white">
      <div>
        <h1 className="text-3xl ml-2">
          {" "}
          <Link className="cursor hover:opacity-70 duration-300" to="/">
            <span className="text-5xl">M</span>odern
            <span className="text-5xl">T</span>hreads
          </Link>
        </h1>
      </div>

      <ul className="hidden md:flex">
        {links.map((item) => (
          <li
            key={item.id}
            className={`px-8 cursor-pointer capitalize font-medium text-black hover:scale-105 duration-200 `}
          >
            <Link className={item.style} to={item.link}>
              {item.text}
            </Link>
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
          {links.map((item) => (
            <li
              key={item.id}
              className="px-4 cursor-pointer capitalize py-6 text-4xl"
            >
              <Link onClick={() => setNav(!nav)} to={`/${item.link}`}>
                {item.text}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Navbar;
