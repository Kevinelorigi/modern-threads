import React from "react";
import Señor from "../img/SeñorGrande.png";
import Camisa from "../img/Camisa.png";
import Joven from "../img/Joven.png"
import Negro from "../img/Negro.png"
import Rosado from "../img/Rosado.png"
import Amarillo from "../img/Amarillo.png"

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

      <div className="flex flex-row-reverse justify-evenly space-x-8 mt-10">
        <div>
          <div className="bg-[#F7F3F1] w-[280px] h-[280px] rounded-xl">
            <img src={Amarillo} alt="Cd1" className="w-[247px] ml-5" />
          </div>

          <div className="font-bold flex space-x-4">
            <p>Camiseta Roja</p>
            <p>$69.900</p>
          </div>
          <p className="text-[#7C7C7D] font-bold">
            Cómoda, tela suave y fresca
          </p>
          <button className="bg-white border border-black px-6 py-1 rounded-xl mt-3 ml-16">
            Add to Cart
          </button>
        </div>

        <div>
          <div className="bg-[#F7F3F1] w-[280px] h-[280px] rounded-xl">
            <img src={Rosado} alt="Cd2" className="w-[187px] ml-8"/>
          </div>

          <div className="font-bold flex space-x-4">
            <p>Camiseta Azul</p>
            <p>$79.900</p>
          </div>
          <p className="text-[#7C7C7D] font-bold">
            Cómoda, tela suave y fresca
          </p>
          <button className="bg-white border border-black px-6 py-1 rounded-xl mt-3 ml-16">
            Add to Cart
          </button>
        </div>

        <div>
          <div className="bg-[#F7F3F1] w-[280px] h-[280px] rounded-xl">
            <img src={Negro} alt="Cd3" className="w-[187px] ml-8" />
          </div>

          <div className="font-bold flex space-x-4">
            <p>Camiseta Verde</p>
            <p>$89.900</p>
          </div>
          <p className="text-[#7C7C7D] font-bold">
            Cómoda, tela suave y fresca
          </p>
          <button className="bg-white border border-black px-6 py-1 rounded-xl mt-3 ml-16">
            Add to Cart
          </button>
        </div>

        <div>
          <div className="bg-[#F7F3F1] w-[280px] h-[280px] rounded-xl">
            <img src={Joven} alt="Cd4" className="w-[187px] ml-8" />
          </div>

          <div className="font-bold flex space-x-4">
            <p>Camiseta Amarilla</p>
            <p>$99.900</p>
          </div>
          <p className="text-[#7C7C7D] font-bold">
            Cómoda, tela suave y fresca
          </p>
          <button className="bg-white border border-black px-6 py-1 rounded-xl mt-3 ml-16">
            Add to Cart
          </button>
        </div>

        <div>
          <div className="bg-[#F7F3F1] w-[280px] h-[280px] rounded-xl">
            <img src={Camisa} alt="Cd5" className="w-[247px]" />
          </div>

          <div className="font-bold flex space-x-4">
            <p>Camiseta Negra</p>
            <p>$109.900</p>
          </div>
          <p className="text-[#7C7C7D] font-bold">
            Cómoda, tela suave y fresca
          </p>
          <button className="bg-white border border-black px-6 py-1 rounded-xl mt-3 ml-16">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sale;
