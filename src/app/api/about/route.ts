import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongo";
import Contact from "@/models/Contact";

export async function POST(request: Request) {
  await connectDB();

  const body = await request.json();

  const contact = await Contact.create(body);

  return NextResponse.json({
    success: true,
    data: contact,
  });
}

export async function GET() {
  return NextResponse.json({
    message: "Contact API Working",
  });
}