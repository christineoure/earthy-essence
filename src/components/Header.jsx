import React from "react";
import { Link } from "react-router-dom";

const Header = ({ theme }) => (
  <header style={{ backgroundColor: theme.darker }} className="shadow-md">
    <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
      <Link to="/" className="text-2xl font-bold text-white">
        Earthy Essence
      </Link>
      <nav className="flex gap-4">
        <Link to="/skincare" className="text-white hover:text-neutral-200">Skincare</Link>
        <Link to="/shower" className="text-white hover:text-neutral-200">Shower</Link>
        <Link to="/lippies" className="text-white hover:text-neutral-200">Lippies</Link>
        <Link to="/login" className="text-white hover:text-neutral-200">Login/Signup</Link>
        <Link to="/payments" className="text-white hover:text-neutral-200">Payments</Link>
        <Link to="/checkout" className="text-white hover:text-neutral-200">Checkout</Link>
      </nav>
    </div>
  </header>
);

export default Header;
