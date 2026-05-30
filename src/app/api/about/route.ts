import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    company: "Techligence",
    location: "Kalyan, Maharashtra",
    email: "info@techligence.net",
    phone: "+91 70208 12247"
  });
}