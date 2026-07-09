import Link from "next/link";
import { getPosts } from "@/lib/posts";

export const metadata = {
  title: "건강 — 울산 미드허브",
  description: "중장년 건강을 지키는 쉬운 정보. 키워드 카드를 누르면 자세히 열려요. 매일 업데이트.",
};

const COLORS = [
  "from-teal-500 to-emerald-600",
  "from-emerald-500 to-green-700",
  "from-cyan-500 to-teal-700",
  "from-green-500 to-emerald-700",
];

export default function HealthPage() {
  const posts = getPosts("health");

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-gradient-to-br from-teal-500 to-emerald-600 text-white px-4 py-4">
        <div className="max-w-2xl mx-auto">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-2xl bg-white px-6 py-3.5 text-lg font-extrabold text-emerald-700 shadow-md hover:bg-emerald-50 transition-colors"
          >
            🏠 홈으로
          </Link>
          <h1 className="mt-4 text-2xl font-extrabold">건강</h1>
          <p className="mt-1 text-sm text-emerald-50">
            키워드를 누르면 자세히 열려요 · 매일 새로워집니다
          </p>
        </div>
      </header>

      <main className="max-w-2xl mx-auto px-4 py-6">
        {posts.length === 0 ? (
          <p className="text-center text-gray-500 py-10">곧 첫 정보가 올라옵니다 🙂</p>
        ) : (
          <div className="grid grid-cols-2 gap-4">
            {posts.map((p, i) => (
              <Link
                key={p.slug}
                href={`/life/health/${p.slug}`}
                className={`flex flex-col min-h-[160px] rounded-3xl p-5 text-white shadow-lg ring-1 ring-black/5 bg-gradient-to-br ${COLORS[i % COLORS.length]} hover:brightness-110 transition`}
              >
                <span className="text-4xl">{p.emoji}</span>
                <h2 className="mt-auto text-xl font-extrabold tracking-tight leading-tight">
                  {p.topic}
                </h2>
                <p className="mt-1 text-[13px] font-medium leading-snug text-white/85 line-clamp-2">
                  {p.title}
                </p>
              </Link>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
