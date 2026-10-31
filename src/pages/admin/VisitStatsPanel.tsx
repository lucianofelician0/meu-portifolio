import { useApi } from "@/lib/useApi";
import type { VisitStats } from "@/lib/types";

export const VisitStatsPanel = () => {
  const { data, loading, error } = useApi<VisitStats>("/visits/stats");

  if (loading) return <p className="text-zinc-500">Carregando...</p>;
  if (error || !data) return <p className="text-red-600">{error}</p>;

  // Preenche os dias sem visitas para o gráfico ficar contínuo
  const counts = new Map(data.last30Days.map((d) => [d.day, d.count]));
  const days = Array.from({ length: 30 }, (_, i) => {
    const date = new Date();
    date.setDate(date.getDate() - 29 + i);
    const day = date.toISOString().slice(0, 10);
    return { day, count: counts.get(day) ?? 0 };
  });
  const max = Math.max(1, ...days.map((d) => d.count));
  const last30 = days.reduce((sum, d) => sum + d.count, 0);

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-3 gap-2 sm:gap-4">
        {[
          { label: "Hoje", value: data.today },
          { label: "Últimos 30 dias", value: last30 },
          { label: "Total", value: data.total },
        ].map((stat) => (
          <div key={stat.label} className="border rounded-lg border-gray-300 p-3 sm:p-4">
            <p className="text-xs sm:text-sm text-zinc-500">{stat.label}</p>
            <p className="text-2xl sm:text-3xl font-bold tabular-nums">{stat.value}</p>
          </div>
        ))}
      </div>

      <div className="border rounded-lg border-gray-300 p-4">
        <p className="text-sm text-zinc-500 mb-4">Visitas por dia (últimos 30 dias)</p>
        <div className="flex items-end gap-1 h-40">
          {days.map((d) => (
            <div
              key={d.day}
              title={`${d.day}: ${d.count}`}
              className="flex-1 bg-zinc-800 rounded-t-sm min-h-px"
              style={{ height: `${(d.count / max) * 100}%` }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
