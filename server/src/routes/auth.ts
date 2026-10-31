import { Router } from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { rateLimit } from "express-rate-limit";
import { config } from "../config.js";
import { User } from "../models.js";
import { changePasswordSchema, loginSchema } from "../schemas.js";
import { HttpError, requireAuth, validate } from "../middleware.js";

export const authRouter = Router();

// Protege contra força bruta: 10 tentativas a cada 15 minutos por IP
const loginLimiter = rateLimit({ windowMs: 15 * 60 * 1000, limit: 10 });

authRouter.post("/login", loginLimiter, validate(loginSchema), async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email: email.toLowerCase() });
  if (!user || !(await bcrypt.compare(password, user.passwordHash))) {
    throw new HttpError(401, "Email ou senha incorretos");
  }
  const token = jwt.sign({ sub: user.id, email: user.email }, config.jwtSecret, { expiresIn: "7d" });
  res.json({ token });
});

authRouter.get("/me", requireAuth, (_req, res) => {
  res.json({ ok: true });
});

// Exige a senha atual, para um token roubado não bastar para trocar a senha
authRouter.put("/password", requireAuth, loginLimiter, validate(changePasswordSchema), async (req, res) => {
  const { currentPassword, newPassword } = req.body;
  const user = await User.findById(res.locals.userId);
  if (!user || !(await bcrypt.compare(currentPassword, user.passwordHash))) {
    throw new HttpError(401, "Senha atual incorreta");
  }
  user.passwordHash = await bcrypt.hash(newPassword, 12);
  await user.save();
  res.status(204).end();
});
