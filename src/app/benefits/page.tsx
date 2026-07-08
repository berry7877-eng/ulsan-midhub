import Link from "next/link";
import BenefitsExplorer from "./BenefitsExplorer";

export const metadata = {
  title: "혜택 · 정책 · 교육 정보 — 울산 미드허브",
  description:
    "울산 실업자·중장년이 받을 수 있는 실업급여·국민취업지원·재취업/생계지원과 교육 과정을, AI 진단으로 내게 맞게 확인하세요.",
};

const channels = [
  {
    icon: "🏢",
    title: "가까운 고용복지+센터 (고용센터)",
    desc: "실업급여·구직지원 서비스 신청·문의는 여기서. 방문 또는 워크넷 이용.",
    url: "https://www.work.go.kr/ulsan/ctrIntro/ctrWork/ctrWorkDetail.do?detCode=1&menuCd=40220&subMenuCd=40207",
  },
  {
    icon: "🧾",
    title: "울산 고용복지센터 안내",
    desc: "국민취업지원제도 등 취업지원 서비스 정보를 확인할 수 있어요.",
    url: "http://210.95.199.70/ulsan/main.do",
  },
  {
    icon: "🏙️",
    title: "울산시 일자리 포털",
    desc: "지역별 정책·공모·지원사업과 공공근로 공고를 주기적으로 확인하세요.",
    url: "https://www.ulsan.go.kr/u/economy/contents.ulsan?mId=001002003000000000",
  },
];

const steps = [
  { badge: "재취업이 목표라면", desc: "중장년내일센터 상담부터 받기" },
  { badge: "채용 연계가 필요하면", desc: "울산시 일자리 포털·경제일자리진흥원 공고 확인하기" },
  { badge: "직무를 바꾸고 싶다면", desc: "폴리텍·평생교육기관 재훈련 과정 찾기" },
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

        {/* 신청 · 확인 경로 */}
        <section className="mt-9">
          <h2 className="text-xl font-extrabold text-gray-900 mb-3">📞 신청 · 확인 경로</h2>
          <div className="space-y-3">
            {channels.map((c) => (
              <a
                key={c.title}
                href={c.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-white rounded-2xl border border-gray-200 p-5 hover:border-emerald-400 hover:shadow-sm transition"
              >
                <div className="flex items-start gap-3">
                  <span className="text-3xl leading-none">{c.icon}</span>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">
                      {c.title} <span className="text-emerald-600">→</span>
                    </h3>
                    <p className="mt-1.5 text-[15px] leading-relaxed text-gray-600">
                      {c.desc}
                    </p>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </section>

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
