import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json([
    "AI Agents",
    "Automation",
    "Ecommerce",
    "Software Development",
    "Custom Apps",
    "Company Websites"
  ]);
}