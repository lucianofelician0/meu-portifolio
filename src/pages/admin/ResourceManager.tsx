import { useState } from "react";
import { Pencil, Plus, Trash2 } from "lucide-react";
import { api } from "@/lib/api";
import { useApi } from "@/lib/useApi";

export interface Field {
  name: string;
  label: string;
  type: "text" | "textarea" | "url" | "number" | "checkbox" | "tags" | "date" | "select";
  required?: boolean;
  options?: { value: string; label: string }[];
  hint?: string;
}

interface ResourceManagerProps<T> {
  endpoint: string; // ex.: "/projects"
  listPath?: string; // quando a listagem do admin difere da pública
  fields: Field[];
  describe: (item: T) => { title: string; subtitle?: string };
}

type Item = { _id: string } & Record<string, unknown>;

// Converte os valores do FormData para o formato que a API espera
function readForm(form: HTMLFormElement, fields: Field[]) {
  const data = new FormData(form);
  const body: Record<string, unknown> = {};
  for (const field of fields) {
    const raw = data.get(field.name);
    if (field.type === "checkbox") body[field.name] = raw === "on";
    else if (field.type === "tags")
      body[field.name] = String(raw ?? "").split(",").map((t) => t.trim()).filter(Boolean);
    else if (field.type === "number") body[field.name] = Number(raw ?? 0);
    else if (field.type === "date") body[field.name] = raw || undefined;
    else body[field.name] = String(raw ?? "");
  }
  return body;
}

function FieldInput({ field, value }: { field: Field; value: unknown }) {
  const common = { name: field.name, required: field.required, className: "input" };
  switch (field.type) {
    case "textarea":
      return <textarea {...common} rows={field.name === "content" ? 14 : 3} defaultValue={String(value ?? "")} />;
    case "checkbox":
      return <input type="checkbox" name={field.name} defaultChecked={Boolean(value)} className="size-4" />;
    case "tags":
      return <input {...common} defaultValue={Array.isArray(value) ? value.join(", ") : ""} />;
    case "date":
      return <input {...common} type="date" defaultValue={typeof value === "string" ? value.slice(0, 10) : ""} />;
    case "select":
      return (
        <select {...common} defaultValue={String(value ?? field.options?.[0]?.value)}>
          {field.options?.map((o) => (
            <option key={o.value} value={o.value}>
              {o.label}
            </option>
          ))}
        </select>
      );
    default:
      return <input {...common} type={field.type} defaultValue={String(value ?? "")} />;
  }
}

export function ResourceManager<T extends Item>({ endpoint, listPath, fields, describe }: ResourceManagerProps<T>) {
  const { data: items = [], loading, error, reload } = useApi<T[]>(listPath ?? endpoint);
  const [editing, setEditing] = useState<T | "new" | null>(null);
  const [formError, setFormError] = useState("");
  const [saving, setSaving] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSaving(true);
    setFormError("");
    try {
      const json = readForm(e.currentTarget, fields);
      if (editing === "new") await api(endpoint, { method: "POST", json });
      else await api(`${endpoint}/${editing?._id}`, { method: "PUT", json });
      setEditing(null);
      reload();
    } catch (err) {
      setFormError((err as Error).message);
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async (item: T) => {
    if (!confirm(`Excluir "${describe(item).title}"?`)) return;
    try {
      await api(`${endpoint}/${item._id}`, { method: "DELETE" });
      reload();
    } catch (err) {
      alert((err as Error).message);
    }
  };

  if (editing) {
    const current = editing === "new" ? undefined : editing;
    return (
      <form key={current?._id ?? "new"} onSubmit={handleSubmit} className="space-y-4">
        <h2 className="text-xl font-bold">{current ? "Editar" : "Novo"}</h2>
        {fields.map((field) => (
          <label key={field.name} className={field.type === "checkbox" ? "flex items-center gap-2" : "block space-y-1"}>
            <span className="text-sm font-medium">
              {field.label}
              {field.required && " *"}
            </span>
            <FieldInput field={field} value={current?.[field.name]} />
            {field.hint && <span className="block text-xs text-zinc-500">{field.hint}</span>}
          </label>
        ))}
        {formError && <p className="text-sm text-red-600">{formError}</p>}
        <div className="flex gap-2">
          <button disabled={saving} className="btn-primary">
            {saving ? "Salvando..." : "Salvar"}
          </button>
          <button type="button" onClick={() => setEditing(null)} className="btn-secondary">
            Cancelar
          </button>
        </div>
      </form>
    );
  }

  return (
    <div>
      <button onClick={() => setEditing("new")} className="btn-primary mb-4 inline-flex items-center gap-2">
        <Plus size={16} /> Adicionar
      </button>
      {loading && <p className="text-zinc-500">Carregando...</p>}
      {error && <p className="text-red-600">{error}</p>}
      {!loading && items.length === 0 && <p className="text-zinc-500">Nada cadastrado ainda.</p>}
      <ul className="divide-y divide-zinc-200 border rounded-lg border-gray-300">
        {items.map((item) => {
          const { title, subtitle } = describe(item);
          return (
            <li key={item._id} className="flex items-center justify-between gap-4 p-4">
              <div className="min-w-0">
                <p className="font-medium truncate">{title}</p>
                {subtitle && <p className="text-sm text-zinc-500 truncate">{subtitle}</p>}
              </div>
              <div className="flex gap-2 shrink-0">
                <button onClick={() => setEditing(item)} className="btn-secondary" aria-label="Editar">
                  <Pencil size={16} />
                </button>
                <button onClick={() => handleDelete(item)} className="btn-secondary text-red-600" aria-label="Excluir">
                  <Trash2 size={16} />
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
