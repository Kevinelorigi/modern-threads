import React from "react";
import Mujersota from "../img/Mujersota.png";

const Footer = () => {
  return (
    <div className="h-screen flex">
      <div className="w-1/2 h-full flex flex-row-reverse bg-[#7CFE80]">
        <img
          src={Mujersota}
          alt="Mujer"
          className="h-full object-cover mr-auto"
        />
      </div>
      <div className="w-1/2">
        <div className="w-full h-1/2 flex flex-row justify-around">
            <div>
                <h1 className="font-bold text-2xl">To Discover</h1>
                <p className="text-[#7A7B7A] font-bold">We</p>
            </div>
            <div>
                <h1 className="font-bold text-2xl">Our Commiments</h1>
                <p className="text-[#7A7B7A] font-bold">We</p>
            </div>
        </div>
        <div className="w-1/2">
            <div>
                <h1 className="font-bold text-2xl">Modern Threads</h1>
                <p className="text-[#7A7B7A] font-bold">Size</p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
