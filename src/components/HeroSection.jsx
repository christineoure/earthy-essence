import React from "react";

const HeroSection = ({ theme }) => {
  return (
    <div
      className="mb-12 rounded-xl p-8 md:p-12 text-white relative overflow-hidden flex flex-col items-center justify-center text-center"
      style={{
        background: `linear-gradient(135deg, ${theme.primary}, ${theme.secondary})`,
        boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
      }}
    >
      <div className="relative z-10">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Welcome to Earthy Essence</h1>
        <p className="text-lg md:text-xl lg:text-2xl mb-6">
          Discover natural beauty with our organic cosmetics
        </p>
        <button className="bg-white text-neutral-800 px-6 py-3 rounded-full font-semibold hover:bg-neutral-100 transition-colors">
          Shop Now
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
