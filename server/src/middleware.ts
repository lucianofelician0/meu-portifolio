import type { ErrorRequestHandler, RequestHandler } from "express";
import jwt from "jsonwebtoken";
import mongoose from "mongoose";
import { z } from "zod";
import { config } from "./config.js";

export class HttpError extends Error {
  constructor(
    public status: number,
    message: string,
  ) {
    super(message);
  }
}

export const requireAuth: RequestHandler = (req, _res, next) => {
  const token = req.headers.authorization?.replace(/^Bearer /, "");
  if (!token) throw new HttpError(401, "Não autenticado");
  try {
    jwt.verify(token, config.jwtSecret);
  } catch {
    throw new HttpError(401, "Sessão expirada, faça login novamente");
  }
  next();
};

// Valida e substitui req.body pelo resultado do parse (com defaults aplicados)
export const validate =
  (schema: z.ZodType): RequestHandler =>
  (req, _res, next) => {
    req.body = schema.parse(req.body);
    next();
  };

export const errorHandler: ErrorRequestHandler = (err, _req, res, _next) => {
  if (err instanceof HttpError) {
    res.status(err.status).json({ error: err.message });
  } else if (err instanceof z.ZodError) {
    res.status(400).json({ error: "Dados inválidos", issues: z.flattenError(err).fieldErrors });
  } else if (err instanceof mongoose.Error.CastError) {
    res.status(404).json({ error: "Não encontrado" });
  } else if (err?.code === 11000) {
    res.status(409).json({ error: `Já existe um registro com este ${Object.keys(err.keyValue ?? {})[0] ?? "valor"}` });
  } else {
    console.error(err);
    res.status(500).json({ error: "Erro interno do servidor" });
  }
};
