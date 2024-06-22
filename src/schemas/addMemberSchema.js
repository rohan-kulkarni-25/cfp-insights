import { z } from "zod";

export const addMemberSchema = z.object({
  username: z.string(),
  email: z.string().email({ message: "Invalid Email Address" }),
  role: z.string(),
  name: z.string(),
});
