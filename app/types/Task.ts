import { z } from "zod";

export interface Task {
  id: number;
  name: string;
}

export const taskSchema = z.object({
  name: z.string(),
});
