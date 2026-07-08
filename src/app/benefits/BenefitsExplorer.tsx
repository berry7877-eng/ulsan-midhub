"use client";

import { useMemo, useState } from "react";

type Status = "yes" | "maybe" | "no";
type Answers = { age?: string; insured?: string; goal?: string };

type Benefit = {
  id: string;
  icon: string;
  title: string;
  tag?: string;
  desc: string;
  track: "job" | "learn";
  link: { label: string; url: string };
  elig: (a: Answers) => Status;
};

const WORKNET =
  "https://www.work.go.kr/ulsan/ctrIntro/ctrWork/ctrWorkDetail.do?detCode=1&menuCd=40220&subMenuCd=40207";
const GUKCHWI =
  "http://210.95.199.70/ulsan/ctrIntro/ctrWork/ctrWorkDetail.do?detCode=1&menuCd=40220&subMenuCd=40520";
const CENTER = "http://210.95.199.70/ulsan/main.do";
const ULSAN_JOB = "https://www.ulsan.go.kr/u/economy/contents.ulsan?mId=001002003000000000";
const ELIFE = "https://www.elifeplan.or.kr/course/course_view.jsp?id=63";
const HRD = "https://www.hrd.go.kr";

const BENEFITS: Benefit[] = [
  {
    id: "unemployment",
    icon: "💵",
    title: "실업급여 (구직급여)",
    desc: "고용보험 가입 이력이 있는 실업자에게 지급됩니다. 신청·수급은 고용센터(워크넷)에서 진행해요.",
    track: "job",
    link: { label: "워크넷에서 신청하기", url: WORKNET },
    elig: (a) => (a.insured === "yes" ? "yes" : "no"),
  },
  {
    id: "gukchwi",
    icon: "🤝",
    title: "국민취업지원제도",
    tag: "구직촉진수당(생계지원)",
    desc: "저소득·취업취약 계층에 취업지원서비스와 구직촉진수당을 함께 줍니다. Ⅰ·Ⅱ유형별 소득·재산 기준을 확인하세요.",
    track: "job",
    link: { label: "국민취업지원제도 안내", url: GUKCHWI },
    elig: (a) => (a.goal === "income" ? "yes" : "maybe"),
  },
  {
    id: "public",
    icon: "🧹",
    title: "공공근로 · 자활 · 지역 일자리",
    desc: "울산시 계절형·상시형 공공근로와 자활공공근로로 한시적 일자리를 제공합니다. 구·군별 모집 시기를 확인하세요.",
    track: "job",
    link: { label: "울산시 일자리 포털", url: ULSAN_JOB },
    elig: () => "maybe",
  },
  {
    id: "mid-subsidy",
    icon: "💰",
    title: "중장년 취업지원 사업",
    tag: "기업에 월 60만 원 · 최대 6개월",
    desc: "울산 중소기업이 만 40~64세 미취업자를 정규직으로 채용하면 기업에 1인당 월 60만 원씩 최대 6개월 지원됩니다.",
    track: "job",
    link: { label: "울산시 일자리 포털", url: ULSAN_JOB },
    elig: (a) => (a.age === "40_64" ? "yes" : "no"),
  },
  {
    id: "restart",
    icon: "🧭",
    title: "중장년 새출발 지원센터",
    desc: "직업상담, 재취업 교육, 심리 치유, 금융·노후설계 상담을 한 곳에서 받을 수 있어요.",
    track: "job",
    link: { label: "고용복지+센터 안내", url: CENTER },
    elig: (a) => (a.age === "u40" ? "maybe" : "yes"),
  },
  {
    id: "senior-career",
    icon: "🏛️",
    title: "신중년 경력활용 일자리",
    desc: "50세 이상 퇴직자·경력단절 인력이 공공기관·사회적기업·비영리단체에서 경력을 살려 일하는 사업입니다.",
    track: "job",
    link: { label: "울산시 일자리 포털", url: ULSAN_JOB },
    elig: (a) => (a.age === "u40" ? "no" : "maybe"),
  },
  {
    id: "matching",
    icon: "📝",
    title: "맞춤형 취업 연계 서비스",
    desc: "이력서·자기소개서 코칭, 면접 준비, 직무역량 진단, 기업 매칭 같은 실무형 지원이 제공됩니다.",
    track: "job",
    link: { label: "고용복지+센터 안내", url: CENTER },
    elig: (a) => (a.goal === "rehire" ? "yes" : "maybe"),
  },
  {
    id: "care",
    icon: "💚",
    title: "심리 · 노후 지원",
    desc: "은퇴 후 불안감과 사회적 고립을 줄이는 상담, 노후 재무설계, 건강관리 연계 프로그램이 있어요.",
    track: "job",
    link: { label: "고용복지+센터 안내", url: CENTER },
    elig: () => "maybe",
  },
  {
    id: "mid-center-edu",
    icon: "💻",
    title: "울산중장년내일센터 프로그램",
    desc: "재취업·전직 온라인 과정. 경력 분석, 구직전략, 이력서·면접, 스트레스·변화관리 등을 다룹니다.",
    track: "learn",
    link: { label: "고용복지+센터 안내", url: CENTER },
    elig: (a) => (a.goal === "learn" ? "yes" : "maybe"),
  },
  {
    id: "polytech",
    icon: "🛠️",
    title: "평생교육진흥원 · 폴리텍 울산캠퍼스",
    desc: "IT·디지털 역량·기술 기능 교육 등 실무 중심 강좌를 비교적 저렴하거나 무료로 들을 수 있어요.",
    track: "learn",
    link: { label: "평생교육 강좌 보기", url: ELIFE },
    elig: (a) => (a.goal === "learn" ? "yes" : "maybe"),
  },
  {
    id: "card",
    icon: "💳",
    title: "내일배움카드 (국비훈련)",
    desc: "훈련비를 지원받아 교육 비용 부담을 크게 줄일 수 있어요.",
    track: "learn",
    link: { label: "HRD-Net에서 확인", url: HRD },
    elig: (a) => (a.goal === "learn" ? "yes" : "maybe"),
  },
];

