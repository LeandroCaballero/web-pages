import { z } from "zod";
import { idReference } from "./commons";

export const createCinemaSchema = z.object({
  name: z.string().min(1),
  location: z.string().min(1),
  cities: z.array(idReference).min(1),
});

export const editCinemaSchema = z.object({
  name: z.string().optional(),
  location: z.string().optional(),
  cities: z.array(idReference).optional(),
});
