import Link from "next/link";

export const metadata = {
  title: "혜택 · 정책 · 교육 정보 — 울산 미드허브",
  description:
    "울산 중장년이 받을 수 있는 재취업 지원, 취업지원금, 교육 과정과 신청처를 한눈에.",
};

type Item = { icon: string; title: string; desc: string; tag?: string };

const benefits: Item[] = [
  {
    icon: "🧭",
    title: "중장년 새출발 지원센터",
    desc: "직업상담, 재취업 교육, 심리 치유, 금융·노후설계 상담까지 한 곳에서 받을 수 있습니다.",
  },
  {
    icon: "🏛️",
    title: "신중년 경력활용 일자리",
    desc: "50세 이상 퇴직자·경력단절 인력이 공공기관·사회적기업·비영리단체에서 경력을 살려 일하는 사업입니다.",
  },
  {
    icon: "💰",
    title: "중장년 취업지원 사업",
    tag: "기업에 월 60만 원 · 최대 6개월",
    desc: "울산 소재 중소기업이 만 40~64세 미취업자를 정규직으로 채용하면, 기업에 1인당 월 60만 원씩 최대 6개월 지원됩니다.",
  },
  {
    icon: "📝",
    title: "맞춤형 취업 연계 서비스",
    desc: "이력서·자기소개서 코칭, 면접 준비, 직무역량 진단, 기업 매칭 같은 실무형 지원이 제공됩니다.",
  },
  {
    icon: "💚",
    title: "심리·노후 지원",
    desc: "은퇴 후 불안감과 사회적 고립을 줄이는 상담, 노후 재무설계, 건강관리 연계 프로그램이 있습니다.",
  },
];

const education: Item[] = [
  {
    icon: "💻",
    title: "울산중장년내일센터 프로그램",
    desc: "재취업·전직을 위한 온라인 과정. 경력 분석, 구직전략, 이력서 작성, 면접 준비, 스트레스·변화관리 등을 다룹니다.",
  },
  {
    icon: "🛠️",
    title: "평생교육진흥원 · 폴리텍 울산캠퍼스",
    desc: "IT·디지털 역량·기술 기능 교육 등 실무 중심 강좌를 비교적 저렴하거나 무료로 들을 수 있습니다.",
  },
  {
    icon: "💳",
    title: "내일배움카드 활용",
    desc: "훈련비를 지원받아 교육 부담을 크게 줄일 수 있습니다.",
  },
];

const checkPlaces: (Item & { search: string })[] = [
  {
    icon: "📢",
    title: "울산경제일자리진흥원 공고",
    desc: "중장년 취업지원 사업 내용과 채용 연계 공고를 확인할 수 있어요.",
    search: "울산경제일자리진흥원 중장년 취업지원 사업",
  },
  {
    icon: "🏙️",
    title: "울산시 공식 플랫폼",
    desc: "지역별 정책과 공모·지원사업을 확인할 수 있어요.",
    search: "울산시 중장년 일자리 지원사업",
  },
  {
    icon: "🎧",
    title: "중장년내일센터 안내 과정",
    desc: "전직지원 성격의 온라인 과정을 안내받을 수 있어요.",
    search: "울산 중장년내일센터 온라인 과정",
  },
];

const steps = [
  { badge: "재취업이 목표라면", desc: "중장년내일센터 상담부터 받기" },
  { badge: "채용 연계가 필요하면", desc: "울산경제일자리진흥원 공고 확인하기" },
  { badge: "직무를 바꾸고 싶다면", desc: "폴리텍·평생교육기관 재훈련 과정 찾기" },
];

function Card({ icon, title, desc, tag }: Item) {
  return (
    <div className="bg-white rounded-2xl border border-gray-200 p-5">
      <div className="flex items-start gap-3">
        <span className="text-3xl leading-none">{icon}</span>
        <div>
          <h3 className="text-lg font-bold text-gray-900">{title}</h3>
          {tag && (
            <span className="mt-1 inline-block rounded-full bg-emerald-100 px-2.5 py-0.5 text-xs font-bold text-emerald-700">
              {tag}
            </span>
          )}
          <p className="mt-1.5 text-[15px] leading-relaxed text-gray-600">{desc}</p>
        </div>
      </div>
    </div>
  );
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-xl font-extrabold text-gray-900 mb-3 mt-8 first:mt-0">
      {children}
    </h2>
  );
}

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
            울산 중장년을 위한 정책 · 지원금 · 교육 정보를 한눈에
          </p>
        </div>
      </header>

      <main className="max-w-2xl mx-auto px-4 py-6 pb-12">
        <SectionTitle>💡 받을 수 있는 혜택</SectionTitle>
        <div className="space-y-3">
          {benefits.map((b) => (
            <Card key={b.title} {...b} />
          ))}
        </div>

        <SectionTitle>📚 교육 정보</SectionTitle>
        <div className="space-y-3">
          {education.map((e) => (
            <Card key={e.title} {...e} />
          ))}
        </div>

        <SectionTitle>🔎 바로 확인할 곳</SectionTitle>
        <div className="space-y-3">
          {checkPlaces.map((c) => (
            <a
              key={c.title}
              href={`https://www.google.com/search?q=${encodeURIComponent(c.search)}`}
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

        <SectionTitle>✅ 추천 순서</SectionTitle>
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

        <div className="mt-8 rounded-2xl bg-emerald-50 border border-emerald-200 p-5 text-center">
          <p className="text-[15px] font-medium text-emerald-900 leading-relaxed">
            재취업 중심으로 찾을지, 배움·자격증 중심으로 찾을지에 따라
            더 딱 맞는 정보를 안내해 드려요.
          </p>
          <p className="mt-1.5 text-sm text-emerald-700">
            모임에서 편하게 물어보세요 🙂
          </p>
        </div>
      </main>
    </div>
  );
}
