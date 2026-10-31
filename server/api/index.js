// Ponto de entrada para a Vercel (serverless). Em desenvolvimento usa-se src/index.ts.
// Importa o build de `npm run build` (dist/), feito pela Vercel antes de publicar.
import mongoose from "mongoose";
import { app } from "../dist/app.js";
import { config } from "../dist/config.js";

// Reaproveita a ligação ao MongoDB entre invocações da mesma instância
let connection;

export default async function handler(req, res) {
  connection ??= mongoose.connect(config.mongoUri, { serverSelectionTimeoutMS: 8000 });
  try {
    await connection;
  } catch (err) {
    connection = undefined; // tenta ligar de novo no próximo pedido
    console.error(err);
    res.statusCode = 503;
    res.setHeader("Content-Type", "application/json");
    return res.end(JSON.stringify({ error: "Base de dados indisponível" }));
  }
  return app(req, res);
}
