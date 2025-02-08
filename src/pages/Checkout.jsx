import React from "react";

const Checkout = () => {
  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded">
      <h2 className="text-2xl font-bold mb-4">Checkout</h2>
      <form className="space-y-4">
        <div>
          <label className="block font-semibold mb-1">Full Name</label>
          <input
            type="text"
            className="w-full p-2 border rounded"
            placeholder="Enter your full name"
          />
        </div>
        <div>
          <label className="block font-semibold mb-1">Email Address</label>
          <input
            type="email"
            className="w-full p-2 border rounded"
            placeholder="Enter your email"
          />
        </div>
        <div>
          <label className="block font-semibold mb-1">Shipping Address</label>
          <textarea
            className="w-full p-2 border rounded"
            rows="3"
            placeholder="Enter your shipping address"
          ></textarea>
        </div>
        <div>
          <label className="block font-semibold mb-1">Payment Method</label>
          <select className="w-full p-2 border rounded">
            <option>Credit Card</option>
            <option>PayPal</option>
            <option>Cash on Delivery</option>
          </select>
        </div>
        <button
          type="submit"
          className="bg-primary text-white px-6 py-2 rounded hover:bg-primary/80"
        >
          Complete Purchase
        </button>
      </form>
    </div>
  );
};

export default Checkout;
