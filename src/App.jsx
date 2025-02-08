import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Skincare from "./pages/Skincare";
import Shower from "./pages/Shower";
import Lippies from "./pages/Lippies";
import LoginSignup from "./pages/LoginSignup";
import Payments from "./pages/Payments";
import Checkout from "./pages/Checkout";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/skincare" element={<Skincare />} />
      <Route path="/shower" element={<Shower />} />
      <Route path="/lippies" element={<Lippies />} />
      <Route path="/login" element={<LoginSignup />} />
      <Route path="/payments" element={<Payments />} />
      <Route path="/checkout" element={<Checkout />} />
    </Routes>
  );
};

export default App;