import Link from "next/link";
import AiDiagnostic from "../AiDiagnostic";

export const metadata = {
  title: "AI 이해도 진단 — 울산 미드허브",
  description: "20문항으로 내 AI 수준을 확인하고 다음 학습 단계를 추천받으세요.",
};

export default function DiagnosisPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-gradient-to-br from-violet-600 to-indigo-700 text-white px-4 py-4">
        <div className="max-w-2xl mx-auto">
          <Link
            href="/ai"
            className="inline-flex items-center gap-2 rounded-2xl bg-white px-6 py-3.5 text-lg font-extrabold text-indigo-700 shadow-md hover:bg-indigo-50 transition-colors"
          >
            ← AI 홈
          </Link>
          <h1 className="mt-4 text-2xl font-extrabold">📝 AI 이해도 진단</h1>
          <p className="mt-1 text-sm text-indigo-100">
            총 20문항 · 정답 없는 검사예요. 솔직하게 고르면 5~10분.
          </p>
        </div>
      </header>

      <main className="max-w-2xl mx-auto px-4 py-6">
        <AiDiagnostic />
      </main>
    </div>
  );
}
