import React from "react";
import Joven from "../img/Joven.png";

const Cashout = () => {
  return (
    <div className="h-screen flex">
      <div className="w-1/2 mt-10 ml-10">
        <div className="bg-white border border-black h-96 rounded-2xl">
          <h1 className="font-bold m-10 text-2xl">Review Item And Shipping</h1>
          <div className="flex">
            <div className="bg-[#F7F2F0] w-[150px] ml-20 border border-black rounded-2xl">
              <img src={Joven} alt="Joven-Shop" />
            </div>
            <div class="flex flex-row">
              <div className="ml-20">
                <p className="font-bold text-2xl">Camiseta Azul-Oscuro</p>
                <p className="font-bold text-[#AAAAAA]">Talla: S</p>
              </div>
              <div class="ml-36">
                <p className="font-bold text-2xl">$69.900</p>
                <p className="font-bold text-[#AAAAAA]">Cantidad: 1</p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white border border-black mt-10 h-2/4 rounded-2xl">
          <div className="flex m-6">
            <h1 className="font-bold text-2xl">Delivery Information</h1>
            <button className="p-1 ml-72 font-bold px-7 border border-black rounded-xl ">
              Editar Informacion
            </button>
          </div>
          <div></div>
        </div>
      </div>
      <div className="mt-16 ml-36 w-1/2">
        <div className="bg-white border border-black h-5/6 w-3/4 rounded-2xl"></div>
      </div>
    </div>
  );
};

export default Cashout;
