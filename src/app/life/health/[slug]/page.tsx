import Link from "next/link";
import { notFound } from "next/navigation";
import { getPosts } from "@/lib/posts";
import PostBody from "../../../today/PostBody";

export function generateStaticParams() {
  return getPosts("health").map((p) => ({ slug: p.slug }));
}

export default async function HealthDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const decoded = decodeURIComponent(slug);
  const post = getPosts("health").find((p) => p.slug === decoded);
  if (!post) notFound();

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-gradient-to-br from-teal-500 to-emerald-600 text-white px-4 py-4">
        <div className="max-w-2xl mx-auto">
          <Link
            href="/life/health"
            className="inline-flex items-center gap-2 rounded-2xl bg-white px-6 py-3.5 text-lg font-extrabold text-emerald-700 shadow-md hover:bg-emerald-50 transition-colors"
          >
            ← 건강
          </Link>
          <div className="mt-4 flex items-center gap-2 text-xs">
            <span className="rounded-full bg-white/20 px-2.5 py-0.5 font-bold">
              {post.emoji} {post.topic}
            </span>
            <span className="text-emerald-100">{post.date}</span>
          </div>
          <h1 className="mt-2 text-2xl font-extrabold leading-snug">{post.title}</h1>
        </div>
      </header>

      <main className="max-w-2xl mx-auto px-4 py-6">
        <div className="bg-white rounded-2xl border border-gray-200 p-5">
          <PostBody body={post.body} />
        </div>
      </main>
    </div>
  );
}
