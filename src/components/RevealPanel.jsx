"use client";

export default function RevealPanel({ guesses, correct, explanation }) {
  if (!guesses || !correct) return null;

  const resultCorrect = guesses.result === correct.result;
  const yearCorrect = guesses.year === correct.year;
  const regionCorrect = guesses.region === correct.region;

  const score = [resultCorrect, yearCorrect, regionCorrect].filter(Boolean).length;

  return (
    <div className="mt-10 p-6 rounded-xl bg-black/40 border border-white/10 shadow-xl max-w-xl w-full backdrop-blur-md animate-reveal">

      <h2 className="text-3xl font-extrabold text-white mb-4 tracking-wide drop-shadow">
        Puzzle Results
      </h2>

      <div className="mb-6 text-center">
        <p className="text-xl font-bold text-white">Score: {score} / 3</p>
      </div>

      <div className={`p-4 mb-4 rounded-lg border ${resultCorrect ? "border-green-500 bg-green-900/20" : "border-red-500 bg-red-900/20"}`}>
        <p className="text-white text-lg font-semibold">Result</p>
        <p className="text-gray-300">Your guess: {guesses.result}</p>
        <p className="text-gray-300">Correct: {correct.result}</p>
      </div>

      <div className={`p-4 mb-4 rounded-lg border ${yearCorrect ? "border-green-500 bg-green-900/20" : "border-red-500 bg-red-900/20"}`}>
        <p className="text-white text-lg font-semibold">Year</p>
        <p className="text-gray-300">Your guess: {guesses.year}</p>
        <p className="text-gray-300">Correct: {correct.year}</p>
      </div>

      <div className={`p-4 mb-4 rounded-lg border ${regionCorrect ? "border-green-500 bg-green-900/20" : "border-red-500 bg-red-900/20"}`}>
        <p className="text-white text-lg font-semibold">Region</p>
        <p className="text-gray-300">Your guess: {guesses.region}</p>
        <p className="text-gray-300">Correct: {correct.region}</p>
      </div>

      <div className="bg-black/20 p-4 rounded-lg border border-white/10 mt-6">
        <p className="text-gray-200 leading-relaxed">{explanation}</p>
      </div>
    </div>
  );
}
