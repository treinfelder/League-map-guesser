export default function PuzzleImage({ src }) {
  if (!src) return null;

  return (
    <div className="w-full flex justify-center my-6">
      <img
        src={src}
        alt="Puzzle"
        className="rounded-lg shadow-lg w-[80%] max-w-[900px]"
      />
    </div>
  );
}
