import Link from "next/link";

export const metadata = {
  title: "AI 수업 커리큘럼 — 울산 미드허브",
  description:
    "40+ AI 실무 활용 과정. 진단 → 수준별 맞춤 → 직업별 실습 → 나만의 AI 비서 제작까지 5일 커리큘럼.",
};

const MOIM_URL =
  "https://daangn.com/kr/share/community/ref/invite-group/bbSzlfihyYu";

const days = [
  {
    day: "Day 1",
    title: "AI의 이해와 ChatGPT 기초",
    detail: "AI 개념, 가입, 좋은 질문법, 검증 습관",
    output: "내가 만든 프롬프트 5개",
  },
  {
    day: "Day 2",
    title: "내 일에 쓰는 AI (실무 문서)",
    detail: "이메일·보고서·엑셀·회의록·PPT",
    output: "내 업무 문서 3종 초안",
  },
  {
    day: "Day 3",
    title: "AI를 비서처럼 (생산성)",
    detail: "프롬프트 설계, 역할 부여, Claude·Gemini·NotebookLM·Perplexity 비교",
    output: "나만의 프롬프트 템플릿집",
  },
  {
    day: "Day 4",
    title: "AI 업무 자동화 입문",
    detail: "API 개념, Make·n8n, 이메일/시트/메신저 연결",
    output: "자동화 시나리오 1개",
  },
  {
    day: "Day 5",
    title: "최종 프로젝트 + 인증",
    detail: "내 직업 맞춤 AI 비서 제작, 발표, 수료시험",
    output: "나만의 AI 비서 + 인증서",
  },
];

const levels = [
  { range: "0~15점", name: "Level 1 · AI 입문", goal: "AI가 무섭지 않다" },
  { range: "16~30점", name: "Level 2 · AI 활용", goal: "AI를 내 일에 사용한다" },
  { range: "31~45점", name: "Level 3 · AI 실무", goal: "AI를 비서처럼 사용한다" },
  { range: "46~60점", name: "Level 4 · AI 자동화", goal: "AI 직원 한 명을 만든다" },
];

const projects = [
  { job: "사무직", ex: "이메일 자동 작성 + 회의록 정리" },
  { job: "자영업자", ex: "매출 분석 + 고객 응대 AI" },
  { job: "건설업", ex: "견적서·공사일지 자동 작성" },
  { job: "식당 운영", ex: "재고 관리 + 매출 요약" },
  { job: "보험·영업", ex: "상담 내용 정리 + 제안서 초안" },
  { job: "강사", ex: "강의안 + 문제 자동 생성" },
];

const points = [
  "진단부터 시작 — 20문항 레벨 테스트로 내 수준을 숫자로 확인",
  "수준별 맞춤 교육 — 입문자와 실무자가 같은 수업을 듣지 않는다",
  "직업별 실습 — 남의 예제가 아니라 내 일로 실습한다",
  "AI 비서 제작 — 수료 시 실제로 작동하는 결과물을 가져간다",
  "AI 활용 능력 인증서 — 이력서에 기재 가능",
];

