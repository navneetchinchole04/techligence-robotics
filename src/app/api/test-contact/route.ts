import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongo";
import Contact from "@/models/Contact";

export async function GET() {
  await connectDB();

  const contact = await Contact.create({
    name: "Navneet",
    email: "navneet@test.com",
    phone: "9876543210",
    message: "Testing Contact API",
  });

  return NextResponse.json(contact);
}