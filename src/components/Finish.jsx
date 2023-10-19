import React from "react";
import Hombrr from "../img/Hombrr.jpg";

const Finish = () => {
  return (
    <div className="bg-[#AC60EB] h-screen flex">
      <div className="w-1/2">
        <p className="font-bold text-8xl text-white ml-6">MODERN</p>
        <p className="font-bold text-8xl mt-10 text-white ml-6">THREADS</p>

        <p className="font-bold text-2xl mt-12 text-white ml-5">Lorem</p>

        <button className="bg-white border border-black px-5 py-1 ml-10 rounded-xl ">
          SHOP STORE
        </button>
      </div>
      <div className="w-1/2 h-full object-cover flex-row-reverse">
        <img src={Hombrr} alt="Hombre" className="w-full h-full object-cover" />
      </div>
    </div>
  );
};

export default Finish;
