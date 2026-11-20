import { z } from "zod";

/**
 * Shared contact-form schema. Imported by both the client form
 * (components/ContactForm.tsx) and the API route (app/api/send/route.ts)
 * so validation can never be bypassed on the client alone.
 */
export const emailSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Name must be at least 2 characters")
    .max(100, "Name must be at most 100 characters"),
  mail: z
    .string()
    .email("Invalid email address")
    .max(254, "Email must be at most 254 characters"),
  subject: z
    .string()
    .trim()
    .min(3, "Subject must be at least 3 characters")
    .max(150, "Subject must be at most 150 characters"),
  message: z
    .string()
    .trim()
    .min(10, "Message must be at least 10 characters")
    .max(5000, "Message must be at most 5000 characters"),
});
