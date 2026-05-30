import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongo";
import Product from "@/models/Product";

export async function GET() {
  await connectDB();

  await Product.insertMany([
    {
      name: "PIHU-1",
      description: "Humanoid AI Robot",
    },
    {
      name: "Robot Controller",
      description: "Automation Platform",
    },
    {
      name: "AI Solutions",
      description: "Machine Learning Systems",
    },
  ]);

  return NextResponse.json({
    success: true,
    message: "Products Added",
  });
}