import { useState } from "react";
import { useNavigate } from "react-router";
import { api, authToken } from "@/lib/api";
import { PageHeader } from "@/components/PageHeader";

export default function LoginPage() {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    setLoading(true);
    setError("");
    try {
      const { token } = await api<{ token: string }>("/auth/login", {
        method: "POST",
        json: { email: form.get("email"), password: form.get("password") },
      });
      authToken.set(token);
      navigate("/admin");
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen">
      <PageHeader />
      <main className="flex justify-center px-4 py-16">
        <form onSubmit={handleSubmit} className="w-full max-w-sm border rounded-lg border-gray-300 p-8 space-y-4">
          <h1 className="font-honk text-3xl text-center">Admin</h1>
          <input name="email" type="email" required placeholder="Email" className="input" />
          <input name="password" type="password" required placeholder="Senha" className="input" />
          {error && <p className="text-sm text-red-600">{error}</p>}
          <button disabled={loading} className="btn-primary w-full">
            {loading ? "Entrando..." : "Entrar"}
          </button>
        </form>
      </main>
    </div>
  );
}
