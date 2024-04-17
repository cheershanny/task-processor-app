import { NextRequest, NextResponse } from "next/server";
import prisma from "@/prisma/client";

export async function GET(request: NextRequest) {
  const tasks = await prisma.task.findMany();
  return NextResponse.json(tasks);
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  const newTask = await prisma.task.create({
    data: { name: body.task },
  });
  return NextResponse.json(newTask, { status: 201 });
}
