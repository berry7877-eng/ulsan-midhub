import Link from "next/link";
import BenefitsChecker from "../BenefitsChecker";

export const metadata = {
  title: "AI 혜택 진단 — 울산 미드허브",
  description: "나이·고용보험·목표 3가지로 받을 수 있는 혜택을 바로 확인하세요.",
};

export default function BenefitsDiagnosis() {
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
          <h1 className="mt-4 text-2xl font-extrabold">🤖 AI 혜택 진단</h1>
          <p className="mt-1 text-sm text-emerald-100">
            3가지만 고르면 내게 맞는 혜택을 골라드려요
          </p>
        </div>
      </header>

      <main className="max-w-2xl mx-auto px-4 py-6">
        <BenefitsChecker />
      </main>
    </div>
  );
}
