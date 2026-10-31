import type { Router } from "express";
import type { Model } from "mongoose";
import type { z } from "zod";
import { HttpError, requireAuth, validate } from "../middleware.js";

/** Rotas de escrita protegidas (POST, PUT /:id, DELETE /:id) para um model. */
export function addAdminRoutes(
  router: Router,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  Model: Model<any>,
  schema: z.ZodObject,
) {
  router.post("/", requireAuth, validate(schema), async (req, res) => {
    const doc = await Model.create(req.body);
    res.status(201).json(doc);
  });

  router.put("/:id", requireAuth, async (req, res) => {
    const raw = req.body ?? {};
    const parsed = schema.partial().parse(raw);
    // Aplica só os campos enviados, para os defaults do schema não sobrescreverem dados existentes
    const changes = Object.fromEntries(Object.entries(parsed).filter(([key]) => key in raw));

    const doc = await Model.findById(req.params.id);
    if (!doc) throw new HttpError(404, "Não encontrado");
    doc.set(changes);
    await doc.save(); // save (e não findByIdAndUpdate) para rodar os hooks do model
    res.json(doc);
  });

  router.delete("/:id", requireAuth, async (req, res) => {
    const doc = await Model.findByIdAndDelete(req.params.id);
    if (!doc) throw new HttpError(404, "Não encontrado");
    res.status(204).end();
  });
}
