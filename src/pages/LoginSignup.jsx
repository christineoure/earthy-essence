import React, { useState } from "react";

const LoginSignup = () => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleMode = () => setIsLogin(!isLogin);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-sm">
        <h1 className="text-xl font-bold mb-4">
          {isLogin ? "Login" : "Sign Up"}
        </h1>
        <form>
          <div className="mb-4">
            <label htmlFor="email" className="block font-bold mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full border p-2 rounded"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block font-bold mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full border p-2 rounded"
              placeholder="Enter your password"
            />
          </div>
          {!isLogin && (
            <div className="mb-4">
              <label htmlFor="name" className="block font-bold mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full border p-2 rounded"
                placeholder="Enter your name"
              />
            </div>
          )}
          <button
            type="submit"
            className="w-full bg-primary text-white p-2 rounded mt-4"
          >
            {isLogin ? "Login" : "Sign Up"}
          </button>
        </form>
        <button
          onClick={toggleMode}
          className="text-blue-500 mt-4 underline"
        >
          {isLogin ? "Don't have an account? Sign Up" : "Already have an account? Login"}
        </button>
      </div>
    </div>
  );
};

export default LoginSignup;
