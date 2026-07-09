import Link from "next/link";

export const metadata = {
  title: "두번째 인생 즐기기 — 울산 미드허브",
  description: "일도 스트레스도 잠시 내려놓고. 매일 건강정보와 사주로 가볍게 리프레시하세요.",
};

export default function LifeHub() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-gradient-to-br from-rose-400 to-orange-400 text-white px-4 py-4">
        <div className="max-w-2xl mx-auto">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-2xl bg-white px-6 py-3.5 text-lg font-extrabold text-orange-500 shadow-md hover:bg-orange-50 transition-colors"
          >
            🏠 홈으로
          </Link>
          <h1 className="mt-4 text-2xl font-extrabold">🌿 두번째 인생 즐기기</h1>
          <p className="mt-1 text-sm text-orange-50">
            일도 스트레스도 잠시 내려놓고, 가볍게 쉬어가요.
          </p>
        </div>
      </header>

      <main className="max-w-2xl mx-auto px-4 py-6 space-y-4">
        {/* 건강정보 */}
        <Link
          href="/life/health"
          className="block rounded-3xl p-7 text-white shadow-lg ring-1 ring-black/5 bg-gradient-to-br from-teal-500 to-emerald-600 hover:brightness-110 transition"
        >
          <div className="flex items-center gap-4">
            <span className="text-6xl">💪</span>
            <div>
              <h2 className="text-2xl font-extrabold">건강정보</h2>
              <p className="mt-1 text-[15px] text-emerald-50">
                매일 새로워지는, 몸이 편해지는 작은 습관 →
              </p>
            </div>
          </div>
        </Link>

        {/* 사주 */}
        <Link
          href="/life/saju"
          className="block rounded-3xl p-7 text-white shadow-lg ring-1 ring-black/5 bg-gradient-to-br from-violet-600 to-purple-700 hover:brightness-110 transition"
        >
          <div className="flex items-center gap-4">
            <span className="text-6xl">🔮</span>
            <div>
              <h2 className="text-2xl font-extrabold">오늘의 사주</h2>
              <p className="mt-1 text-[15px] text-violet-100">
                생년월일로 타고난 기운·성향 풀어보기 →
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
