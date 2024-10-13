import { z } from "zod";

export const createCinemaSchema = z.object({
  name: z.string().min(1),
  location: z.string().min(1),
});

export const editCinemaSchema = z.object({
  name: z.string().optional(),
  location: z.string().optional(),
});
