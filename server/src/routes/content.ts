import { Router } from "express";
import { Certification, Post, Project } from "../models.js";
import { certificationSchema, postSchema, projectSchema } from "../schemas.js";
import { HttpError, requireAuth } from "../middleware.js";
import { addAdminRoutes } from "./crud.js";

// ---------- Projetos ----------
export const projectsRouter = Router();

projectsRouter.get("/", async (_req, res) => {
  res.json(await Project.find().sort({ featured: -1, order: 1, createdAt: -1 }));
});

addAdminRoutes(projectsRouter, Project, projectSchema);

// ---------- Certificações / Educação ----------
export const certificationsRouter = Router();

certificationsRouter.get("/", async (_req, res) => {
  res.json(await Certification.find().sort({ issueDate: -1, createdAt: -1 }));
});

addAdminRoutes(certificationsRouter, Certification, certificationSchema);

// ---------- Blog ----------
export const postsRouter = Router();

// Lista pública: só posts publicados, sem o conteúdo completo
postsRouter.get("/", async (req, res) => {
  const limit = Math.min(Number(req.query.limit) || 50, 50);
  const posts = await Post.find({ published: true })
    .select("-content")
    .sort({ publishedAt: -1 })
    .limit(limit);
  res.json(posts);
});

// Lista do admin: inclui rascunhos e conteúdo
postsRouter.get("/admin/all", requireAuth, async (_req, res) => {
  res.json(await Post.find().sort({ createdAt: -1 }));
});

postsRouter.get("/:slug", async (req, res) => {
  const post = await Post.findOne({ slug: req.params.slug, published: true });
  if (!post) throw new HttpError(404, "Post não encontrado");
  res.json(post);
});

addAdminRoutes(postsRouter, Post, postSchema);
