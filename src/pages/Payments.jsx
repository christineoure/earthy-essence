import React from "react";

const Payments = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-lg">
        <h1 className="text-2xl font-bold text-center mb-6">Secure Payment</h1>
        <form>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Card Number</label>
            <input
              type="text"
              className="w-full px-4 py-2 border rounded-lg"
              placeholder="1234 5678 9101 1121"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Expiry Date</label>
            <input
              type="text"
              className="w-full px-4 py-2 border rounded-lg"
              placeholder="MM/YY"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">CVV</label>
            <input
              type="text"
              className="w-full px-4 py-2 border rounded-lg"
              placeholder="123"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-primary text-white py-2 rounded-lg hover:bg-neutral transition-colors"
          >
            Pay Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default Payments;
