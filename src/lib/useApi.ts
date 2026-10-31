import { useEffect, useState } from "react";
import { api } from "./api";

interface ApiState<T> {
  key?: string; // qual requisição gerou este resultado
  data?: T;
  error?: string;
}

// Busca `path` na API e expõe { data, error, loading, reload }
export function useApi<T>(path: string) {
  const [reloadKey, setReloadKey] = useState(0);
  const [state, setState] = useState<ApiState<T>>({});
  const key = `${path}#${reloadKey}`;

  useEffect(() => {
    let cancelled = false;
    api<T>(path)
      .then((data) => !cancelled && setState({ key, data }))
      .catch((e: Error) => !cancelled && setState({ key, error: e.message }));
    return () => {
      cancelled = true;
    };
  }, [path, key]);

  // Enquanto carrega, mantém os dados anteriores (evita "piscar" ao recarregar)
  const loading = state.key !== key;
  return {
    data: state.data,
    error: loading ? undefined : state.error,
    loading,
    reload: () => setReloadKey((k) => k + 1),
  };
}
