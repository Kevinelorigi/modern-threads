import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "../components/Index";
import Cart from "../components/Cart";
import Sale from "../components/Sale";
import Cashout from "../components/Cashout";
import Navbar from "../components/Navbar";

export function MyRoutes() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route index path="/" element={<Index />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/sale" element={<Sale />} />
        <Route path="/cart/pago" element={<Cashout />} />
      </Routes>
    </Router>
  );
}
