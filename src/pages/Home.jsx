import React from "react";

const Home = () => {
  const photos = [
    "https://source.unsplash.com/800x600/?person,healthy,glowing,black",
    "https://source.unsplash.com/800x600/?beauty,black,woman,glowing,skin",
    "https://source.unsplash.com/800x600/?man,black,healthy,skin",
    "https://source.unsplash.com/800x600/?black,skin,care",
    "https://source.unsplash.com/800x600/?natural,black,skin",
  ];

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-center mb-6">
        Welcome to Earthy Essence
      </h1>
      <p className="text-center mb-10">
        Discover natural beauty with our organic cosmetics.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {photos.map((photo, index) => (
          <div key={index} className="rounded-lg overflow-hidden shadow-lg">
            <img
              src={photo}
              alt={`Glowing skin ${index + 1}`}
              className="w-full h-64 object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
