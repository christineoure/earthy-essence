import React, { useState } from "react";

const FilterSort = ({ onFilterChange, onSortChange }) => {
  const [priceRange, setPriceRange] = useState([0, 100]);
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
    onFilterChange(e.target.value);
  };

  const handleSortChange = (e) => {
    onSortChange(e.target.value);
  };

  return (
    <div className="flex flex-col gap-4 mb-6">
      {/* Filter by Category */}
      <select
        value={selectedCategory}
        onChange={handleCategoryChange}
        className="border p-2 rounded"
      >
        <option value="">All Categories</option>
        <option value="skincare">Skincare</option>
        <option value="shower">Shower</option>
        <option value="lippies">Lippies</option>
      </select>

      {/* Sort by Price */}
      <select
        onChange={handleSortChange}
        className="border p-2 rounded"
      >
        <option value="">Sort By</option>
        <option value="low-high">Price: Low to High</option>
        <option value="high-low">Price: High to Low</option>
      </select>
    </div>
  );
};

export default FilterSort;