const QUESTIONS = [
  {
    key: "age" as const,
    label: "1. 나이대는 어떻게 되세요?",
    options: [
      { v: "u40", label: "40대 미만" },
      { v: "40_64", label: "40~64세" },
      { v: "o65", label: "65세 이상" },
    ],
  },
  {
    key: "insured" as const,
    label: "2. 실직 전 직장에서 고용보험에 가입돼 있었나요?",
    options: [
      { v: "yes", label: "네, 있었어요" },
      { v: "no", label: "아니요 · 잘 모름" },
    ],
  },
  {
    key: "goal" as const,
    label: "3. 지금 가장 필요한 게 뭐예요?",
    options: [
      { v: "rehire", label: "빨리 재취업" },
      { v: "learn", label: "배움 · 자격증" },
      { v: "income", label: "당장 생계지원" },
    ],
  },
];

function LinkButton({ label, url }: { label: string; url: string }) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="mt-3 inline-flex items-center rounded-lg bg-emerald-600 px-4 py-2 text-sm font-semibold text-white hover:bg-emerald-700 transition-colors"
    >
      {label} →
    </a>
  );
}

function BenefitCard({ b, status }: { b: Benefit; status?: Status }) {
  return (
    <div className="bg-white rounded-2xl border border-gray-200 p-5">
      <div className="flex items-start gap-3">
        <span className="text-3xl leading-none">{b.icon}</span>
        <div className="min-w-0">
          <div className="flex flex-wrap items-center gap-2">
            <h3 className="text-lg font-bold text-gray-900">{b.title}</h3>
            {status === "yes" && (
              <span className="rounded-full bg-emerald-100 px-2.5 py-0.5 text-xs font-bold text-emerald-700">
                ✓ 해당 가능성 높아요
              </span>
            )}
            {status === "maybe" && (
              <span className="rounded-full bg-amber-100 px-2.5 py-0.5 text-xs font-bold text-amber-700">
                가능성 있어요 · 확인 필요
              </span>
            )}
          </div>
          {b.tag && (
            <span className="mt-1 inline-block rounded-full bg-emerald-50 px-2.5 py-0.5 text-xs font-bold text-emerald-700 ring-1 ring-emerald-200">
              {b.tag}
            </span>
          )}
          <p className="mt-1.5 text-[15px] leading-relaxed text-gray-600">{b.desc}</p>
          <LinkButton {...b.link} />
        </div>
      </div>
    </div>
  );
}

