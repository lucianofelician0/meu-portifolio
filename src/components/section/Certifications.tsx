import { Award, ExternalLink, GraduationCap } from "lucide-react";
import { Titlies } from "@/components/ui/Titlies";
import { SectionStatus } from "@/components/ui/SectionStatus";
import { useApi } from "@/lib/useApi";
import { formatDate, type Certification } from "@/lib/types";

const columns = [
  { kind: "certification", title: "Certificações", Icon: Award },
  { kind: "education", title: "Formação", Icon: GraduationCap },
] as const;

export const Certifications = () => {
  const { data: items = [], loading, error } = useApi<Certification[]>("/certifications");

  return (
    <section id="certifications" className="w-full sm:w-[80%] mx-auto mb-4 pt-8">
      <div className="pb-6">
        <Titlies info="Certificações e Formação" />
      </div>

      <SectionStatus loading={loading} error={error} isEmpty={items.length === 0} emptyText="Em breve." />

      {items.length > 0 && (
        <div className="grid gap-6 md:grid-cols-2 mx-4">
          {columns.map(({ kind, title, Icon }) => {
            const list = items.filter((c) => c.kind === kind);
            if (list.length === 0) return null;
            return (
              <div key={kind} className="border rounded-lg border-gray-300 p-6">
                <h2 className="font-bold text-3xl text-center pb-4">{title}</h2>
                <ul className="space-y-5">
                  {list.map((item) => (
                    <li key={item._id} className="flex gap-3">
                      <span className="size-10 shrink-0 rounded-full bg-zinc-100 flex items-center justify-center">
                        <Icon size={18} className="text-zinc-700" />
                      </span>
                      <div>
                        <h3 className="font-bold">{item.title}</h3>
                        <p className="text-sm text-zinc-500">
                          {item.issuer}
                          {item.issueDate && ` · ${formatDate(item.issueDate)}`}
                        </p>
                        {item.description && <p className="font-light mt-1">{item.description}</p>}
                        {item.credentialUrl && (
                          <a
                            href={item.credentialUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-1 text-sm font-medium mt-1 hover:text-zinc-500"
                          >
                            Ver credencial <ExternalLink size={12} />
                          </a>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      )}
    </section>
  );
};
