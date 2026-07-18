import { NextResponse } from "next/server";
import { readFile } from "fs/promises";
import { join } from "path";

export async function GET() {
  const filePath = join(process.cwd(), "public", "YashBhidaweResume.pdf");
  const pdf = await readFile(filePath);

  return new NextResponse(pdf, {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": "inline; filename=\"YashBhidaweResume.pdf\"",
    },
  });
}
