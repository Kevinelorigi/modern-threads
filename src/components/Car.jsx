import React from "react";
import Una from "../img/Una.png";
import Dos from "../img/Linda.png"
import Lindo from "../img/Lindo.png"
import Niño from "../img/Niño.png"

const Car = () => {
  return (
    <div className="min-h-[calc(100vh-70px)]">
      <div className="text-center m-10 text-8xl font-bold">
        <h1>MY CART</h1>
      </div>
      <div className="flex justify-between w-[95%] h-[790px] mx-auto pt-6">
        <div className="w-1/4 p-4 bg-[#122228]">
          <img src={Una} alt="Primer Cuadro" className="mt-36" />
        </div>
        <div className="w-1/4 p-4 bg-[#C5D6DE]">
            <img src={Dos} alt="Segundo Cuadro" className="mt-44 pt-3" />
        </div>
        <div className="w-1/4 p-4 bg-[#A86E9D]">
            <img src={Lindo} alt="Tercer Cuadro" className="mt-40 pt-3 pl-8" />
        </div>
        <div className="w-1/4 p-4 bg-[#D6D989]">
            <img src={Niño} alt="Cuarto Cuadro" className="mt-24 w-[500px]" />
        </div>
      </div>
      <div className="flex justify-center mt-10">
        <button className="bg-white border border-black px-6 py-1 rounded-xl">
          REALIZAR PEDIDO
        </button>
      </div>
    </div>
  );
};

export default Car;
