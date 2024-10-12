import { z } from "zod";

export const scheduleSchema = z.object({
  type: z.string().min(1),
  hours: z.date(),
  movieId: z.string(),
});
