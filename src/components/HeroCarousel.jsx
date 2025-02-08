import React, { useState } from "react";

const slides = [
  {
    image: "/api/placeholder/800/400",
    title: "Discover Radiant Skin",
    subtitle: "Explore our best-selling skincare products.",
  },
  {
    image: "/api/placeholder/800/400",
    title: "Natural Ingredients",
    subtitle: "Beauty powered by nature and science.",
  },
  {
    image: "/api/placeholder/800/400",
    title: "Exclusive Discounts",
    subtitle: "Save big on our premium products.",
  },
];

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () =>
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () =>
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <div className="relative w-full overflow-hidden">
      <div
        className="flex transition-transform duration-700"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className="w-full h-64 flex-shrink-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="bg-black/50 text-white p-8 flex flex-col justify-center h-full">
              <h2 className="text-4xl font-bold">{slide.title}</h2>
              <p className="text-lg mt-2">{slide.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-md"
      >
        &larr;
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-md"
      >
        &rarr;
      </button>
    </div>
  );
};

export default HeroCarousel;
