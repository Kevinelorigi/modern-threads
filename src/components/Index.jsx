import React from "react";
import Mujer from "../img/Mujer.jpg";
import Hombre from "../img/Cinco.png";
import Polo from "../img/Polo.webp";
import Una from "../img/Una.png";
import Dos from "../img/Dos.png";
import Tres from "../img/Tres.png";
import Cuatro from "../img/Cuatro.png";
import Hombrr from "../img/Hombrr.jpg";


const Index = () => {
  return (
    <div>
      <div className="flex relative bg-[#D8D9D8]">
        {/* Mobile View */}
        <div className="w-full md:w-1/2 h-screen">
          <img
            src={Mujer}
            alt="Imagen Izquierda"
            className="w-full h-full object-cover"
          />
          <div
            className="absolute bottom-0 w-full md:w-[50%] h-1/3 bg-[#3E34BA]"
            style={{ zIndex: 1 }}
          >
            <div className="text-white text-4xl md:text-6xl ml-2 md:ml-7">
              <p className="font-bold">NEW</p>
              <p className="font-bold">COLLECTION</p>
            </div>
            <div className="ml-2 md:ml-7 mt-16 md:mt-32 space-x-4 md:space-x-20">
              <button className="bg-[#D9D8D6] px-2 md:px-4 py-1 md:py-2 rounded-lg font-bold">
                SHOP MEN
              </button>
              <button className="bg-[#D9D8D6] px-2 md:px-4 py-1 md:py-2 rounded-lg font-bold">
                SHOP WOMEN
              </button>
            </div>
          </div>
        </div>

        {/* Tablet and Desktop View */}
        <div className="hidden md:flex w-1/2 h-screen relative">
          <div className="absolute w-full h-full flex items-center justify-center">
            <img src={Hombre} alt="Imagen Derecha" className="w-1/2" />
          </div>
          <div className="absolute bottom-[120px] left-1/4 w-1/2 flex flex-col items-center">
            <div className="mt-16 border border-black bg-[#D9D8D8] text-white text-center p-2 w-full rounded-2xl">
              <div className="flex items-center justify-center">
                <img
                  src={Polo}
                  alt="Polo"
                  className="w-10 md:w-[60px] rounded-md ml-2 md:ml-4"
                />
                <div className="ml-2 md:ml-6 text-base md:text-lg">
                  <p className="text-black font-bold text-left">Lacoste</p>
                  <p className="text-black font-bold">Polo Negro Lacoste</p>
                </div>
                <p className="text-black font-bold ml-auto pr-2 md:pr-10 text-base md:text-lg">
                  $100.000
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
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
                <p className="text-black font-bold">
                  Camisa Azul Indigo Lacoste
                </p>
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
                <p className="text-black font-bold">
                  Camisa Azul Indigo Lacoste
                </p>
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
                <p className="text-black font-bold">
                  Camisa Azul Indigo Lacoste
                </p>
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
                <p className="text-black font-bold">
                  Camisa Azul Indigo Lacoste
                </p>
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
          <img
            src={Hombrr}
            alt="Hombre"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Index;
