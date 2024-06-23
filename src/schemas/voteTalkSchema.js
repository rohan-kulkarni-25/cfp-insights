import { z } from "zod";

export const voteTalkSchema = z.object({
  vote: z
    .string()
    .refine(
      (val) => !isNaN(Number(val)) && Number(val) >= 1 && Number(val) <= 5,
      {
        message: "Vote must be a number between 1 and 5",
      }
    )
    .transform((val) => Number(val)), // Convert string to number
  comment: z
    .string()
    .max(250, { message: "Comment should be at most 250 characters" })
    .optional(),
});
