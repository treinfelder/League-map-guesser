"use client";

import { useState } from "react";

export default function GuessButtons({ onGuess, guesses, correct }) {
  const [year, setYear] = useState(2018);

  const icon = (category) => {
    if (!guesses[category]) return null;

    const isCorrect = guesses[category] === correct[category];

    return (
      <span
        className={`ml-3 text-2xl font-bold shake ${
          isCorrect ? "text-green-400" : "text-red-400"
        }`}
      >
        {isCorrect ? "✔" : "✖"}
      </span>
    );
  };

  return (
    <div className="flex flex-col items-center gap-10 mt-6 w-full">

      {/* RESULT */}
      <div className="flex flex-col items-center w-full">
        <h3 className="text-white text-xl font-bold mb-3 flex items-center">
          Who won? {icon("result")}
        </h3>

        <div className="flex flex-col gap-4 w-full max-w-xs">
          <button
            onClick={() => onGuess("result", "Blue wins")}
            className="px-6 py-3 rounded-lg text-white font-bold bg-blue-600 hover:bg-blue-800 hover:scale-125 hover:-translate-y-3 transition-all duration-300 shadow-2xl"
          >
            Blue wins
          </button>

          <button
            onClick={() => onGuess("result", "Red wins")}
            className="px-6 py-3 rounded-lg text-white font-bold bg-red-600 hover:bg-red-800 hover:scale-125 hover:-translate-y-3 transition-all duration-300 shadow-2xl"
          >
            Red wins
          </button>

          <button
            onClick={() => onGuess("result", "Even")}
            className="px-6 py-3 rounded-lg text-white font-bold bg-gray-600 hover:bg-gray-800 hover:scale-125 hover:-translate-y-3 transition-all duration-300 shadow-2xl"
          >
            Even
          </button>
        </div>
      </div>

      {/* YEAR */}
      <div className="flex flex-col items-center w-full">
        <h3 className="text-white text-xl font-bold mb-3 flex items-center">
          What year? {icon("year")}
        </h3>

        <input
          type="range"
          min="2010"
          max="2026"
          value={year}
          onChange={(e) => setYear(Number(e.target.value))}
          className="w-full max-w-xs accent-blue-500 cursor-pointer"
        />

        <p className="text-white mt-2 text-lg font-bold">{year}</p>

        <button
          onClick={() => onGuess("year", year)}
          className="mt-3 px-6 py-3 rounded-lg text-white font-bold bg-blue-700 hover:bg-blue-900 hover:scale-110 transition-all duration-300 shadow-xl"
        >
          Submit Year
        </button>
      </div>

      {/* REGION */}
      <div className="flex flex-col items-center w-full">
        <h3 className="text-white text-xl font-bold mb-3 flex items-center">
          Region {icon("region")}
        </h3>

        <div className="flex flex-col gap-4 w-full max-w-xs">
          {["LCS", "LEC", "LCK", "LPL"].map((region) => (
            <button
              key={region}
              onClick={() => onGuess("region", region)}
              className="px-6 py-3 rounded-lg text-white font-bold bg-purple-600 hover:bg-purple-800 hover:scale-125 hover:-translate-y-3 transition-all duration-300 shadow-2xl"
            >
              {region}
            </button>
          ))}
        </div>
      </div>

    </div>
  );
}
