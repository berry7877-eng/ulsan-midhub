import Link from "next/link";
import BenefitsExplorer from "./BenefitsExplorer";

export const metadata = {
  title: "혜택 · 정책 · 교육 정보 — 울산 미드허브",
  description:
    "울산 실업자·중장년이 받을 수 있는 실업급여·국민취업지원·재취업/생계지원과 교육 과정을, AI 진단으로 내게 맞게 확인하세요.",
};

const steps = [
  { badge: "재취업이 목표라면", desc: "고용24(워크넷)에서 구직 등록하고 실업급여 확인하기" },
  { badge: "생계지원이 필요하면", desc: "국민취업지원제도 자격·구직촉진수당 알아보기" },
  { badge: "배우고 자격증 따려면", desc: "폴리텍·평생교육진흥원 과정과 내일배움카드 활용하기" },
];

export default function Benefits() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <header className="bg-emerald-600 text-white px-4 py-5">
        <div className="max-w-2xl mx-auto">
          <Link href="/" className="text-sm text-emerald-100 hover:text-white">
            ← 홈으로
          </Link>
          <h1 className="mt-2 text-2xl font-extrabold">🎁 받을 수 있는 혜택</h1>
          <p className="mt-1 text-sm text-emerald-100">
            울산 실업자·중장년을 위한 정책 · 지원금 · 교육을 AI로 내게 맞게 확인하세요
          </p>
        </div>
      </header>

      <main className="max-w-2xl mx-auto px-4 py-6 pb-12">
        <BenefitsExplorer />

        {/* 추천 순서 */}
        <section className="mt-9">
          <h2 className="text-xl font-extrabold text-gray-900 mb-3">✅ 추천 순서</h2>
          <ol className="space-y-3">
            {steps.map((s, i) => (
              <li
                key={s.badge}
                className="flex items-start gap-3 bg-white rounded-2xl border border-gray-200 p-5"
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-emerald-600 text-base font-bold text-white">
                  {i + 1}
                </span>
                <div>
                  <p className="text-[15px] font-bold text-gray-900">{s.badge}</p>
                  <p className="mt-0.5 text-[15px] text-gray-600">{s.desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <div className="mt-8 rounded-2xl bg-emerald-50 border border-emerald-200 p-5 text-center">
          <p className="text-[15px] font-medium text-emerald-900 leading-relaxed">
            거주하시는 구(남구·중구·동구·북구·울주군)를 모임에서 알려주시면,
            해당 구청·고용센터 공고와 접수창구를 더 좁혀 찾아드려요.
          </p>
          <p className="mt-1.5 text-sm text-emerald-700">모임에서 편하게 물어보세요 🙂</p>
        </div>
      </main>
    </div>
  );
}
