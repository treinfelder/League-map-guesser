import { NextResponse } from "next/server";
import { getTodayPuzzle } from "../../../lib/puzzles";


export function GET() {
  return NextResponse.json(getTodayPuzzle());
}
