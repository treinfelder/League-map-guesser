"use client";

export default function PuzzleVideo({ clip }) {
  if (!clip) return null;

  return (
    <div className="w-full flex justify-center my-10">
      <video
        key={clip}
        src={clip}
        controls
        className="rounded-xl shadow-2xl w-full max-w-[1400px] h-auto"
      />
    </div>
  );
}
