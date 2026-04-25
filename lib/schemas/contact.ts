import { z } from "zod";

export const contactServices = [
  "Drain cleaning",
  "Water heater",
  "Leak repair",
  "Repipe",
  "Sewer / main line",
  "Fixtures or remodel",
  "Gas line",
  "24/7 emergency",
  "General inquiry",
] as const;

export const preferredContactMethods = ["Phone", "Email", "Text"] as const;

export const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required"),
  phone: z.string().trim().min(1, "Phone is required"),
  email: z.string().trim().min(1, "Email is required").email("Enter a valid email"),
  service: z.string().trim().max(120).optional().or(z.literal("")),
  preferredContactMethod: z.string().trim().max(40).optional().or(z.literal("")),
  message: z.string().trim().min(1, "Message is required"),
  companyWebsite: z.string().optional().default(""),
  sourcePage: z.string().optional().default("/contact"),
});

export type ContactInput = z.input<typeof contactSchema>;
export type ContactData = z.output<typeof contactSchema>;
