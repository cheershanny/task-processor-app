import prisma from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";

export async function DELETE(
    request: NextRequest,
    { params }: { params: { id: string } }
  ) {
    const task = await prisma.task.findUnique({
      where: { id: parseInt(params.id) },
    });
    if (!task)
      return NextResponse.json({ error: "task not found" }, { status: 404 });
    await prisma.task.delete({ where: { id: task.id } });
    return NextResponse.json({ message: "success!" }, { status: 200 });
  }
  