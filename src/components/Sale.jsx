import React from "react";
import Señor from "../img/SeñorGrande.png";

const Sale = () => {
  return (
    <div className="h-screen">
      <div className="bg-[#C0F8FE] m-10 h-72 rounded-3xl flex justify-around">
        <div className="mt-5">
          <h1 className="font-bold text-5xl">Grab Upto 50% Off On</h1>
          <h1 className="font-bold text-5xl mt-4">Selected T-Shirts</h1>
          <button className="bg-[#10C800] text-white px-10 p-3 rounded-2xl mt-12">
            Buy Now
          </button>
        </div>
        <div>
          <img src={Señor} alt="Señor" className="w-[200px]" />
        </div>
      </div>

      <div>
        <button className="bg-[#D9D8D8] px-10 p-2 rounded-xl ml-10">
          Mujer
        </button>
        <button className="bg-[#D9D8D8] px-10 p-2 rounded-xl ml-10">
          Hombre
        </button>
        <button className="bg-[#D9D8D8] px-10 p-2 rounded-xl ml-10">
          Niños
        </button>
        <button className="bg-[#D9D8D8] px-10 p-2 rounded-xl ml-10">
          Hot Sale
        </button>
      </div>
      <div className="mt-10 ml-10">
        <h1 className="font-bold text-2xl">Clothes For You!</h1>
      </div>
      <div>
        <div></div>
      </div>
    </div>
  );
};

export default Sale;