export default function BenefitsExplorer() {
  const [answers, setAnswers] = useState<Answers>({});
  const [tab, setTab] = useState<"job" | "learn">("job");

  const allAnswered = Boolean(answers.age && answers.insured && answers.goal);

  const results = useMemo(() => {
    if (!allAnswered) return [];
    return BENEFITS.map((b) => ({ b, status: b.elig(answers) }))
      .filter((r) => r.status !== "no")
      .sort((a, b) => (a.status === "yes" ? -1 : 1) - (b.status === "yes" ? -1 : 1));
  }, [answers, allAnswered]);

  const yesCount = results.filter((r) => r.status === "yes").length;
  const catalog = BENEFITS.filter((b) => b.track === tab);

  return (
    <div>
      {/* AI 혜택 진단 */}
      <section className="rounded-3xl bg-gradient-to-br from-indigo-600 to-emerald-600 p-6 text-white shadow-lg">
        <span className="inline-block rounded-full bg-white/20 px-3 py-1 text-xs font-bold">
          🤖 AI 혜택 진단
        </span>
        <h2 className="mt-3 text-xl font-extrabold leading-snug">
          3가지만 고르면
          <br />내가 받을 수 있는 혜택을 바로 알려드려요
        </h2>

        <div className="mt-5 space-y-4">
          {QUESTIONS.map((q) => (
            <div key={q.key}>
              <p className="text-sm font-semibold text-white/90">{q.label}</p>
              <div className="mt-2 flex flex-wrap gap-2">
                {q.options.map((o) => {
                  const selected = answers[q.key] === o.v;
                  return (
                    <button
                      key={o.v}
                      type="button"
                      onClick={() => setAnswers((s) => ({ ...s, [q.key]: o.v }))}
                      className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                        selected
                          ? "bg-white text-indigo-700"
                          : "bg-white/15 text-white hover:bg-white/25"
                      }`}
                    >
                      {o.label}
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {allAnswered && (
          <button
            type="button"
            onClick={() => setAnswers({})}
            className="mt-5 text-sm font-medium text-white/80 underline"
          >
            다시 선택하기
          </button>
        )}
      </section>

      {/* 진단 결과 */}
      {allAnswered && (
        <section className="mt-5">
          <h2 className="text-xl font-extrabold text-gray-900">
            📋 회원님께 해당될 수 있는 혜택{" "}
            <span className="text-emerald-600">{results.length}개</span>
          </h2>
          <p className="mt-1 text-sm text-gray-500">
            초록 배지 {yesCount}개는 조건이 맞을 가능성이 높아요. 자세한 자격은 링크에서 확인하세요.
          </p>
          <div className="mt-3 space-y-3">
            {results.map(({ b, status }) => (
              <BenefitCard key={b.id} b={b} status={status} />
            ))}
          </div>
        </section>
      )}

      {/* 전체 혜택 (필터) */}
      <section className="mt-9">
        <h2 className="text-xl font-extrabold text-gray-900 mb-3">📚 전체 혜택 둘러보기</h2>
        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => setTab("job")}
            className={`flex-1 rounded-xl px-4 py-3 text-sm font-bold transition ${
              tab === "job"
                ? "bg-emerald-600 text-white"
                : "bg-white text-gray-600 ring-1 ring-gray-200"
            }`}
          >
            💼 재취업 · 생계 중심
          </button>
          <button
            type="button"
            onClick={() => setTab("learn")}
            className={`flex-1 rounded-xl px-4 py-3 text-sm font-bold transition ${
              tab === "learn"
                ? "bg-emerald-600 text-white"
                : "bg-white text-gray-600 ring-1 ring-gray-200"
            }`}
          >
            🎓 배움 중심
          </button>
        </div>
        <div className="mt-3 space-y-3">
          {catalog.map((b) => (
            <BenefitCard key={b.id} b={b} />
          ))}
        </div>
      </section>
    </div>
  );
}
