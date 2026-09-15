import { NextResponse } from "next/server";
import { getTodayPuzzle } from "../../../lib/puzzles";

export async function GET() {
  const puzzle = await getTodayPuzzle();
  return NextResponse.json(puzzle);
}
