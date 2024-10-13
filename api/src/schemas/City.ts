import { z } from "zod";

export const createCitySchema = z.object({
  name: z.string().min(1),
});

export const editCitySchema = z.object({
  name: z.string().optional(),
});
