import React, { useState } from "react";

const DarkModeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <div className="p-4">
      <button
        onClick={toggleDarkMode}
        className={`px-4 py-2 rounded ${
          isDarkMode ? "bg-gray-800 text-white" : "bg-gray-200 text-black"
        }`}
      >
        {isDarkMode ? "Light Mode" : "Dark Mode"}
      </button>
    </div>
  );
};

export default DarkModeToggle;
