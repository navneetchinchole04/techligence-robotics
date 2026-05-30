import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    message: "Contact API Working"
  });
}

export async function POST(request: Request) {
  const body = await request.json();

  return NextResponse.json({
    success: true,
    message: "Contact form received",
    data: body,
  });
}