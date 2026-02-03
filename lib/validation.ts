import { z } from "zod";

export const contactFormSchema = z.object({
  name: z.string().min(1, "Name is required").trim(),
  email: z
    .string()
    .min(1, "Email is required")
    .email("Invalid email format")
    .trim(),
  message: z.string().min(10, "Message must be at least 10 characters").trim(),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
