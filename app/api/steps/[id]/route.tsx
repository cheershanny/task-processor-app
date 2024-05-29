import prisma from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";
export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const steps = await prisma.step.findMany({
    where: {
      taskId: parseInt(params.id),
    },
  });

  return NextResponse.json(steps);
}
