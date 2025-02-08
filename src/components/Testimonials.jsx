import React from "react";

const testimonials = [
  {
    name: "Alice Johnson",
    image: "/api/placeholder/100/100",
    comment: "The best skincare products I've ever used! Highly recommend!",
    rating: 5,
  },
  {
    name: "Michael Smith",
    image: "/api/placeholder/100/100",
    comment: "Affordable and effective. My skin has never felt better!",
    rating: 4,
  },
  {
    name: "Sophia Lee",
    image: "/api/placeholder/100/100",
    comment: "Love the natural ingredients and the results. Great job!",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <div className="py-12 bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-8">What Our Customers Say</h2>
      <div className="flex flex-wrap justify-center gap-6">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-white p-6 shadow-md rounded-lg max-w-sm flex flex-col items-center"
          >
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="w-16 h-16 rounded-full mb-4"
            />
            <h3 className="text-xl font-semibold">{testimonial.name}</h3>
            <p className="text-sm text-gray-600 mb-4 text-center">{testimonial.comment}</p>
            <p className="text-yellow-500">
              {"⭐".repeat(testimonial.rating)}{" "}
              {"☆".repeat(5 - testimonial.rating)}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
