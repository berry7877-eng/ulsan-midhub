import Link from "next/link";
import { getPosts } from "@/lib/posts";
import PostBody from "../../today/PostBody";

export const metadata = {
  title: "건강정보 — 울산 미드허브",
  description: "중장년 건강을 지키는 쉬운 정보를 매일 한 조각씩. 근력·수면·관절·식습관까지.",
};

export default function HealthPage() {
  const posts = getPosts("health");

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-gradient-to-br from-teal-500 to-emerald-600 text-white px-4 py-4">
        <div className="max-w-2xl mx-auto">
          <Link
            href="/life"
            className="inline-flex items-center gap-2 rounded-2xl bg-white px-6 py-3.5 text-lg font-extrabold text-emerald-700 shadow-md hover:bg-emerald-50 transition-colors"
          >
            ← 즐기기 홈
          </Link>
          <h1 className="mt-4 text-2xl font-extrabold">💪 건강정보</h1>
          <p className="mt-1 text-sm text-emerald-50">
            매일 새로워지는, 몸이 편해지는 작은 습관들
          </p>
        </div>
      </header>

      <main className="max-w-2xl mx-auto px-4 py-6 space-y-4">
        {posts.length === 0 ? (
          <p className="text-center text-gray-500 py-10">곧 첫 정보가 올라옵니다 🙂</p>
        ) : (
          posts.map((p, i) => (
            <article key={p.slug} className="bg-white rounded-2xl border border-gray-200 p-5">
              <div className="flex items-center gap-2 text-xs">
                <span className="rounded-full bg-emerald-100 px-2.5 py-0.5 font-bold text-emerald-700">
                  {p.emoji} {p.topic}
                </span>
                {i === 0 && (
                  <span className="rounded-full bg-red-100 px-2 py-0.5 font-bold text-red-600">
                    최신
                  </span>
                )}
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
