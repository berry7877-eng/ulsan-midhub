import Link from "next/link";

export const metadata = {
  title: "오늘 — 울산 미드허브",
  description: "사주, 일상 즐기기와 여행, 배워보기, 생활편의까지. 가볍게 쉬어가는 공간.",
};

const tiles = [
  {
    href: "/life/saju",
    icon: "🔮",
    title: "사주",
    sub: "타고난 기운·성향 풀어보기",
    from: "from-violet-600",
    to: "to-purple-700",
    subColor: "text-violet-100",
  },
  {
    href: "/life/enjoy",
    icon: "🚶",
    title: "일상 즐기기 & 여행",
    sub: "울산 나들이·소소한 즐거움",
    from: "from-rose-500",
    to: "to-orange-500",
    subColor: "text-rose-50",
  },
  {
    href: "/life/study",
    icon: "📖",
    title: "배워보기",
    sub: "취미·평생교육·AI 첫걸음",
    from: "from-sky-500",
    to: "to-blue-700",
    subColor: "text-sky-100",
  },
  {
    href: "/life/tips",
    icon: "🛎️",
    title: "생활편의",
    sub: "알아두면 편한 앱·꿀팁",
    from: "from-teal-500",
    to: "to-emerald-700",
    subColor: "text-teal-50",
  },
];

export default function TodayHub() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-gradient-to-br from-orange-500 to-amber-500 text-white px-4 py-4">
        <div className="max-w-2xl mx-auto">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-2xl bg-white px-6 py-3.5 text-lg font-extrabold text-orange-500 shadow-md hover:bg-orange-50 transition-colors"
          >
            🏠 홈으로
          </Link>
          <h1 className="mt-4 text-2xl font-extrabold">오늘</h1>
          <p className="mt-1 text-sm text-orange-50">
            일도 잠시 내려놓고, 재미와 소소한 것들로 쉬어가요.
          </p>
        </div>
      </header>

      <main className="max-w-2xl mx-auto px-4 py-6">
        <div className="grid grid-cols-2 gap-4">
          {tiles.map((t) => (
            <Link
              key={t.title}
              href={t.href}
              className={`flex flex-col min-h-[170px] rounded-3xl p-5 text-white shadow-lg ring-1 ring-black/5 bg-gradient-to-br ${t.from} ${t.to} hover:brightness-110 transition`}
            >
              <span className="text-4xl">{t.icon}</span>
              <h2 className="mt-auto text-xl font-extrabold tracking-tight leading-tight">
                {t.title}
              </h2>
              <p className={`mt-1 text-sm font-medium leading-snug ${t.subColor}`}>{t.sub} →</p>
            </Link>
          ))}
        </div>
        <p className="mt-6 text-center text-xs text-gray-400">
          사주는 재미·참고용이에요 🙂
        </p>
      </main>
    </div>
  );
}
