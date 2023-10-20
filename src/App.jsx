import React from "react";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Index from "./components/Index";
import Cart from "./components/Cart";
import Footer from "./components/Footer";
import Sale from "./components/Sale";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route index path="/" element={<Index />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/Footer" element={<Footer />} />
        <Route path="/Sale" element={<Sale />} />
      </Routes>
    </>
  );
};

export default App;
