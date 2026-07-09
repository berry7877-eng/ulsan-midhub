import Link from "next/link";

export const metadata = {
  title: "미래 — 울산 미드허브",
  description: "교육·취업·정책까지, 중장년의 다음 걸음을 준비하는 곳.",
};

const tiles = [
  {
    href: "/benefits/list?track=learn",
    icon: "🎓",
    title: "교육",
    sub: "폴리텍·평생교육·내일배움카드",
    from: "from-indigo-500",
    to: "to-violet-700",
    subColor: "text-indigo-100",
  },
  {
    href: "/jobs",
    icon: "💼",
    title: "취업",
    sub: "공공·민간·워크넷 + 이웃 구인구직",
    from: "from-sky-500",
    to: "to-blue-700",
    subColor: "text-sky-100",
  },
  {
    href: "/benefits",
    icon: "📋",
    title: "정책 · 혜택",
    sub: "실업급여·국민취업지원 등 AI 진단",
    from: "from-emerald-500",
    to: "to-teal-700",
    subColor: "text-emerald-50",
  },
];

export default function FutureHub() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-gradient-to-br from-sky-500 to-blue-700 text-white px-4 py-4">
        <div className="max-w-2xl mx-auto">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-2xl bg-white px-6 py-3.5 text-lg font-extrabold text-blue-700 shadow-md hover:bg-blue-50 transition-colors"
          >
            🏠 홈으로
          </Link>
          <h1 className="mt-4 text-2xl font-extrabold">🧭 미래</h1>
          <p className="mt-1 text-sm text-sky-100">
            배우고, 일하고, 지원받고 — 다음 걸음을 준비해요.
          </p>
        </div>
      </header>

      <main className="max-w-2xl mx-auto px-4 py-6 space-y-4">
        {tiles.map((t) => (
          <Link
            key={t.title}
            href={t.href}
            className={`block rounded-3xl p-7 text-white shadow-lg ring-1 ring-black/5 bg-gradient-to-br ${t.from} ${t.to} hover:brightness-110 transition`}
          >
            <div className="flex items-center gap-4">
              <span className="text-6xl">{t.icon}</span>
              <div>
                <h2 className="text-2xl font-extrabold">{t.title}</h2>
                <p className={`mt-1 text-[15px] ${t.subColor}`}>{t.sub} →</p>
              </div>
            </div>
          </Link>
        ))}
      </main>
    </div>
  );
}
