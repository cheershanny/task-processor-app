import { z } from "zod";

export interface Step {
  id: number;
  name: string;
  duration: number;
  description: string | null;
  taskId: number;
}

export const stepSchema = z.object({
  name: z.string(),
  taskId: z.number(),
  duration: z.number(),
  description: z.string().nullable(),
});
