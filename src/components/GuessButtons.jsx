"use client";

export default function GuessButtons({ onGuess }) {
  return (
    <div className="flex justify-center gap-4 mt-6 flex-wrap">
      <button
        onClick={() => onGuess("Blue wins")}
        className="px-6 py-3 rounded-lg text-white font-bold
                   bg-blue-600 hover:bg-blue-800
                   hover:scale-125 hover:-translate-y-3
                   transition-all duration-300 shadow-2xl"
      >
        Blue wins
      </button>

      <button
        onClick={() => onGuess("Red wins")}
        className="px-6 py-3 rounded-lg text-white font-bold
                   bg-red-600 hover:bg-red-800
                   hover:scale-125 hover:-translate-y-3
                   transition-all duration-300 shadow-2xl"
      >
        Red wins
      </button>

      <button
        onClick={() => onGuess("Even")}
        className="px-6 py-3 rounded-lg text-white font-bold
                   bg-gray-600 hover:bg-gray-800
                   hover:scale-125 hover:-translate-y-3
                   transition-all duration-300 shadow-2xl"
      >
        Even
      </button>
    </div>
  );
}

