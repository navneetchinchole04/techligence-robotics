// src/app/api/contact/route.ts

import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();

  console.log("Contact Form:", body);

  return NextResponse.json({
    success: true,
    message: "Message received",
  });
}