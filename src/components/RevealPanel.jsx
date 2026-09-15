export default function RevealPanel({ guess, correct, explanation }) {
  if (!guess || !correct || !explanation) return null;

  const isCorrect = guess === correct;

  const containerClasses = isCorrect
    ? "mt-8 p-6 rounded-xl bg-green-900/30 border border-green-500/60 shadow-lg shadow-green-800/30 backdrop-blur-sm mx-auto max-w-xl animate-reveal"
    : "mt-8 p-6 rounded-xl bg-red-900/30 border border-red-500/60 shadow-lg shadow-red-800/30 backdrop-blur-sm mx-auto max-w-xl animate-reveal";

  const titleClasses = isCorrect
    ? "text-3xl font-extrabold mb-3 text-green-300 drop-shadow"
    : "text-3xl font-extrabold mb-3 text-red-300 drop-shadow";

  return (
    <div className={containerClasses}>
      <h1 className="text-3xl font-extrabold text-white mb-4 tracking-wide drop-shadow">
        Daily Pro Minimap Puzzle
      </h1>

      <h2 className={titleClasses}>
        {isCorrect ? "Correct!" : "Incorrect"}
      </h2>

      <div className="bg-black/20 p-4 rounded-lg border border-white/10 mb-4">
        <p className="text-gray-300 text-lg">
          <span className="font-semibold text-white/90">Correct answer:</span> {correct}
        </p>
      </div>

      <div className="bg-black/10 p-4 rounded-lg border border-white/5">
        <p className="text-gray-200 leading-relaxed">{explanation}</p>
      </div>
    </div>
  );
}
