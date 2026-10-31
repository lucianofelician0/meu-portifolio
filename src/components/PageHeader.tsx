import { Link } from "react-router";
import { ArrowLeft } from "lucide-react";

// Cabeçalho simples para páginas fora da home (blog, admin)
export const PageHeader = ({ backTo = "/", backLabel = "Voltar ao início" }) => (
  <header className="h-18 px-4 border-b border-zinc-200 flex items-center justify-between gap-4 sm:px-[10%]">
    <Link to="/" className="text-2xl sm:text-3xl font-honk font-bold shrink-0">
      Feluciano<span className="text-red-600 text-2xl font-extrabold">.</span>
    </Link>
    <Link to={backTo} className="inline-flex items-center gap-2 text-sm text-zinc-500 hover:text-zinc-800">
      <ArrowLeft size={14} /> {backLabel}
    </Link>
  </header>
);
