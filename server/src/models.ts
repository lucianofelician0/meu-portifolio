import { Schema, model } from "mongoose";

const userSchema = new Schema(
  {
    email: { type: String, required: true, unique: true, lowercase: true, trim: true },
    passwordHash: { type: String, required: true },
  },
  { timestamps: true },
);

const projectSchema = new Schema(
  {
    title: { type: String, required: true, trim: true },
    description: { type: String, required: true },
    image: String,
    techStack: { type: [String], default: [] },
    githubUrl: String,
    liveUrl: String,
    featured: { type: Boolean, default: false },
    order: { type: Number, default: 0 },
  },
  { timestamps: true },
);

const postSchema = new Schema(
  {
    title: { type: String, required: true, trim: true },
    slug: { type: String, required: true, unique: true },
    excerpt: { type: String, default: "" },
    content: { type: String, required: true }, // Markdown
    coverImage: String,
    tags: { type: [String], default: [] },
    published: { type: Boolean, default: false },
    publishedAt: Date,
  },
  { timestamps: true },
);

function slugify(text: string) {
  return text
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

// Gera o slug a partir do título quando vazio e guarda a data da primeira publicação
postSchema.pre("validate", function () {
  if (!this.slug) this.slug = slugify(this.title);
  if (this.published && !this.publishedAt) this.publishedAt = new Date();
});

const certificationSchema = new Schema(
  {
    title: { type: String, required: true, trim: true },
    issuer: { type: String, required: true },
    kind: { type: String, enum: ["certification", "education"], default: "certification" },
    issueDate: Date,
    credentialUrl: String,
    description: String,
  },
  { timestamps: true },
);

// Um documento por dia: { day: "2026-10-31", count: 42 }
const visitSchema = new Schema({
  day: { type: String, required: true, unique: true },
  count: { type: Number, default: 0 },
});

export const User = model("User", userSchema);
export const Project = model("Project", projectSchema);
export const Post = model("Post", postSchema);
export const Certification = model("Certification", certificationSchema);
export const Visit = model("Visit", visitSchema);