export default function CurriculumPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-gradient-to-br from-violet-600 to-indigo-700 text-white px-4 py-4">
        <div className="max-w-2xl mx-auto">
          <Link
            href="/ai"
            className="inline-flex items-center gap-2 rounded-2xl bg-white px-6 py-3.5 text-lg font-extrabold text-indigo-700 shadow-md hover:bg-indigo-50 transition-colors"
          >
            ← AI 진단으로
          </Link>
          <h1 className="mt-4 text-2xl font-extrabold">📋 AI 수업 커리큘럼</h1>
          <p className="mt-1 text-sm text-indigo-100">
            40+ AI 실무 활용 과정 · AI를 배우는 게 아니라, AI와 함께 일하는 법을 배웁니다
          </p>
        </div>
      </header>

      <main className="max-w-2xl mx-auto px-4 py-6 space-y-8">
        {/* 과정 개요 */}
        <section className="bg-white rounded-2xl border border-gray-200 p-5">
          <h2 className="text-lg font-extrabold text-gray-900 mb-3">과정 한눈에</h2>
          <dl className="space-y-2 text-[15px]">
            {[
              ["대상", "40~60대 직장인·자영업자·은퇴(예정)자·재취업 준비자"],
              ["기간", "총 5일 (1일 3시간, 15시간) · 주 1회 5주 가능"],
              ["방식", "진단 → 수준별 맞춤 → 직업별 실습 → 최종 프로젝트 → 인증서"],
              ["준비물", "노트북 또는 스마트폰, 이메일 계정(구글 권장)"],
            ].map(([k, v]) => (
              <div key={k} className="flex gap-3">
                <dt className="w-16 shrink-0 font-bold text-indigo-700">{k}</dt>
                <dd className="text-gray-700">{v}</dd>
              </div>
            ))}
          </dl>
        </section>

        {/* 교육 철학 */}
        <section className="rounded-2xl bg-indigo-50 border border-indigo-200 p-5">
          <h2 className="text-lg font-extrabold text-indigo-900 mb-2">교육 철학</h2>
          <ul className="space-y-2 text-[15px] font-semibold text-indigo-900">
            <li>“AI는 사람을 대신하는 게 아니라, 반복되는 일을 대신하는 도구입니다.”</li>
            <li>“AI 때문에 없어지는 직업보다, 쓰는 사람과 못 쓰는 사람의 차이가 더 큽니다.”</li>
            <li>“이 교육이 끝나면 AI 직원 한 명을 데리고 퇴근하게 됩니다.”</li>
          </ul>
        </section>

        {/* 5일 커리큘럼 */}
        <section>
          <h2 className="text-lg font-extrabold text-gray-900 mb-3">📅 5일 커리큘럼</h2>
          <div className="space-y-3">
            {days.map((d) => (
              <div key={d.day} className="bg-white rounded-2xl border border-gray-200 p-5">
                <div className="flex items-center gap-2">
                  <span className="rounded-lg bg-indigo-600 px-2.5 py-1 text-xs font-bold text-white">
                    {d.day}
                  </span>
                  <h3 className="text-base font-bold text-gray-900">{d.title}</h3>
                </div>
                <p className="mt-2 text-[15px] text-gray-600">{d.detail}</p>
                <p className="mt-2 text-sm font-semibold text-emerald-700">
                  🎁 산출물: {d.output}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* 레벨 체계 */}
        <section>
          <h2 className="text-lg font-extrabold text-gray-900 mb-3">📊 레벨별 목표</h2>
          <div className="space-y-2">
            {levels.map((l) => (
              <div
                key={l.name}
                className="flex items-center gap-3 bg-white rounded-2xl border border-gray-200 p-4"
              >
                <span className="w-16 shrink-0 rounded-full bg-indigo-100 px-2 py-1 text-center text-xs font-bold text-indigo-700">
                  {l.range}
                </span>
                <div>
                  <p className="text-[15px] font-bold text-gray-900">{l.name}</p>
                  <p className="text-sm text-gray-500">목표 — “{l.goal}”</p>
                </div>
              </div>
            ))}
          </div>
          <Link
            href="/ai"
            className="mt-3 inline-block text-sm font-bold text-indigo-700 underline"
          >
            → 내 레벨 진단해보기
          </Link>
        </section>

        {/* 직업별 프로젝트 */}
        <section>
          <h2 className="text-lg font-extrabold text-gray-900 mb-1">
            🎯 최종 프로젝트 — 나만의 AI 비서
          </h2>
          <p className="text-sm text-gray-500 mb-3">
            남의 예제가 아니라 <b>내 직업</b>에 맞는 걸 직접 만듭니다.
          </p>
          <div className="grid grid-cols-1 gap-2">
            {projects.map((p) => (
              <div
                key={p.job}
                className="flex gap-3 bg-white rounded-xl border border-gray-200 p-4 text-[15px]"
              >
                <span className="w-20 shrink-0 font-bold text-gray-900">{p.job}</span>
                <span className="text-gray-600">{p.ex}</span>
              </div>
            ))}
          </div>
        </section>

        {/* 차별화 */}
        <section>
          <h2 className="text-lg font-extrabold text-gray-900 mb-3">✨ 이 과정이 다른 점</h2>
          <ol className="space-y-2">
            {points.map((p, i) => (
              <li
                key={i}
                className="flex items-start gap-3 bg-white rounded-xl border border-gray-200 p-4 text-[15px] text-gray-700"
              >
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-indigo-600 text-xs font-bold text-white">
                  {i + 1}
                </span>
                <span>{p}</span>
              </li>
            ))}
          </ol>
        </section>

        {/* CTA */}
        <section className="rounded-3xl bg-gradient-to-br from-indigo-600 to-blue-700 p-6 text-white shadow-lg text-center">
          <p className="text-lg font-extrabold">이 과정, 무료 모임에서 시작해요 🙂</p>
          <div className="mt-4 grid grid-cols-1 gap-2">
            <a
              href={MOIM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center rounded-xl bg-orange-500 px-5 py-3 text-sm font-bold text-white hover:bg-orange-600"
            >
              🤝 무료 AI 모임 참여하기 →
            </a>
            <Link
              href="/ai"
              className="flex items-center justify-center rounded-xl bg-white px-5 py-3 text-sm font-bold text-indigo-700 hover:bg-indigo-50"
            >
              📝 내 AI 수준 진단하기 →
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
