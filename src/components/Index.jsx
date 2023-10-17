import React from "react";
import Mujer from "../img/Mujer.jpg";
import Hombre from "../img/Cinco.png";
import Polo from "../img/Polo.webp";

const Index = () => {
  return (
    <div className="flex relative">
      <div className="w-1/2 h-screen">
        <img
          src={Mujer}
          alt="Imagen Izquierda"
          className="w-full h-full object-cover"
        />
        <div
          className="absolute bottom-0 w-[50%] h-1/3 bg-[#3E34BA]"
          style={{ zIndex: 1 }}
        >
          <div className="text-white text-6xl ml-7">
            <p className="font-bold">NEW</p>
            <p className="font-bold">COLLECTION</p>
          </div>
          <div className="ml-7 mt-32 space-x-20">
            <button className="bg-[#D9D8D6] px-4 py-2 rounded-lg font-bold">
              SHOP MEN
            </button>
            <button className="bg-[#D9D8D6] px-4 py-2 rounded-lg font-bold">
              SHOP WOMEN
            </button>
          </div>
        </div>
      </div>

      <div className="w-1/2 h-screen relative">
        <div className="absolute w-full h-full flex items-center justify-center">
          <img src={Hombre} alt="Imagen Derecha" className="w-1/2" />
        </div>
        <div className="absolute bottom-[120px] left-1/4 w-1/2 flex flex-col items-center">
          <div className="mt-16 bg-[#D9D8D8] text-white text-center p-5 w-full rounded-2xl">
            <div className="flex">
              <img src={Polo} alt="Polo" className="w-[70px] rounded-md" />
              <div className="">
                <p className="text-black font-bold">Lacoste</p>
                <p className="text-black font-bold">Polo Negro Lacoste</p>
                <p className="text-black font-bold">$100.000</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
