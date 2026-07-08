import Link from "next/link";
import AiDiagnostic from "./AiDiagnostic";

export const metadata = {
  title: "AI로 날개달기 — 울산 미드허브",
  description:
    "AI 이해도 진단(20문항)으로 내 수준을 확인하고, 중장년을 위한 AI 기본지식을 배웁니다.",
};

export default function AiPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-gradient-to-br from-violet-600 to-indigo-700 text-white px-4 py-4">
        <div className="max-w-2xl mx-auto">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-2xl bg-white px-6 py-3.5 text-lg font-extrabold text-indigo-700 shadow-md hover:bg-indigo-50 transition-colors"
          >
            🏠 홈으로
          </Link>
          <h1 className="mt-4 text-2xl font-extrabold">🤖 AI로 날개달기</h1>
          <p className="mt-1 text-sm text-indigo-100">
            AI는 위협이 아니라 무기. 경험 많은 중장년에게 오히려 기회예요.
          </p>
        </div>
      </header>

      <main className="max-w-2xl mx-auto px-4 py-6">
        {/* 진단 안내 */}
        <section className="rounded-3xl bg-white border border-gray-200 p-6">
          <span className="inline-block rounded-full bg-indigo-100 px-3 py-1 text-xs font-bold text-indigo-700">
            📝 AI 이해도 진단
          </span>
          <h2 className="mt-3 text-xl font-extrabold text-gray-900">
            내 AI 수준부터 확인해봐요
          </h2>
          <p className="mt-2 text-[15px] leading-relaxed text-gray-600">
            총 <b>20문항</b>, 정답이 없는 검사예요. 지금의 나를 솔직하게 고르면
            됩니다 (5~10분). 끝나면 <b>내 레벨과 다음 학습 단계</b>를 알려드려요.
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            <Link
              href="/ai/learn"
              className="rounded-xl bg-indigo-600 px-4 py-2.5 text-sm font-bold text-white hover:bg-indigo-700"
            >
              📚 바로 기본지식 배우기
            </Link>
          </div>
        </section>

        {/* 진단 문항 */}
        <div className="mt-6">
          <AiDiagnostic />
        </div>
      </main>
    </div>
  );
}
