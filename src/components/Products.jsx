import React from "react";
import Una from "../img/Una.png";
import Dos from "../img/Dos.png";
import Tres from "../img/Tres.png";
import Cuatro from "../img/Cuatro.png";

const Products = () => {
  return (
    <div className="w-full h-screen bg-white">
      <div className="text-center mt-20 font-bold text-6xl">
        <h1>OUR SELECTIONS</h1>
      </div>
      <div className="justify-center flex mt-10 space-x-10">
        <button className="bg-[#3E34BA] px-4 py-2 rounded-lg text-white">
          NUEVOS PRODUCTOS
        </button>
        <button className="bg-white border border-black px-4 py-2 rounded-lg ">
          PRODUCTOS MAS VENDIDOS
        </button>
      </div>

      <section className="mt-16 w-full place-items-center grid gap-2 p-10 grid-cols-2 md:grid-cols-4">
        <div className="h-[610px] w-[80%] bg-[#D8D9D8] rounded-lg p-4 flex flex-col items-center justify-center">
          <div className="bg-white p-0.9 rounded-md">
            <img
              src={Una}
              alt="Primera"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="mt-1 text-center">
            <div className="text-left pr-[100px]">
              <p className="text-black font-bold">Lacoste</p>
              <p className="text-black font-bold">Camisa Azul Indigo Lacoste</p>
            </div>
            <p className="text-[#61615F] font-bold">$100.000</p>
          </div>
        </div>
        <div className="h-[610px] w-[80%] bg-[#D8D9D8] rounded-lg p-4 flex flex-col items-center justify-center">
          <div className="bg-white p-0.9 rounded-md">
            <img
              src={Tres}
              alt="Segunda"
              className="w-full h-[480px] object-cover"
            />
          </div>
          <div className="mt-1 text-center">
            <div className="text-left pr-[100px]">
              <p className="text-black font-bold">Lacoste</p>
              <p className="text-black font-bold">Camisa Azul Indigo Lacoste</p>
            </div>
            <p className="text-[#61615F] font-bold">$100.000</p>
          </div>
        </div>
        <div className="h-[610px] w-[80%] bg-[#D8D9D8] rounded-lg p-4 flex flex-col items-center justify-center">
          <div className="bg-white p-0.9 rounded-md">
            <img
              src={Cuatro}
              alt="Tercera"
              className="w-full object-cover h-[480px]"
            />
          </div>
          <div className="mt-1 text-center">
            <div className="text-left pr-[100px]">
              <p className="text-black font-bold">Lacoste</p>
              <p className="text-black font-bold">Camisa Azul Indigo Lacoste</p>
            </div>
            <p className="text-[#61615F] font-bold">$100.000</p>
          </div>
        </div>
        <div className="h-[610px] w-[80%] bg-[#D8D9D8] rounded-lg p-4 flex flex-col items-center justify-center">
          <div className="bg-white p-0.9 rounded-md">
            <img
              src={Dos}
              alt="Cuarta"
              className="w-full h-[480px] object-cover"
            />
          </div>
          <div className="mt-1 text-center">
            <div className="text-left pr-[100px]">
              <p className="text-black font-bold">Lacoste</p>
              <p className="text-black font-bold">Camisa Azul Indigo Lacoste</p>
            </div>
            <p className="text-[#61615F] font-bold">$100.000</p>
          </div>
        </div>
      </section>
      <div className="flex justify-center">
        <button className="bg-white border border-black px-6 py-1 rounded-xl ">
          VER MAS
        </button>
      </div>
    </div>
  );
};

export default Products;
