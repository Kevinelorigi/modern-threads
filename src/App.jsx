import React from "react";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Index from "./components/Index";
import Cart from "./components/Cart";
import Sale from "./components/Sale";
import Cashout from "./components/Cashout";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route index path="/" element={<Index />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/Sale" element={<Sale />} />
        <Route path="/Pago" element={<Cashout />} />
      </Routes>
    </>
  );
};

export default App;
