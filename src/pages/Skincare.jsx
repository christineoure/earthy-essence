import React, { useState } from "react";
import FilterSort from "../components/FilterSort";
import ProductCard from "../components/ProductCard";
import { sampleProducts, theme } from "../data";

const Skincare = () => {
  const [filteredProducts, setFilteredProducts] = useState(sampleProducts.skincare);

  const handleFilterChange = (category) => {
    setFilteredProducts(
      category
        ? sampleProducts.skincare.filter((product) => product.category === category)
        : sampleProducts.skincare
    );
  };

  const handleSortChange = (sortOption) => {
    const sorted = [...filteredProducts];
    if (sortOption === "low-high") {
      sorted.sort((a, b) => a.price - b.price);
    } else if (sortOption === "high-low") {
      sorted.sort((a, b) => b.price - a.price);
    }
    setFilteredProducts(sorted);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">Skincare Products</h1>
      <FilterSort onFilterChange={handleFilterChange} onSortChange={handleSortChange} />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} theme={theme} />
        ))}
      </div>
    </div>
  );
};

export default Skincare;
