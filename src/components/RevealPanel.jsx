export default function RevealPanel({
  guess,
  correct,
  explanation
}) {
  if (!guess || !correct || !explanation) return null;

  const isCorrect = guess === correct;

  return (
    <div className="w-full max-w-[1500px] mx-auto px-4 flex flex-col items-center">
      <div className="p-6 border rounded-xl bg-white/10 shadow-md text-center max-w-xl w-full">
        <h2 className="text-2xl font-bold mb-2">
          {isCorrect ? "Correct!" : "Incorrect"}
        </h2>

        <p className="text-gray-300 mb-4">
          <strong>Correct answer:</strong> {correct}
        </p>

        <p className="text-gray-200 mb-6">{explanation}</p>
      </div>
    </div>
  );
}
