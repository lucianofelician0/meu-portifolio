import { useState } from "react";
import { ExternalLink, Star } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { Titlies } from "@/components/ui/Titlies";
import { SectionStatus } from "@/components/ui/SectionStatus";
import { useApi } from "@/lib/useApi";
import type { Project } from "@/lib/types";

export const Projects = () => {
  const { data: projects = [], loading, error } = useApi<Project[]>("/projects");
  const [filter, setFilter] = useState("Todos");

  const techs = ["Todos", ...new Set(projects.flatMap((p) => p.techStack))];
  const visible = filter === "Todos" ? projects : projects.filter((p) => p.techStack.includes(filter));

  return (
    <section id="projects" className="w-full sm:w-[80%] mx-auto mb-4 pt-8">
      <div className="pb-6">
        <Titlies info="Projetos" />
      </div>

      <SectionStatus
        loading={loading}
        error={error}
        isEmpty={projects.length === 0}
        emptyText="Projetos em breve."
      />

      {projects.length > 0 && (
        <>
          {/* FILTRO POR TECNOLOGIA */}
          <div className="flex flex-wrap justify-center gap-2 mb-6 mx-4">
            {techs.map((tech) => (
              <button
                key={tech}
                onClick={() => setFilter(tech)}
                className={`px-4 py-1.5 rounded-full text-sm cursor-pointer border transition-colors ${filter === tech ? "bg-zinc-900 text-white border-zinc-900" : "border-zinc-200 text-zinc-500 hover:text-zinc-800"}`}
              >
                {tech}
              </button>
            ))}
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mx-4">
            {visible.map((project) => (
              <article
                key={project._id}
                className="flex flex-col border rounded-lg border-gray-300 overflow-hidden hover:shadow-lg transition-shadow"
              >
                {project.image ? (
                  <img src={project.image} alt={project.title} className="h-44 w-full object-cover" />
                ) : (
                  <div className="h-44 w-full bg-linear-to-br from-zinc-900 to-zinc-500 flex items-center justify-center">
                    <span className="font-honk text-2xl sm:text-3xl text-white text-center px-4 line-clamp-2">{project.title}</span>
                  </div>
                )}

                <div className="flex flex-col flex-1 p-5">
                  <div className="flex items-center gap-2">
                    <h3 className="font-bold text-lg">{project.title}</h3>
                    {project.featured && <Star size={16} className="text-amber-500 fill-amber-500" />}
                  </div>
                  <p className="font-light text-zinc-600 mt-2 flex-1">{project.description}</p>

                  <div className="flex flex-wrap gap-1.5 mt-4">
                    {project.techStack.map((tech) => (
                      <span key={tech} className="text-xs bg-zinc-100 text-zinc-700 px-2 py-1 rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4 mt-4 text-sm font-medium">
                    {project.githubUrl && (
                      <a href={project.githubUrl} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 hover:text-zinc-500">
                        <FontAwesomeIcon icon={faGithub} /> Código
                      </a>
                    )}
                    {project.liveUrl && (
                      <a href={project.liveUrl} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 hover:text-zinc-500">
                        <ExternalLink size={14} /> Ver online
                      </a>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </>
      )}
    </section>
  );
};
