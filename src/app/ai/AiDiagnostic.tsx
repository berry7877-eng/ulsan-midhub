"use client";

import Link from "next/link";
import { useMemo, useRef, useState } from "react";

type Q = { q: string; opts: [string, string, string, string] };
type Section = { title: string; items: Q[] };

const SECTIONS: Section[] = [
  {
    title: "Level 1 · AI 입문",
    items: [
      {
        q: "ChatGPT를 사용해 본 적이 있습니까?",
        opts: ["처음 들어본다", "회원가입만 했다", "가끔 질문한다", "자주 사용한다"],
      },
      {
        q: "AI에게 어떤 질문을 해야 하는지 알고 있습니까?",
        opts: ["전혀 모른다", "조금 안다", "어느 정도 안다", "원하는 결과가 나오게 질문할 수 있다"],
      },
      {
        q: "ChatGPT와 네이버 검색의 차이를 알고 있습니까?",
        opts: ["모른다", "조금 안다", "설명할 수 있다", "상황에 따라 구분해서 쓴다"],
      },
      {
        q: "AI가 틀릴 수도 있다는 것을 알고 있습니까?",
        opts: ["모른다", "들어봤다", "알고 있다", "검증하면서 사용한다"],
      },
      {
        q: "AI로 할 수 있는 일을 얼마나 알고 있습니까? (글·번역·요약·이미지·엑셀 등)",
        opts: ["거의 모른다", "2~3개 안다", "대부분 안다", "실제 사용한다"],
      },
    ],
  },
  {
    title: "Level 2 · 실무 활용",
    items: [
      {
        q: "AI로 문서(보고서·안내문 등)를 작성해 본 적이 있습니까?",
        opts: ["없다", "한두 번", "가끔", "업무에 정기적으로 사용"],
      },
      {
        q: "AI에게 이메일 작성을 부탁해 본 적이 있습니까?",
        opts: ["없다", "한두 번", "가끔", "자주"],
      },
      {
        q: "AI로 엑셀 함수나 표를 만들어 본 적이 있습니까?",
        opts: ["없다", "함수 질문만", "표·함수 생성", "데이터 분석까지"],
      },
      {
        q: "AI에게 업무 아이디어를 물어본 적이 있습니까?",
        opts: ["없다", "한두 번", "가끔", "의사결정 전 습관적으로"],
      },
      {
        q: "AI로 번역하거나 요약한 적이 있습니까?",
        opts: ["없다", "번역만", "번역+요약", "긴 문서·회의록도 요약"],
      },
    ],
  },
  {
    title: "Level 3 · 생산성",
    items: [
      {
        q: "'프롬프트'라는 말을 알고 있습니까?",
        opts: ["처음 듣는다", "들어봤다", "뜻을 안다", "직접 잘 만들어 쓴다"],
      },
      {
        q: "같은 질문을 수정하면서 원하는 답을 만든 경험이 있습니까?",
        opts: ["없다", "가끔", "자주", "항상 대화로 다듬는다"],
      },
      {
        q: "AI 여러 개(ChatGPT·Claude·Gemini 등)를 비교해서 사용합니까?",
        opts: ["하나만 안다", "이름만 안다", "2개 이상 써봤다", "용도별로 골라 쓴다"],
      },
      {
        q: "AI를 업무시간 단축에 사용합니까?",
        opts: ["아니다", "가끔", "특정 업무에 항상", "절약 시간을 체감·측정한다"],
      },
      {
        q: "AI 결과물을 직접 수정하여 사용합니까?",
        opts: ["그대로 쓰거나 안 쓴다", "가끔 고친다", "항상 검토 후 수정", "내 스타일 지침을 학습시킨다"],
      },
    ],
  },
  {
    title: "Level 4 · 자동화",
    items: [
      {
        q: "'API'라는 말을 들어본 적이 있습니까?",
        opts: ["처음 듣는다", "들어봤다", "개념을 안다", "써본 적 있다"],
      },
      {
        q: "'업무 자동화'라는 말을 알고 있습니까?",
        opts: ["모른다", "들어봤다", "사례를 안다", "직접 만들어봤다"],
      },
      {
        q: "Zapier·Make·n8n 등을 들어본 적이 있습니까?",
        opts: ["처음 듣는다", "이름만", "화면을 본 적 있다", "써봤다"],
      },
      {
        q: "AI를 다른 프로그램(엑셀·메일·메신저)과 연결할 수 있다는 걸 아십니까?",
        opts: ["모른다", "들어봤다", "원리를 안다", "연결해 봤다"],
      },
      {
        q: "AI로 돈을 벌거나 사업에 활용할 계획이 있습니까?",
        opts: ["없다", "막연히 있다", "구체적 아이디어 있다", "실행 중이다"],
      },
    ],
  },
];

const TOTAL_Q = SECTIONS.reduce((n, s) => n + s.items.length, 0);

type Result = {
  level: string;
  emoji: string;
  desc: string;
  next: string;
};

