import mongoose from "mongoose";
import { app } from "./app.js";
import { config } from "./config.js";

await mongoose.connect(config.mongoUri);
console.log("MongoDB conectado");

app.listen(config.port, () => {
  console.log(`API rodando em http://localhost:${config.port}`);
});
