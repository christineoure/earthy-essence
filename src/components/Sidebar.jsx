import React from "react";
import { X } from "lucide-react";

const Sidebar = ({ isMenuOpen, setIsMenuOpen, theme }) => {
  return (
    <div
      className={`fixed top-0 left-0 w-64 shadow-xl transform ${
        isMenuOpen ? "translate-x-0" : "-translate-x-full"
      } transition-transform duration-300 ease-in-out z-50`}
      style={{
        backgroundColor: theme.light,
        height: "100vh", // Fill the browser height
      }}
    >
      <button
        onClick={() => setIsMenuOpen(false)}
        className="absolute top-4 right-4 text-white hover:text-neutral-200"
      >
        <X size={24} />
      </button>
      <div className="p-6">
        <h2 className="text-xl font-bold mb-6 text-white">Categories</h2>
        <ul className="space-y-4 text-white">
          <li>
            <h3 className="font-semibold mb-2">Skincare</h3>
            <ul className="pl-4 space-y-2 text-neutral-100">
              <li>Cleansers</li>
              <li>Scrubs</li>
              <li>Moisturizers</li>
              <li>Toners</li>
              <li>Serums</li>
              <li>Sunscreen</li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
