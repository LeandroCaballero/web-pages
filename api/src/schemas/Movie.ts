import { z } from "zod";

export const movieSchema = z.object({
  name: z.string().min(1),
  location: z.string().min(1),
  genre: z.string().min(1),
  director: z.string().min(1),
  actors: z.array(z.string()).min(1),
  description: z.string(),
  image: z.string().url(),
  videoImage: z.string().url().optional(),
  videoUrl: z.string().url().optional(),
  duration: z.string().min(1),
  schedules: z.array(z.string()).min(1),
  cinemas: z.array(z.string()).min(1),
});
