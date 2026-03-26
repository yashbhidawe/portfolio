import { NextResponse } from "next/server";

export async function GET() {
  // This is a placeholder API route. 
  // In a real scenario, you would fetch this data from WakaTime or a similar service.
  return NextResponse.json({ 
    hours: "4.5", // Mocking 4.5 hours of coding today
  });
}
