import { z } from "zod";

// Campos de URL vindos do formulário podem chegar vazios
const optionalUrl = z.union([z.url(), z.literal("")]).optional();

export const loginSchema = z.object({
  email: z.email(),
  password: z.string().min(1),
});

export const changePasswordSchema = z.object({
  currentPassword: z.string().min(1),
  newPassword: z.string().min(10, "A nova senha precisa de pelo menos 10 caracteres"),
});

export const projectSchema = z.object({
  title: z.string().min(1),
  description: z.string().min(1),
  image: optionalUrl,
  techStack: z.array(z.string()).default([]),
  githubUrl: optionalUrl,
  liveUrl: optionalUrl,
  featured: z.boolean().default(false),
  order: z.coerce.number().default(0),
});

export const postSchema = z.object({
  title: z.string().min(1),
  slug: z
    .string()
    .regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, "Use apenas letras minúsculas, números e hífens")
    .optional()
    .or(z.literal("")),
  excerpt: z.string().default(""),
  content: z.string().min(1),
  coverImage: optionalUrl,
  tags: z.array(z.string()).default([]),
  published: z.boolean().default(false),
});

export const certificationSchema = z.object({
  title: z.string().min(1),
  issuer: z.string().min(1),
  kind: z.enum(["certification", "education"]).default("certification"),
  issueDate: z.coerce.date().optional(),
  credentialUrl: optionalUrl,
  description: z.string().optional(),
});
