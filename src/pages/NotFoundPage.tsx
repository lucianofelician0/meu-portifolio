import { Link } from "react-router";
import { PageHeader } from "@/components/PageHeader";

export default function NotFoundPage() {
  return (
    <div className="min-h-screen">
      <PageHeader />
      <main className="flex flex-col items-center text-center px-4 py-24">
        <p className="font-honk text-7xl">404</p>
        <h1 className="text-2xl font-bold mt-4">Página não encontrada</h1>
        <p className="font-light text-zinc-500 mt-2">A página que procura não existe ou foi movida.</p>
        <Link to="/" className="mt-8 rounded-full bg-zinc-900 px-5 py-2 text-sm font-medium text-white hover:bg-zinc-700">
          Voltar ao início
        </Link>
      </main>
    </div>
  );
}
