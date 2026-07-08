import Link from "next/link";

export const metadata = {
  title: "혜택 · 정책 · 교육 — 울산 미드허브",
  description:
    "AI 혜택 진단, 재취업·생계 지원, 배움, 신청·확인처를 한눈에.",
};

export default function BenefitsHub() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-emerald-600 text-white px-4 py-4">
        <div className="max-w-2xl mx-auto">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-2xl bg-white px-6 py-3.5 text-lg font-extrabold text-emerald-700 shadow-md hover:bg-emerald-50 transition-colors"
          >
            🏠 홈으로
          </Link>
          <h1 className="mt-4 text-2xl font-extrabold">🎁 받을 수 있는 혜택</h1>
          <p className="mt-1 text-sm text-emerald-100">
            울산 실업자·중장년을 위한 정책 · 지원금 · 교육
          </p>
        </div>
      </header>

      <main className="max-w-2xl mx-auto px-4 py-6">
        <div className="grid grid-cols-2 gap-4">
          <Link
            href="/benefits/diagnosis"
            className="flex flex-col min-h-[200px] rounded-3xl p-6 text-white shadow-lg ring-1 ring-black/5 bg-gradient-to-br from-indigo-600 to-emerald-600 hover:brightness-110 transition"
          >
            <span className="text-5xl">🤖</span>
            <h2 className="mt-auto text-2xl font-extrabold tracking-tight leading-tight">
              AI 혜택 진단
            </h2>
            <p className="mt-1.5 text-[15px] font-medium leading-snug text-emerald-50">
              3가지만 고르면 내 혜택 →
            </p>
          </Link>

          <Link
            href="/benefits/list?track=job"
            className="flex flex-col min-h-[200px] rounded-3xl p-6 text-white shadow-lg ring-1 ring-black/5 bg-gradient-to-br from-sky-500 to-blue-700 hover:brightness-110 transition"
          >
            <span className="text-5xl">💼</span>
            <h2 className="mt-auto text-2xl font-extrabold tracking-tight leading-tight">
              재취업 · 생계
            </h2>
            <p className="mt-1.5 text-[15px] font-medium leading-snug text-sky-100">
              실업급여·국민취업지원 등 →
            </p>
          </Link>

          <Link
            href="/benefits/list?track=learn"
            className="flex flex-col min-h-[200px] rounded-3xl p-6 text-white shadow-lg ring-1 ring-black/5 bg-gradient-to-br from-emerald-500 to-teal-700 hover:brightness-110 transition"
          >
            <span className="text-5xl">🎓</span>
            <h2 className="mt-auto text-2xl font-extrabold tracking-tight leading-tight">
              배움
            </h2>
            <p className="mt-1.5 text-[15px] font-medium leading-snug text-emerald-50">
              폴리텍·평생교육·내일배움카드 →
            </p>
          </Link>

          <Link
            href="/benefits/guide"
            className="flex flex-col min-h-[200px] rounded-3xl p-6 text-white shadow-lg ring-1 ring-black/5 bg-gradient-to-br from-amber-500 to-orange-600 hover:brightness-110 transition"
          >
            <span className="text-5xl">✅</span>
            <h2 className="mt-auto text-2xl font-extrabold tracking-tight leading-tight">
              추천 순서
            </h2>
            <p className="mt-1.5 text-[15px] font-medium leading-snug text-amber-50">
              뭐부터 하면 좋을까 →
            </p>
          </Link>
        </div>
      </main>
    </div>
  );
}
