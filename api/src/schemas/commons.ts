import { z } from "zod";

export const idReference = z.object({
  id: z.string(),
});
