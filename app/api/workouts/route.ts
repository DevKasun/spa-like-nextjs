import { NextResponse } from "next/server";
import { workouts, type Workout } from "@/app/lib/workouts";

export async function GET() {
  const body: { workouts: Workout[]; total: number } = {
    workouts,
    total: workouts.length,
  };
  return NextResponse.json(body);
}