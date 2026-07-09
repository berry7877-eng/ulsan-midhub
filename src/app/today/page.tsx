import Link from "next/link";
import { getPosts } from "@/lib/posts";
import PostBody from "./PostBody";

export const metadata = {
  title: "오늘의 정보 — 울산 미드허브",
  description: "중장년에게 꼭 필요한 AI·건강·미래설계·취업·생활 정보를 매일 한 조각씩.",
};

export default function TodayPage() {
  const posts = getPosts("today");

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-gradient-to-br from-orange-500 to-red-500 text-white px-4 py-4">
        <div className="max-w-2xl mx-auto">
          <Link
            href="/life"
            className="inline-flex items-center gap-2 rounded-2xl bg-white px-6 py-3.5 text-lg font-extrabold text-orange-600 shadow-md hover:bg-orange-50 transition-colors"
          >
            ← 즐기기 홈
          </Link>
          <h1 className="mt-4 text-2xl font-extrabold">📰 오늘의 정보</h1>
          <p className="mt-1 text-sm text-orange-50">
            중장년에게 필요한 정보를 매일 한 조각씩
          </p>
        </div>
      </header>

      <main className="max-w-2xl mx-auto px-4 py-6 space-y-4">
        {posts.length === 0 ? (
          <p className="text-center text-gray-500 py-10">아직 등록된 글이 없어요.</p>
        ) : (
          posts.map((p) => (
            <article key={p.slug} className="bg-white rounded-2xl border border-gray-200 p-5">
              <div className="flex items-center gap-2 text-xs">
                <span className="rounded-full bg-orange-100 px-2.5 py-0.5 font-bold text-orange-700">
                  {p.emoji} {p.topic}
                </span>
                <span className="text-gray-400">{p.date}</span>
              </div>
              <h2 className="mt-2 text-lg font-extrabold text-gray-900 leading-snug">
                {p.title}
              </h2>
              <div className="mt-3">
                <PostBody body={p.body} />
              </div>
            </article>
          ))
        )}
      </main>
    </div>
  );
}
