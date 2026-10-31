# Feluciano — Portfólio

Portfólio pessoal full-stack.

- **Frontend** (raiz): React 19 + TypeScript + Vite + Tailwind CSS
- **Backend** (`server/`): Node.js + Express 5 + MongoDB (Mongoose) + JWT

## Funcionalidades

- Seções: Hero, Sobre, Skills, Experiência, **Projetos** (com filtro por tecnologia), **Certificações & Educação**, **Blog** e Contato
- Blog com posts em Markdown (`/blog` e `/blog/:slug`)
- Painel admin em `/admin` (login com JWT) para gerenciar projetos, posts e certificações
- Contador de visitas com gráfico dos últimos 30 dias no painel

## Rodando localmente

Pré-requisitos: Node 20+ e um MongoDB (local ou [MongoDB Atlas](https://www.mongodb.com/atlas), que tem plano gratuito).

```bash
# 1. Dependências
npm install
npm --prefix server install

# 2. Configure o backend
cp server/.env.example server/.env   # e preencha MONGODB_URI e JWT_SECRET

# 3. Crie o usuário admin
npm --prefix server run create-admin -- seu@email.com "uma-senha-forte"

# 4. Suba backend e frontend (em dois terminais)
npm run dev:server   # API em http://localhost:4000
npm run dev          # site em http://localhost:5173 (faz proxy de /api)
```

Depois acesse `http://localhost:5173/admin` para cadastrar o conteúdo.

## API

| Método | Rota | Acesso |
| --- | --- | --- |
| POST | `/api/auth/login` | público (limite de 10 tentativas / 15 min) |
| GET | `/api/projects`, `/api/certifications` | público |
| GET | `/api/posts`, `/api/posts/:slug` | público (só publicados) |
| GET | `/api/posts/admin/all` | admin |
| POST / PUT `/:id` / DELETE `/:id` | `/api/projects`, `/api/posts`, `/api/certifications` | admin |
| POST | `/api/visits` | público |
| GET | `/api/visits/stats` | admin |

## Deploy

- **Backend**: Render, Railway ou Fly.io — `npm run build` e `npm start` dentro de `server/`, com as variáveis do `.env.example` (`CLIENT_URL` = URL do site).
- **Frontend**: Vercel (projeto `meu-portifolio`, domínio www.feluciano.online, publica sozinho a cada push na `main`) ou Netlify — defina `VITE_API_URL` com a URL do backend (veja `.env.example`). O fallback de SPA para `/blog` e `/admin` já está configurado em `vercel.json` e `public/_redirects`.
