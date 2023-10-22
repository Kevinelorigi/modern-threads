import React from "react";
import Mujersota from "../img/Mujersota.png";

const Footer = () => {
  return (
    <div className="h-screen flex">
      <div className="w-1/2 h-full flex flex-row-reverse bg-[#7CFE80]">
        <img
          src={Mujersota}
          alt="Mujer"
          className="h-full object-cover mr-auto"
        />
      </div>
      <div className="w-1/2">
        <div className="w-full h-1/2 flex flex-row justify-around mt-10">
          <div>
            <h1 className="font-bold text-2xl">To Discover</h1>
            <p className="text-[#7A7B7A] font-bold">
              <ul>WIND BREAKER</ul>
              <ul>JACKETS</ul>
              <ul>TRENCH & PACKAS</ul>
              <ul>SHEATERS</ul>
              <ul>POLO SHIRTS & TSHIRTS</ul>
              <ul>SHORTS & PANTS</ul>
              <ul>SWIM WAER</ul>
            </p>
          </div>
          <div>
            <h1 className="font-bold text-2xl">Our Commiments</h1>
            <p className="text-[#7A7B7A] font-bold">
              <ul>CONTACT US</ul>
              <ul>SHIPPING & RETURNS</ul>
              <ul>C.V.G</ul>
              <ul>FAQ</ul>
            </p>
          </div>
        </div>
        <div className="w-1/2">
        <div className="ml-36">
            <h1 className="font-bold text-2xl">Modern Threads</h1>
            <p className="text-[#7A7B7A] font-bold">
              <ul>SIZE MATCHING</ul>
              <ul>OUR STORES</ul>
              <ul>CAREERS</ul>
              <ul>OURS STORY</ul>
              <ul>LEGAL</ul>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
