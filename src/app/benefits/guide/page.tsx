import Link from "next/link";

export const metadata = {
  title: "추천 순서 — 울산 미드허브",
  description: "재취업·생계·배움, 상황별로 뭐부터 하면 좋을지 안내합니다.",
};

const steps = [
  {
    badge: "재취업이 목표라면",
    desc: "고용24(워크넷)에서 구직 등록하고 실업급여를 확인하세요.",
    href: "/benefits/list?track=job",
    cta: "재취업·생계 혜택 보기",
  },
  {
    badge: "생계지원이 필요하면",
    desc: "국민취업지원제도로 구직촉진수당·자격을 알아보세요.",
    href: "/benefits/list?track=job",
    cta: "재취업·생계 혜택 보기",
  },
  {
    badge: "배우고 자격증 따려면",
    desc: "폴리텍·평생교육진흥원 과정과 내일배움카드를 활용하세요.",
    href: "/benefits/list?track=learn",
    cta: "배움 혜택 보기",
  },
];

export default function GuidePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-emerald-600 text-white px-4 py-4">
        <div className="max-w-2xl mx-auto">
          <Link
            href="/benefits"
            className="inline-flex items-center gap-2 rounded-2xl bg-white px-6 py-3.5 text-lg font-extrabold text-emerald-700 shadow-md hover:bg-emerald-50 transition-colors"
          >
            ← 혜택 홈
          </Link>
          <h1 className="mt-4 text-2xl font-extrabold">✅ 추천 순서</h1>
          <p className="mt-1 text-sm text-emerald-100">
            상황에 맞게 뭐부터 하면 좋을지 골라드려요
          </p>
        </div>
      </header>

      <main className="max-w-2xl mx-auto px-4 py-6 space-y-3">
        {steps.map((s, i) => (
          <div key={i} className="bg-white rounded-2xl border border-gray-200 p-5">
            <div className="flex items-start gap-3">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-emerald-600 text-base font-bold text-white">
                {i + 1}
              </span>
              <div>
                <p className="text-[15px] font-bold text-gray-900">{s.badge}</p>
                <p className="mt-0.5 text-[15px] text-gray-600">{s.desc}</p>
                <Link
                  href={s.href}
                  className="mt-3 inline-block rounded-lg bg-emerald-600 px-4 py-2 text-sm font-semibold text-white hover:bg-emerald-700"
                >
                  {s.cta} →
                </Link>
              </div>
            </div>
          </div>
        ))}

        <div className="mt-4 rounded-2xl bg-emerald-50 border border-emerald-200 p-5 text-center">
          <p className="text-[15px] font-medium text-emerald-900 leading-relaxed">
            거주하시는 구(남구·중구·동구·북구·울주군)를 모임에서 알려주시면,
            해당 구청·고용센터 공고와 접수창구를 더 좁혀 찾아드려요.
          </p>
        </div>
      </main>
    </div>
  );
}
