"use client";

import { useState } from "react";
import PuzzleImage from "../components/PuzzleImage";
import PuzzleVideo from "../components/PuzzleVideo";
import RevealPanel from "../components/RevealPanel";
import GuessButtons from "../components/GuessButtons";



export default function Home() {
  const [guess, setGuess] = useState(null);

  
  const today = new Date().toISOString().split("T")[0];

  // Puzzle data for the day (TO BE AUTOMATED)
  const puzzle = {
    date: "2026-09-13",
    meta: "LCS — SEN vs FLY — Game 1",
    image: "/images/puzzles/2026.09.13SENFLY.PNG",
    clip: "/clips/2026.09.13SENFLY.mp4",
    correct: "Red wins",
    explanation:
      "Blue team caught mid."
  };

  return (
    <main className="w-full max-w-3xl px-4 py-8 flex flex-col items-center">

      {/* HEADER */}
      <header className="mb-6 text-center">
        <h1 className="text-4xl font-bold mb-2">
          Daily Minimap Puzzle — {today}
        </h1>

        {/* Show metadata only after reveal */}
        {guess && (
          <>
            <p className="text-gray-400 text-lg">
              <strong>Date of game:</strong> {puzzle.date}
            </p>

            {puzzle.meta && (
              <p className="text-gray-500 mt-1">{puzzle.meta}</p>
            )}
          </>
        )}
      </header>

      {/* IMAGE OR VIDEO FRAME */}
      <div className="w-full flex flex-col items-center">
        <div className="bg-gray-800 p-4 rounded-xl shadow-lg border border-gray-700 max-w-xl w-full flex justify-center">
          {!guess && <PuzzleImage src={puzzle.image} />}
          {guess && <PuzzleVideo clip={puzzle.clip} />}
        </div>
      </div>

      {/* GUESS BUTTONS */}
      {!guess && (
        <GuessButtons onGuess={(g) => setGuess(g)} />
      )}

      {/* REVEAL PANEL */}
      <RevealPanel
        guess={guess}
        correct={puzzle.correct}
        explanation={puzzle.explanation}
      />

    </main>
  );
}
