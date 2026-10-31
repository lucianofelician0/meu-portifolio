import { PageHeader } from "@/components/PageHeader";
import { Titlies } from "@/components/ui/Titlies";
import { SectionStatus } from "@/components/ui/SectionStatus";
import { PostCard } from "@/components/ui/PostCard";
import { useApi } from "@/lib/useApi";
import type { Post } from "@/lib/types";

export default function BlogListPage() {
  const { data: posts = [], loading, error } = useApi<Post[]>("/posts");

  return (
    <div className="min-h-screen">
      <PageHeader />
      <main className="w-full sm:w-[80%] mx-auto py-10">
        <div className="pb-8">
          <Titlies info="Artigos" />
        </div>
        <SectionStatus loading={loading} error={error} isEmpty={posts.length === 0} emptyText="Ainda não há artigos." />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mx-4">
          {posts.map((post) => (
            <PostCard key={post._id} post={post} />
          ))}
        </div>
      </main>
    </div>
  );
}
