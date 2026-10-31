import { useState } from "react";
import { api } from "@/lib/api";

export const AccountPanel = () => {
  const [status, setStatus] = useState<{ ok?: string; error?: string }>({});
  const [saving, setSaving] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formEl = e.currentTarget;
    const form = new FormData(formEl);
    const newPassword = String(form.get("newPassword"));
    if (newPassword !== form.get("confirmPassword")) {
      setStatus({ error: "A confirmação não é igual à nova senha." });
      return;
    }
    setSaving(true);
    setStatus({});
    try {
      await api("/auth/password", {
        method: "PUT",
        json: { currentPassword: form.get("currentPassword"), newPassword },
      });
      formEl.reset();
      setStatus({ ok: "Senha alterada com sucesso." });
    } catch (err) {
      setStatus({ error: (err as Error).message });
    } finally {
      setSaving(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-sm space-y-4">
      <h2 className="text-xl font-bold">Alterar senha</h2>
      <label className="block space-y-1">
        <span className="text-sm font-medium">Senha atual</span>
        <input name="currentPassword" type="password" required autoComplete="current-password" className="input" />
      </label>
      <label className="block space-y-1">
        <span className="text-sm font-medium">Nova senha</span>
        <input name="newPassword" type="password" required minLength={10} autoComplete="new-password" className="input" />
        <span className="block text-xs text-zinc-500">Pelo menos 10 caracteres.</span>
      </label>
      <label className="block space-y-1">
        <span className="text-sm font-medium">Confirmar nova senha</span>
        <input name="confirmPassword" type="password" required minLength={10} autoComplete="new-password" className="input" />
      </label>
      {status.error && <p className="text-sm text-red-600">{status.error}</p>}
      {status.ok && <p className="text-sm text-green-700">{status.ok}</p>}
      <button disabled={saving} className="btn-primary">
        {saving ? "Salvando..." : "Alterar senha"}
      </button>
    </form>
  );
};
