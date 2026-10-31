import { useParams } from "react-router";
import Markdown from "react-markdown";
import { PageHeader } from "@/components/PageHeader";
import { useApi } from "@/lib/useApi";
import { formatDate, type Post } from "@/lib/types";

export default function BlogPostPage() {
  const { slug } = useParams();
  const { data: post, loading, error } = useApi<Post>(`/posts/${slug}`);

  return (
    <div className="min-h-screen">
      <PageHeader backTo="/blog" backLabel="Todos os artigos" />
      <main className="max-w-3xl mx-auto px-4 py-10">
        {loading && <div className="h-64 rounded-lg bg-zinc-100 animate-pulse" />}
        {error && <p className="text-center text-zinc-500">Artigo não encontrado.</p>}
        {post && (
          <article>
            {post.coverImage && (
              <img src={post.coverImage} alt={post.title} className="w-full max-h-96 object-cover rounded-lg mb-8" />
            )}
            <p className="text-sm text-zinc-500">{formatDate(post.publishedAt)}</p>
            <h1 className="text-3xl sm:text-4xl font-bold mt-2 wrap-break-word">{post.title}</h1>
            <div className="flex flex-wrap gap-1.5 mt-4 mb-8">
              {post.tags.map((tag) => (
                <span key={tag} className="text-xs bg-zinc-100 text-zinc-700 px-2 py-1 rounded-full">
                  #{tag}
                </span>
              ))}
            </div>
            {/* overflow-wrap: anywhere evita que URLs longas causem scroll horizontal no telemóvel */}
            <div className="prose prose-zinc max-w-none [overflow-wrap:anywhere]">
              <Markdown>{post.content}</Markdown>
            </div>
          </article>
        )}
      </main>
    </div>
  );
}
