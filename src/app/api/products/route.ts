// src/app/api/products/route.ts

import { NextResponse } from "next/server";

export async function GET() {
  const products = [
    {
      id: 1,
      name: "PIHU-1",
      description: "Humanoid AI Robot",
    },
    {
      id: 2,
      name: "Robot Controller",
      description: "Automation Platform",
    },
    {
      id: 3,
      name: "AI Solutions",
      description: "Machine Learning Systems",
    },
  ];

  return NextResponse.json(products);
}