import Link from "next/link";

export const metadata = {
  title: "오늘 — 울산 미드허브",
  description: "재미로 보는 사주와, 오늘 해볼 만한 추천까지. 가볍게 쉬어가는 공간.",
};

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
          <h1 className="mt-4 text-2xl font-extrabold">☀️ 오늘</h1>
          <p className="mt-1 text-sm text-orange-50">
            일도 잠시 내려놓고, 재미와 소소한 추천으로 쉬어가요.
          </p>
        </div>
      </header>

      <main className="max-w-2xl mx-auto px-4 py-6 space-y-4">
        <Link
          href="/life/saju"
          className="block rounded-3xl p-7 text-white shadow-lg ring-1 ring-black/5 bg-gradient-to-br from-violet-600 to-purple-700 hover:brightness-110 transition"
        >
          <div className="flex items-center gap-4">
            <span className="text-6xl">🔮</span>
            <div>
              <h2 className="text-2xl font-extrabold">오늘의 사주</h2>
              <p className="mt-1 text-[15px] text-violet-100">
                타고난 기운·성향, 강점과 조언까지 →
              </p>
            </div>
          </div>
        </Link>

        <Link
          href="/life/recommend"
          className="block rounded-3xl p-7 text-white shadow-lg ring-1 ring-black/5 bg-gradient-to-br from-rose-500 to-orange-500 hover:brightness-110 transition"
        >
          <div className="flex items-center gap-4">
            <span className="text-6xl">⭐</span>
            <div>
              <h2 className="text-2xl font-extrabold">오늘의 추천</h2>
              <p className="mt-1 text-[15px] text-rose-50">
                오늘 해볼 만한 소소한 것들 →
              </p>
            </div>
          </div>
        </Link>

        <p className="pt-2 text-center text-xs text-gray-400">
          사주는 전통 명리 방식으로 계산하지만 재미·참고용이에요 🙂
        </p>
      </main>
    </div>
  );
}
