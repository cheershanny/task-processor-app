import { NextRequest, NextResponse } from "next/server";
import prisma from "@/prisma/client";
import { taskSchema } from "@/app/types/Task";

export async function GET(request: NextRequest) {
  const tasks = await prisma.task.findMany();
  return NextResponse.json(tasks);
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  const validation = taskSchema.safeParse(body);
  if (!validation.success)
    return NextResponse.json(validation.error.errors, { status: 400 });
  const newTask = await prisma.task.create({
    data: { name: body.name },
  });
  return NextResponse.json(newTask, { status: 201 });
}

export async function DELETE(request: NextRequest) {
  const body = await request.json();
  await prisma.task.delete({ where: { id: body.id } });
  return NextResponse.json({ message: "success!" }, { status: 200 });
}

export async function PUT(request: NextRequest) {
  const body = await request.json();
  const validation = taskSchema.safeParse(body);
  if (!validation.success)
    return NextResponse.json(validation.error.errors, { status: 400 });
  const task = await prisma.task.update({
    where: { id: body.id },
    data: { name: body.name },
  });
  return NextResponse.json(task, { status: 200 });
}
