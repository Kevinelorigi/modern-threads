import Una from "../img/Una.png";
import Dos from "../img/Linda.png";
import Lindo from "../img/Lindo.png";
import Niño from "../img/Niño.png";
import { Link } from "react-router-dom";

const Cart = () => {
  return (
    <div className="min-h-[calc(100vh-70px)]">
      <div className="flex m-10 text-6xl font-bold">
        <h1 className="text-center flex-grow ">MY CART</h1>
        <p className="text-2xl ml-auto text-[#C4C4C5]">Total : $99999</p>
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

      <div className="flex justify-center mt-10 mb-6">
        <Link
          to="pago"
          className="bg-white border border-black px-6 py-2 rounded-xl"
        >
          REALIZAR PEDIDO
        </Link>
      </div>
    </div>
  );
};

export default Cart;
