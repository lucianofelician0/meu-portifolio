import express from "express";
import cors from "cors";
import helmet from "helmet";
import { config } from "./config.js";
import { errorHandler } from "./middleware.js";
import { authRouter } from "./routes/auth.js";
import { certificationsRouter, postsRouter, projectsRouter } from "./routes/content.js";
import { visitsRouter } from "./routes/visits.js";

export const app = express();

app.set("trust proxy", 1); // necessário para o rate limit atrás de proxies (Render, Railway…)
app.use(helmet());
app.use(cors({ origin: config.clientUrls }));
app.use(express.json({ limit: "1mb" }));

app.get("/api/health", (_req, res) => {
  res.json({ ok: true });
});

app.use("/api/auth", authRouter);
app.use("/api/projects", projectsRouter);
app.use("/api/posts", postsRouter);
app.use("/api/certifications", certificationsRouter);
app.use("/api/visits", visitsRouter);

app.use((_req, res) => {
  res.status(404).json({ error: "Rota não encontrada" });
});
app.use(errorHandler);
