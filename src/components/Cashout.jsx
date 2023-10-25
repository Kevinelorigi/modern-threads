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
          <div>
            <span className="flex font-bold ml-10 mt-6">
              Name:{" "}
              <p className="ml-5 font-bold text-[#C3C2C2]">
                Eusebio Martillo Jose De las Praderas
              </p>
            </span>
            <span className="flex font-bold ml-10 mt-6">
              Address:{" "}
              <p className="ml-5 font-bold text-[#C3C2C2]">
                Cra 20#73-20 Barrio Libertad
              </p>
            </span>
            <span className="flex font-bold ml-10 mt-6">
              City:{" "}
              <p className="ml-5 font-bold text-[#C3C2C2]">Barrancabermeja</p>
            </span>
            <span className="flex font-bold ml-10 mt-6">
              Zip Code: <p className="ml-5 font-bold text-[#C3C2C2]">12336</p>
            </span>
            <span className="flex font-bold ml-10 mt-6">
              Mobile:{" "}
              <p className="ml-5 font-bold text-[#C3C2C2]">+57 3112176834</p>
            </span>
            <span className="flex font-bold ml-10 mt-6">
              Email:{" "}
              <p className="ml-5 font-bold text-[#C3C2C2]">eusebio@gmai.com</p>
            </span>
          </div>
        </div>
      </div>
      <div className="mt-16 ml-36 w-1/2">
        <div className="bg-white border border-black h-5/6 w-3/4 rounded-2xl">
          <h1 className="font-bold mt-2 ml-6 text-4xl">Order Summery</h1>
          <div>
            <input
              type="text"
              placeholder="Enter Code"
              className="bg-[#F4F4F5] w-1/2 p-3 rounded-l-xl text-center font-bold mt-10 ml-24"
            />
            <button className="bg-[#36BF3F] p-3 rounded-r-xl text-white font-bold">
              Confirm
            </button>
            <div className="font-bold mt-20 text-3xl ml-6">Payment Details</div>
            <div className="font-bold mt-3 ml-6">
              <label htmlFor="Checkbox">
                <div className="mt-4">
                  <input
                    type="checkbox"
                    id="cashOnDelivery"
                    className="accent-green-500"
                  />
                  Cash On Delivery
                </div>
                <div className="mt-4">
                  <input
                    type="checkbox"
                    id="shopcartCard"
                    className="accent-green-500"
                  />
                  Shopcart Card
                </div>
                <div className="mt-4">
                  <input
                    type="checkbox"
                    id="paypal"
                    className="accent-green-500"
                  />
                  Paypal
                </div>
                <div className="mt-4">
                  <input
                    type="checkbox"
                    id="creditOrDebitCard"
                    className="accent-green-500"
                  />
                  Credit or Debit Card
                </div>
              </label>
            </div>
            <div className="font-bold text-2xl mt-20 ml-8">
              <label htmlFor="Datos">
                <p>Email*</p>
                <input
                  type="text"
                  className="bg-white border border-black w-10/12 p-2 rounded-xl"
                />
                <p className="mt-5">CardHolder Name*</p>
                <input
                  type="text"
                  className="bg-white border border-black w-10/12 p-2 rounded-xl "
                />
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cashout;
