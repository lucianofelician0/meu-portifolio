// Em desenvolvimento o Vite faz proxy de /api para o backend (vite.config.ts).
// Em produção defina VITE_API_URL com a URL do backend (ex.: https://api.meusite.com).
const BASE_URL = import.meta.env.VITE_API_URL ?? "";
const TOKEN_KEY = "admin_token";

export const authToken = {
  get: () => localStorage.getItem(TOKEN_KEY),
  set: (token: string) => localStorage.setItem(TOKEN_KEY, token),
  clear: () => localStorage.removeItem(TOKEN_KEY),
};

export class ApiError extends Error {
  status: number;
  constructor(status: number, message: string) {
    super(message);
    this.status = status;
  }
}

interface ApiOptions extends RequestInit {
  json?: unknown;
}

export async function api<T>(path: string, { json, ...init }: ApiOptions = {}): Promise<T> {
  const headers = new Headers(init.headers);
  const token = authToken.get();
  if (token) headers.set("Authorization", `Bearer ${token}`);
  if (json !== undefined) headers.set("Content-Type", "application/json");

  const res = await fetch(`${BASE_URL}/api${path}`, {
    ...init,
    headers,
    body: json !== undefined ? JSON.stringify(json) : init.body,
  });

  if (res.status === 204) return undefined as T;
  const data = await res.json().catch(() => ({}));
  if (!res.ok) {
    if (res.status === 401) authToken.clear();
    throw new ApiError(res.status, data.error ?? `Erro ${res.status}`);
  }
  return data as T;
}
