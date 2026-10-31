interface SectionStatusProps {
  loading: boolean;
  error?: string;
  isEmpty: boolean;
  emptyText: string;
}

// Mostra o estado de carregamento / erro / vazio das seções que vêm da API
export const SectionStatus = ({ loading, error, isEmpty, emptyText }: SectionStatusProps) => {
  if (loading) {
    return (
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 mx-4">
        {[1, 2, 3].map((i) => (
          <div key={i} className="h-48 rounded-lg bg-zinc-100 animate-pulse" />
        ))}
      </div>
    );
  }
  if (error) {
    return <p className="text-center font-light text-zinc-500">Não foi possível carregar o conteúdo neste momento.</p>;
  }
  if (isEmpty) {
    return <p className="text-center font-light text-zinc-500">{emptyText}</p>;
  }
  return null;
};
