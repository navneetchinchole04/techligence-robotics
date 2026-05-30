import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongo";
import Contact from "@/models/Contact";

export async function GET() {
  await connectDB();

  const contacts = await Contact.find();

  return NextResponse.json(contacts);
}

export async function POST(request: Request) {
  await connectDB();

  const body = await request.json();

  const contact = await Contact.create(body);

  return NextResponse.json({
    success: true,
    data: contact,
  });
}