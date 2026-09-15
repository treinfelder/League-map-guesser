import { NextResponse } from "next/server";
import { getAllPuzzles } from "../../lib/puzzles";

export async function GET() {
  const puzzles = await getAllPuzzles();
  return NextResponse.json(puzzles);
}
