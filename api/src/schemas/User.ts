import { z } from "zod";

export const userSchema = z.object({
  email: z.string().email().min(1),
  password: z.string().min(1),
});
