import z from "zod";

export type TNavMenus = {
  id: number;
  name: string;
  link: string;
};

export type THeroList = {
  id: number;
  icon: React.ReactNode;
  title: string;
  description: string;
};

export type TServices = {
  id: number;
  name: string;
  description: string;
  process: string[];
  duration: string;
  recovery: string;
  recommendedFor: string[];
};

export type TOurTeam = {
  id: number;
  name: string;
  position: "doctor" | "assistant";
  image: string;
  speciality?: string;
  qualification?: string; // BDS, MDS, Dental Hygienist, etc.
  experienceYears?: number;
  bio?: string;
};

export const callbackFormSchema = z.object({
  fullName: z.string().min(2, "Full name must be at least 2 characters"),
  phoneNumber: z
    .string()
    .min(10, "Enter a valid phone number")
    .regex(/^[0-9+\s\-()]+$/, "Enter a valid phone number"),
  email: z.string().email("Enter a valid email").optional().or(z.literal("")),
  preferredTime: z.enum(["Morning", "Afternoon", "Evening"]).optional(),
  message: z.string().optional(),
});
