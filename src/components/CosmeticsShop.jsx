import React, { useState } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import HeroSection from "./HeroSection";
import CategorySection from "./CategorySection";
import { sampleProducts, theme } from "../data";

const CosmeticsShop = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // ✅ Hook at the top level
  const [searchQuery, setSearchQuery] = useState(""); // ✅ Hook at the top level
  const [cartItems, setCartItems] = useState([]); // ✅ Hook at the top level
  const [wishlistItems, setWishlistItems] = useState([]); // ✅ Hook at the top level

  const addToCart = (product) => setCartItems([...cartItems, product]);
  const addToWishlist = (product) => setWishlistItems([...wishlistItems, product]);

  return (
    <div className="flex flex-col min-h-screen" style={{ backgroundColor: "#faf7f5" }}>
      <Header
        theme={theme}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        cartItems={cartItems}
        setIsMenuOpen={setIsMenuOpen}
      />
      <Sidebar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} theme={theme} />
      <main className="flex-grow max-w-7xl mx-auto px-4 py-8">
        <HeroSection theme={theme} />
        <CategorySection title="Skincare Essentials" products={sampleProducts.skincare} theme={theme} />
        <CategorySection title="Shower & Bath" products={sampleProducts.shower} theme={theme} />
        <CategorySection title="Lip Care" products={sampleProducts.lippies} theme={theme} />
      </main>
    </div>
  );
};

export default CosmeticsShop;
