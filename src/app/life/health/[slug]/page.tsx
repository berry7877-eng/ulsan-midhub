import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getPosts } from "@/lib/posts";
import PostBody from "../../../today/PostBody";

export function generateStaticParams() {
  return getPosts("health").map((p) => ({ slug: p.slug }));
}

// 검색 결과·카카오톡 공유에 뜨는 제목과 설명.
// 이게 없으면 사이트 공통 제목만 나와서, 21편이 전부 같은 글처럼 보인다.
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPosts("health").find((p) => p.slug === decodeURIComponent(slug));
  if (!post) return { title: "건강정보 — 울산 미드허브" };

  // 본문 앞부분에서 설명을 뽑는다. 마크다운 기호·머리말은 걷어내고 사람이 읽는 문장만.
  const summary =
    post.body
      .replace(/^#{1,6}\s+/gm, "")
      .replace(/\*\*|__|[*_`>]/g, "")
      .replace(/^\s*\d+\.\s*/gm, "")
      .replace(/\s+/g, " ")
      .trim()
      .slice(0, 155) || `울산 중장년을 위한 ${post.topic} 정보`;

  const title = `${post.title} — 울산 미드허브`;
  const url = `https://ulsan-midhub.vercel.app/life/health/${encodeURIComponent(post.slug)}`;

  return {
    title,
    description: summary,
    // 검색어로 잡히도록 주제 + 지역 + 대상을 함께 둔다
    keywords: [post.topic, "울산", "중장년", "40대 건강", "50대 건강", "60대 건강", "건강정보"]
      .filter(Boolean),
    alternates: { canonical: url },
    openGraph: {
      title,
      description: summary,
      url,
      siteName: "울산 미드허브",
      locale: "ko_KR",
      type: "article",
      publishedTime: post.date || undefined,
    },
  };
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
