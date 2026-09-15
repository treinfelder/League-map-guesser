// Load puzzles.json on the server (Vercel) or client (browser)
async function loadPuzzles() {
  const base =
    typeof window !== "undefined"
      ? window.location.origin
      : process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : "";

  try {
    const res = await fetch(`${base}/puzzles.json`, {
      cache: "no-store",
    });

    if (!res.ok) {
      console.error("Failed to fetch puzzles.json:", res.status);
      return [];
    }

    return await res.json();
  } catch (err) {
    console.error("Puzzle load failed:", err);
    return [];
  }
}

// Return ALL puzzles
export async function getAllPuzzles() {
  const puzzles = await loadPuzzles();
  return puzzles;
}

// Return TODAY'S puzzle
export async function getTodayPuzzle() {
  const puzzles = await loadPuzzles();
  return puzzles[0] || null;
}
