import React from "react";

const NeonButton = ({ text, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`relative inline-flex items-center justify-center px-4 py-2 text-sm font-medium rounded-lg bg-gray-900/30 backdrop-blur-sm transition duration-300 ease-in-out h-12 border border-purple-200 hover:border-purple-400 group`}
    >
      <span className="relative text-gray-200 z-10">{text}</span>
      <div
        className="absolute inset-0 bg-gradient-to-r from-gray-700 via-violet-500 to-purple-500 rounded-md opacity-25 blur-sm -z-10 shadow-inner shadow-gray-500/50 transition-all duration-300 ease-in-out group-hover:shadow-purple-400 group-hover:blur-md"
        style={{
          backgroundSize: "200% 200%",
          animation: "gradientMove 4s ease infinite",
        }}
      ></div>
    </button>
  );
};

export default NeonButton;
