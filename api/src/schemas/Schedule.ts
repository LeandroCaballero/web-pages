import { z } from "zod";

export const createScheduleSchema = z.object({
  type: z.string().min(1),
  hours: z.array(z.date()),
  movieId: z.string().min(1),
});

export const editScheduleSchema = z.object({
  type: z.string().optional(),
  hours: z.array(z.date()).optional(),
  movieId: z.string().optional(),
});
