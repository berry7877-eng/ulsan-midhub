import Link from "next/link";

export const metadata = {
  title: "AI로 날개달기 — 울산 미드허브",
  description:
    "중장년을 위한 AI 허브. 이해도 진단, 수업 커리큘럼, 기본지식 학습, 무료 AI 모임.",
};

const MOIM_URL =
  "https://daangn.com/kr/share/community/ref/invite-group/bbSzlfihyYu";

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
        {/* 4분할 타일 */}
        <div className="grid grid-cols-2 gap-4">
          {/* 1. AI 이해도 진단 */}
          <Link
            href="/ai/diagnosis"
            className="flex flex-col min-h-[200px] rounded-3xl p-6 text-white shadow-lg ring-1 ring-black/5 bg-gradient-to-br from-violet-600 to-indigo-700 hover:brightness-110 transition"
          >
            <span className="text-5xl">📝</span>
            <h2 className="mt-auto text-2xl font-extrabold tracking-tight leading-tight">
              AI 이해도 진단
            </h2>
            <p className="mt-1.5 text-[15px] font-medium leading-snug text-violet-100">
              20문항으로 내 수준 확인 →
            </p>
          </Link>

          {/* 2. 수업 커리큘럼 */}
          <Link
            href="/ai/curriculum"
            className="flex flex-col min-h-[200px] rounded-3xl p-6 text-white shadow-lg ring-1 ring-black/5 bg-gradient-to-br from-sky-500 to-blue-700 hover:brightness-110 transition"
          >
            <span className="text-5xl">📋</span>
            <h2 className="mt-auto text-2xl font-extrabold tracking-tight leading-tight">
              수업 커리큘럼
            </h2>
            <p className="mt-1.5 text-[15px] font-medium leading-snug text-sky-100">
              5일 과정·직업별 프로젝트 →
            </p>
          </Link>

          {/* 3. 기본지식 배우기 */}
          <Link
            href="/ai/learn"
            className="flex flex-col min-h-[200px] rounded-3xl p-6 text-white shadow-lg ring-1 ring-black/5 bg-gradient-to-br from-emerald-500 to-teal-700 hover:brightness-110 transition"
          >
            <span className="text-5xl">📚</span>
            <h2 className="mt-auto text-2xl font-extrabold tracking-tight leading-tight">
              기본지식 배우기
            </h2>
            <p className="mt-1.5 text-[15px] font-medium leading-snug text-emerald-50">
              AI 첫걸음, 쉽게 정리 →
            </p>
          </Link>

          {/* 4. 무료 AI 모임 */}
          <a
            href={MOIM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col min-h-[200px] rounded-3xl p-6 text-white shadow-lg ring-1 ring-black/5 bg-gradient-to-br from-orange-500 to-red-500 hover:brightness-110 transition"
          >
            <span className="text-5xl">🤝</span>
            <h2 className="mt-auto text-2xl font-extrabold tracking-tight leading-tight">
              무료 AI 모임
            </h2>
            <p className="mt-1.5 text-[15px] font-medium leading-snug text-orange-50">
              같은 나이대끼리 함께 →
            </p>
          </a>
        </div>
      </main>
    </div>
  );
}
