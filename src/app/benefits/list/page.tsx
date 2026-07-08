import Link from "next/link";
import { BENEFITS } from "@/lib/benefits";
import BenefitCard from "../BenefitCard";

export const metadata = {
  title: "혜택 목록 — 울산 미드허브",
};

export default async function BenefitsList({
  searchParams,
}: {
  searchParams: Promise<{ track?: string }>;
}) {
  const { track } = await searchParams;
  const t = track === "learn" ? "learn" : "job";
  const items = BENEFITS.filter((b) => b.track === t);
  const title = t === "learn" ? "🎓 배움" : "💼 재취업 · 생계";
  const sub =
    t === "learn"
      ? "자격증·재훈련으로 새로 시작하기"
      : "실업급여·생계지원·재취업 도움";

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
          <h1 className="mt-4 text-2xl font-extrabold">{title}</h1>
          <p className="mt-1 text-sm text-emerald-100">{sub}</p>
        </div>
      </header>

      <main className="max-w-2xl mx-auto px-4 py-6">
        <div className="space-y-3">
          {items.map((b) => (
            <BenefitCard key={b.id} b={b} />
          ))}
        </div>

        <div className="mt-6 flex gap-2">
          <Link
            href={`/benefits/list?track=${t === "learn" ? "job" : "learn"}`}
            className="flex-1 rounded-xl bg-white px-4 py-3 text-center text-sm font-bold text-emerald-700 ring-1 ring-emerald-200 hover:bg-emerald-50"
          >
            {t === "learn" ? "💼 재취업·생계 보기" : "🎓 배움 보기"}
          </Link>
          <Link
            href="/benefits/diagnosis"
            className="flex-1 rounded-xl bg-emerald-600 px-4 py-3 text-center text-sm font-bold text-white hover:bg-emerald-700"
          >
            🤖 내 혜택 진단
          </Link>
        </div>
      </main>
    </div>
  );
}
