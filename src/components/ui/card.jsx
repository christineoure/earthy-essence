import React from "react";

const Card = ({ children }) => {
  return <div className="border p-4 rounded-lg shadow-md">{children}</div>;
};

const CardHeader = ({ children }) => {
  return <div className="border-b p-4">{children}</div>;
};

const CardTitle = ({ children }) => {
  return <h2 className="text-lg font-bold mb-2">{children}</h2>;
};

const CardContent = ({ children }) => {
  return <div className="p-4">{children}</div>;
};

// Optional: Define CardFooter and CardDescription if you're using them
const CardFooter = ({ children }) => {
  return <div className="border-t p-4">{children}</div>;
};

const CardDescription = ({ children }) => {
  return <p className="text-sm text-gray-600">{children}</p>;
};

export { Card, CardHeader, CardTitle, CardContent, CardFooter, CardDescription };
