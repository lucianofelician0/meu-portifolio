import { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router";
import { LogOut } from "lucide-react";
import { api, authToken } from "@/lib/api";
import { formatDate, type Certification, type Post, type Project } from "@/lib/types";
import { ResourceManager, type Field } from "./ResourceManager";
import { VisitStatsPanel } from "./VisitStatsPanel";
import { AccountPanel } from "./AccountPanel";

const projectFields: Field[] = [
  { name: "title", label: "Título", type: "text", required: true },
  { name: "description", label: "Descrição", type: "textarea", required: true },
  { name: "image", label: "URL da imagem", type: "url" },
  { name: "techStack", label: "Tecnologias", type: "tags", hint: "Separadas por vírgula: React, Node Js, MongoDB" },
  { name: "githubUrl", label: "GitHub", type: "url" },
  { name: "liveUrl", label: "Demo", type: "url" },
  { name: "order", label: "Ordem", type: "number", hint: "Menor aparece primeiro" },
  { name: "featured", label: "Destaque", type: "checkbox" },
];

const postFields: Field[] = [
  { name: "title", label: "Título", type: "text", required: true },
  { name: "slug", label: "Slug (URL)", type: "text", hint: "Deixe vazio para gerar a partir do título" },
  { name: "excerpt", label: "Resumo", type: "textarea" },
  { name: "content", label: "Conteúdo (Markdown)", type: "textarea", required: true },
  { name: "coverImage", label: "URL da capa", type: "url" },
  { name: "tags", label: "Tags", type: "tags", hint: "Separadas por vírgula" },
  { name: "published", label: "Publicado", type: "checkbox" },
];

const certificationFields: Field[] = [
  { name: "title", label: "Título", type: "text", required: true },
  { name: "issuer", label: "Instituição / Emissor", type: "text", required: true },
  {
    name: "kind",
    label: "Tipo",
    type: "select",
    options: [
      { value: "certification", label: "Certificação" },
      { value: "education", label: "Educação" },
    ],
  },
  { name: "issueDate", label: "Data", type: "date" },
  { name: "credentialUrl", label: "URL da credencial", type: "url" },
  { name: "description", label: "Descrição", type: "textarea" },
];

const tabs = ["Visitas", "Projetos", "Posts", "Certificações", "Conta"] as const;

export default function AdminPage() {
  const navigate = useNavigate();
  const [tab, setTab] = useState<(typeof tabs)[number]>("Visitas");

  // Confere se o token ainda é válido; se não for, a API limpa o token
  useEffect(() => {
    api("/auth/me").catch(() => navigate("/admin/login"));
  }, [navigate]);

  if (!authToken.get()) return <Navigate to="/admin/login" replace />;

  const logout = () => {
    authToken.clear();
    navigate("/admin/login");
  };

  return (
    <div className="min-h-screen">
      <header className="h-18 px-4 border-b border-zinc-200 flex items-center justify-between sm:px-[10%]">
        <span className="text-3xl font-honk font-bold">
          Admin<span className="text-red-600 text-2xl font-extrabold">.</span>
        </span>
        <div className="flex items-center gap-4 text-sm">
          <a href="/" target="_blank" className="text-zinc-500 hover:text-zinc-800">
            Ver site
          </a>
          <button onClick={logout} className="btn-secondary inline-flex items-center gap-2">
            <LogOut size={14} /> Sair
          </button>
        </div>
      </header>

      <main className="w-full sm:w-[80%] mx-auto px-4 py-8">
        <nav className="flex flex-wrap gap-2 mb-8">
          {tabs.map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`px-4 py-1.5 rounded-full text-sm cursor-pointer border ${tab === t ? "bg-zinc-900 text-white border-zinc-900" : "border-zinc-200 text-zinc-500 hover:text-zinc-800"}`}
            >
              {t}
            </button>
          ))}
        </nav>

        {tab === "Visitas" && <VisitStatsPanel />}
        {tab === "Conta" && <AccountPanel />}
        {tab === "Projetos" && (
          <ResourceManager<Project & Record<string, unknown>>
            endpoint="/projects"
            fields={projectFields}
            describe={(p) => ({ title: p.title, subtitle: p.techStack.join(", ") })}
          />
        )}
        {tab === "Posts" && (
          <ResourceManager<Post & Record<string, unknown>>
            endpoint="/posts"
            listPath="/posts/admin/all"
            fields={postFields}
            describe={(p) => ({
              title: p.title,
              subtitle: p.published ? `Publicado · ${formatDate(p.publishedAt)}` : "Rascunho",
            })}
          />
        )}
        {tab === "Certificações" && (
          <ResourceManager<Certification & Record<string, unknown>>
            endpoint="/certifications"
            fields={certificationFields}
            describe={(c) => ({ title: c.title, subtitle: `${c.issuer} · ${formatDate(c.issueDate)}` })}
          />
        )}
      </main>
    </div>
  );
}
