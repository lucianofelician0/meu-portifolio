import { Link } from "react-router";
import { formatDate, type Post } from "@/lib/types";

export const PostCard = ({ post }: { post: Post }) => (
  <Link
    to={`/blog/${post.slug}`}
    className="flex flex-col border rounded-lg border-gray-300 overflow-hidden hover:shadow-lg transition-shadow"
  >
    {post.coverImage && <img src={post.coverImage} alt={post.title} className="h-40 w-full object-cover" />}
    <div className="p-5 flex flex-col flex-1">
      <p className="text-xs text-zinc-500">{formatDate(post.publishedAt)}</p>
      <h3 className="font-bold text-lg mt-1">{post.title}</h3>
      <p className="font-light text-zinc-600 mt-2 flex-1">{post.excerpt}</p>
      <div className="flex flex-wrap gap-1.5 mt-4">
        {post.tags.map((tag) => (
          <span key={tag} className="text-xs bg-zinc-100 text-zinc-700 px-2 py-1 rounded-full">
            #{tag}
          </span>
        ))}
      </div>
    </div>
  </Link>
);
