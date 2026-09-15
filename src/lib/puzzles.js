export async function getTodayPuzzle() {
  const base = typeof window !== "undefined"
    ? window.location.origin
    : "";

  try {
    const res = await fetch(`${base}/puzzles.json`, {
      cache: "no-store"
    });

    if (!res.ok) {
      console.error("Failed to fetch puzzles.json:", res.status);
      return null;
    }

    const puzzles = await res.json();
    return puzzles[0];
  } catch (err) {
    console.error("Puzzle load failed:", err);
    return null;
  }
}

