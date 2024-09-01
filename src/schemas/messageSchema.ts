import { message } from "antd";
import { z } from "zod";

export const MessagesSchema = z.object({
  content: z
    .string()
    .min(10, { message: "Content must me at least 10 characters" })
    .max(300, { message: "Content must be less than 300 characters" }),
});
