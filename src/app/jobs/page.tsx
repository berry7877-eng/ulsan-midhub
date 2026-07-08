import Link from "next/link";

export const metadata = {
  title: "취업 — 울산 미드허브",
  description: "울산 공공·민간·워크넷 채용과 이웃 구인구직을 한눈에.",
};

const PUBLIC_JOBS =
  "https://job.ubpi.or.kr/job/recruit/publicRecruit/list.ulsan?mId=001001002001000000";
const CIVILIAN_JOBS =
  "https://job.ubpi.or.kr/job/recruit/civilianRecruit/list.ulsan?mId=001001001000000000";
const WORKNET = "https://www.work.go.kr/";

export default function JobsHub() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-blue-600 text-white px-4 py-4">
        <div className="max-w-2xl mx-auto">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-2xl bg-white px-6 py-3.5 text-lg font-extrabold text-blue-700 shadow-md hover:bg-blue-50 transition-colors"
          >
            🏠 홈으로
          </Link>
          <h1 className="mt-4 text-2xl font-extrabold">💼 울산 구인구직</h1>
          <p className="mt-1 text-sm text-blue-100">
            공공 · 민간 · 워크넷 채용 + 이웃 구인구직
          </p>
        </div>
      </header>

      <main className="max-w-2xl mx-auto px-4 py-6">
        <div className="grid grid-cols-2 gap-4">
          <a
            href={PUBLIC_JOBS}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col min-h-[200px] rounded-3xl p-6 text-white shadow-lg ring-1 ring-black/5 bg-gradient-to-br from-blue-600 to-indigo-700 hover:brightness-110 transition"
          >
            <span className="text-5xl">🏛️</span>
            <h2 className="mt-auto text-2xl font-extrabold tracking-tight leading-tight">
              공공 일자리
            </h2>
            <p className="mt-1.5 text-[15px] font-medium leading-snug text-blue-100">
              관공서·공공기관 채용 →
            </p>
          </a>

          <a
            href={CIVILIAN_JOBS}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col min-h-[200px] rounded-3xl p-6 text-white shadow-lg ring-1 ring-black/5 bg-gradient-to-br from-sky-500 to-blue-600 hover:brightness-110 transition"
          >
            <span className="text-5xl">🏢</span>
            <h2 className="mt-auto text-2xl font-extrabold tracking-tight leading-tight">
              민간 일자리
            </h2>
            <p className="mt-1.5 text-[15px] font-medium leading-snug text-sky-100">
              기업·사업장 채용 →
            </p>
          </a>

          <a
            href={WORKNET}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col min-h-[200px] rounded-3xl p-6 text-white shadow-lg ring-1 ring-black/5 bg-gradient-to-br from-emerald-600 to-teal-700 hover:brightness-110 transition"
          >
            <span className="text-5xl">🌐</span>
            <h2 className="mt-auto text-2xl font-extrabold tracking-tight leading-tight">
              워크넷
            </h2>
            <p className="mt-1.5 text-[15px] font-medium leading-snug text-emerald-50">
              전국 채용정보 →
            </p>
          </a>

          <Link
            href="/jobs/board"
            className="flex flex-col min-h-[200px] rounded-3xl p-6 text-white shadow-lg ring-1 ring-black/5 bg-gradient-to-br from-orange-500 to-red-500 hover:brightness-110 transition"
          >
            <span className="text-5xl">🤝</span>
            <h2 className="mt-auto text-2xl font-extrabold tracking-tight leading-tight">
              이웃 구인구직
            </h2>
            <p className="mt-1.5 text-[15px] font-medium leading-snug text-orange-50">
              우리 동네 직접 올리기 →
            </p>
          </Link>
        </div>
      </main>
    </div>
  );
}