function judge(total: number): Result {
  if (total <= 15)
    return {
      level: "Level 1 · AI 입문",
      emoji: "🌱",
      desc: "이제 막 시작하는 단계예요. 조급해하지 마세요. 오늘 AI에게 말 한 번 걸어보는 것부터가 성공입니다.",
      next: "아래 'AI 기본지식 배우기'부터 차근차근 보시고, 무료 모임에서 ChatGPT 첫 질문을 함께 해봐요.",
    };
  if (total <= 30)
    return {
      level: "Level 2 · AI 활용",
      emoji: "🚀",
      desc: "기본은 익히셨어요! 이제 실제 업무(문서·메일·요약)에 써먹는 단계입니다.",
      next: "기본지식은 복습만 하고, 모임에서 '내 업무에 AI 적용하기' 실습으로 넘어가 보세요.",
    };
  if (total <= 45)
    return {
      level: "Level 3 · AI 실무",
      emoji: "💪",
      desc: "이미 잘 쓰고 계시네요. 프롬프트와 여러 AI를 다루는 실무 단계입니다.",
      next: "역할 부여·맞춤 지침·교차 검증 같은 심화 활용으로 한 단계 올려보세요. 모임에서 사례를 나눠요.",
    };
  return {
    level: "Level 4 · AI 자동화",
    emoji: "🏆",
    desc: "상위권입니다! 자동화와 사업 활용까지 바라보는 단계예요.",
    next: "Make·n8n 자동화와 AI 사업 아이템을 모임에서 함께 구체화해봐요.",
  };
}

const MOIM_URL =
  "https://daangn.com/kr/share/community/ref/invite-group/bbSzlfihyYu";

export default function AiDiagnostic() {
  // 각 문항의 선택 점수(0~3) 저장. key = "sectionIdx-itemIdx"
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [showResult, setShowResult] = useState(false);
  const resultRef = useRef<HTMLDivElement>(null);

  const answeredCount = Object.keys(answers).length;
  const total = useMemo(
    () => Object.values(answers).reduce((a, b) => a + b, 0),
    [answers]
  );
  const result = useMemo(() => judge(total), [total]);
  const allAnswered = answeredCount === TOTAL_Q;

  function submit() {
    setShowResult(true);
    setTimeout(() => resultRef.current?.scrollIntoView({ behavior: "smooth" }), 50);
  }

  return (
    <div>
      <div className="space-y-6">
        {SECTIONS.map((section, si) => (
          <section key={section.title}>
            <h3 className="text-base font-extrabold text-indigo-700">
              {section.title}
            </h3>
            <div className="mt-2 space-y-3">
              {section.items.map((item, ii) => {
                const key = `${si}-${ii}`;
                const globalNo =
                  SECTIONS.slice(0, si).reduce((n, s) => n + s.items.length, 0) +
                  ii +
                  1;
                return (
                  <div key={key} className="bg-white rounded-2xl border border-gray-200 p-4">
                    <p className="text-[15px] font-bold text-gray-900">
                      {globalNo}. {item.q}
                    </p>
                    <div className="mt-2 grid grid-cols-1 gap-2">
                      {item.opts.map((opt, oi) => {
                        const selected = answers[key] === oi;
                        return (
                          <button
                            key={oi}
                            type="button"
                            onClick={() =>
                              setAnswers((s) => ({ ...s, [key]: oi }))
                            }
                            className={`text-left rounded-xl px-4 py-3 text-[15px] font-medium transition ${
                              selected
                                ? "bg-indigo-600 text-white"
                                : "bg-gray-50 text-gray-700 ring-1 ring-gray-200 hover:bg-gray-100"
                            }`}
                          >
                            {opt}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        ))}
      </div>

      {/* 제출 바 */}
      <div className="sticky bottom-3 mt-6">
        <button
          type="button"
          onClick={submit}
          disabled={!allAnswered}
          className="w-full rounded-2xl bg-indigo-600 px-5 py-4 text-lg font-bold text-white shadow-lg transition-colors hover:bg-indigo-700 disabled:cursor-not-allowed disabled:bg-gray-300"
        >
          {allAnswered
            ? "결과 보기"
            : `${answeredCount} / ${TOTAL_Q} 문항 응답 (모두 답해주세요)`}
        </button>
      </div>

      {/* 결과 */}
      {showResult && allAnswered && (
        <div
          ref={resultRef}
          className="mt-6 rounded-3xl bg-gradient-to-br from-indigo-600 to-blue-700 p-6 text-white shadow-lg"
        >
          <p className="text-sm font-semibold text-indigo-100">나의 AI 이해도</p>
          <div className="mt-1 flex items-baseline gap-2">
            <span className="text-4xl font-black">{total}</span>
            <span className="text-lg font-semibold text-indigo-100">/ 60점</span>
          </div>
          <p className="mt-3 text-2xl font-extrabold">
            {result.emoji} {result.level}
          </p>
          <p className="mt-2 text-[15px] leading-relaxed text-indigo-50">
            {result.desc}
          </p>
          <div className="mt-3 rounded-2xl bg-white/15 p-4">
            <p className="text-sm font-bold text-white">👉 다음 단계 추천</p>
            <p className="mt-1 text-[15px] leading-relaxed text-indigo-50">
              {result.next}
            </p>
          </div>
          <div className="mt-4 grid grid-cols-1 gap-2">
            <Link
              href="/ai/learn"
              className="flex items-center justify-center rounded-xl bg-white px-5 py-3 text-sm font-bold text-indigo-700 hover:bg-indigo-50"
            >
              📚 AI 기본지식 배우기 →
            </Link>
            <a
              href={MOIM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center rounded-xl bg-orange-500 px-5 py-3 text-sm font-bold text-white hover:bg-orange-600"
            >
              🤝 무료 AI 모임 참여하기 →
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
