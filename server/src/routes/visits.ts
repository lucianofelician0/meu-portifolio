import { Router } from "express";
import { rateLimit } from "express-rate-limit";
import { Visit } from "../models.js";
import { requireAuth } from "../middleware.js";

export const visitsRouter = Router();

const today = () => new Date().toISOString().slice(0, 10);

// O frontend registra uma visita por sessão; o limite evita inflar o contador
const visitLimiter = rateLimit({ windowMs: 60 * 60 * 1000, limit: 20 });

visitsRouter.post("/", visitLimiter, async (_req, res) => {
  await Visit.updateOne({ day: today() }, { $inc: { count: 1 } }, { upsert: true });
  res.status(204).end();
});

visitsRouter.get("/stats", requireAuth, async (_req, res) => {
  const [totals] = await Visit.aggregate<{ total: number }>([
    { $group: { _id: null, total: { $sum: "$count" } } },
  ]);

  const since = new Date();
  since.setDate(since.getDate() - 29);
  const days = await Visit.find({ day: { $gte: since.toISOString().slice(0, 10) } })
    .select("day count -_id")
    .sort({ day: 1 });

  res.json({
    total: totals?.total ?? 0,
    today: days.find((d) => d.day === today())?.count ?? 0,
    last30Days: days,
  });
});
