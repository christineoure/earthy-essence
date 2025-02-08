import React from "react";
import CategorySection from "../components/CategorySection";
import { theme, sampleProducts } from "../data"; // Correct import

const Lippies = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Lip Care</h1>
      <CategorySection title="Lippies" products={sampleProducts.lippies} theme={theme} />
    </div>
  );
};

export default Lippies;
