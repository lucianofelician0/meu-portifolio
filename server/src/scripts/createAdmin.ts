// Cria ou atualiza o usuário admin.
// Uso: npm run create-admin -- seu@email.com "senha-forte"
import bcrypt from "bcryptjs";
import mongoose from "mongoose";
import { config } from "../config.js";
import { User } from "../models.js";

const [email, password] = process.argv.slice(2);
if (!email || !password || password.length < 8) {
  console.error('Uso: npm run create-admin -- seu@email.com "senha com 8+ caracteres"');
  process.exit(1);
}

await mongoose.connect(config.mongoUri);
const passwordHash = await bcrypt.hash(password, 12);
await User.updateOne({ email: email.toLowerCase() }, { passwordHash }, { upsert: true });
console.log(`Admin ${email} salvo.`);
await mongoose.disconnect();
