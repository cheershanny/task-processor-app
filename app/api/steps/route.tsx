import { stepSchema } from "@/app/types/Step";
import prisma from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const steps = await prisma.step.findMany();
  return NextResponse.json(steps);
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  const validation = stepSchema.safeParse(body);
  if (!validation.success)
    return NextResponse.json(validation.error.errors, { status: 400 });
  const task = await prisma.task.findUnique({
    where: { id: body.taskId },
  });
  if (!task)
    return NextResponse.json({ message: "Task not found" }, { status: 404 });

  const newStep = await prisma.step.create({
    data: {
      name: body.name,
      duration: parseInt(body.duration),
      description: body.description || null,
      taskId: parseInt(body.taskId),
    },
  });
  return NextResponse.json(newStep, { status: 201 });
}
