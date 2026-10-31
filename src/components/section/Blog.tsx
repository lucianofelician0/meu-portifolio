import { Link } from "react-router";
import { ArrowRight } from "lucide-react";
import { Titlies } from "@/components/ui/Titlies";
import { SectionStatus } from "@/components/ui/SectionStatus";
import { PostCard } from "@/components/ui/PostCard";
import { useApi } from "@/lib/useApi";
import type { Post } from "@/lib/types";

// Últimos posts na home; a lista completa fica em /blog
export const Blog = () => {
  const { data: posts = [], loading, error } = useApi<Post[]>("/posts?limit=3");

  return (
    <section id="blog" className="w-full sm:w-[80%] mx-auto mb-4 pt-8">
      <div className="pb-6">
        <Titlies info="Últimos Artigos" />
      </div>

      <SectionStatus loading={loading} error={error} isEmpty={posts.length === 0} emptyText="Os primeiros artigos chegam em breve." />

      {posts.length > 0 && (
        <>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mx-4">
            {posts.map((post) => (
              <PostCard key={post._id} post={post} />
            ))}
          </div>
          <div className="flex justify-center mt-6">
            <Link to="/blog" className="inline-flex items-center gap-2 text-sm font-medium hover:text-zinc-500">
              Ver todos os artigos <ArrowRight size={14} />
            </Link>
          </div>
        </>
      )}
    </section>
  );
};
