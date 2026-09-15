import { NextResponse } from "next/server";
import { getAllPuzzles } from "../../../lib/puzzles";
;

export function GET() {
  return NextResponse.json(getAllPuzzles());
}
