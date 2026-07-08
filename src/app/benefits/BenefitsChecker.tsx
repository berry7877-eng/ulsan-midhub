"use client";

import { useMemo, useState } from "react";
import { BENEFITS, QUESTIONS, type Answers } from "@/lib/benefits";
import BenefitCard from "./BenefitCard";

export default function BenefitsChecker() {
  const [answers, setAnswers] = useState<Answers>({});
  const allAnswered = Boolean(answers.age && answers.insured && answers.goal);

  const results = useMemo(() => {
    if (!allAnswered) return [];
    return BENEFITS.map((b) => ({ b, status: b.elig(answers) }))
      .filter((r) => r.status !== "no")
      .sort((a, b) => (a.status === "yes" ? -1 : 1) - (b.status === "yes" ? -1 : 1));
  }, [answers, allAnswered]);

  const yesCount = results.filter((r) => r.status === "yes").length;

  return (
    <div>
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
    </div>
  );
}
