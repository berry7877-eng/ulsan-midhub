import Link from "next/link";
import { supabase, type JobPost } from "@/lib/supabase";

export const dynamic = "force-dynamic";

// 울산경제일자리진흥원 · 워크넷 실시간 채용 게시판
const PUBLIC_JOBS =
  "https://job.ubpi.or.kr/job/recruit/publicRecruit/list.ulsan?mId=001001002001000000";
const CIVILIAN_JOBS =
  "https://job.ubpi.or.kr/job/recruit/civilianRecruit/list.ulsan?mId=001001001000000000";
const WORKNET = "https://www.work.go.kr/";

async function getApprovedPosts(): Promise<JobPost[]> {
  if (!supabase) return [];
  const { data } = await supabase
    .from("job_posts")
    .select("*")
    .eq("status", "approved")
    .order("created_at", { ascending: false });
  return data ?? [];
}

export default async function JobsPage() {
  const approvedPosts = await getApprovedPosts();

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
          <h1 className="mt-4 text-2xl font-extrabold">울산 실시간 구인구직</h1>
          <p className="mt-1 text-sm text-blue-100">
            공공 · 민간 · 워크넷 채용 + 이웃 구인구직
          </p>
        </div>
      </header>

      <main className="max-w-2xl mx-auto px-4 py-6 space-y-8">
        {/* 실시간 채용 게시판 */}
        <section>
          <h2 className="text-lg font-extrabold text-gray-900 mb-3">
            🔴 실시간 채용정보
          </h2>
          <div className="grid grid-cols-2 gap-3">
            <a
              href={PUBLIC_JOBS}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col rounded-2xl p-5 text-white shadow-md bg-gradient-to-br from-blue-600 to-indigo-700 hover:brightness-110 transition"
            >
              <span className="text-3xl">🏛️</span>
              <span className="mt-2 text-lg font-bold">공공 일자리</span>
              <span className="mt-0.5 text-xs text-blue-100">관공서·공공기관 채용 →</span>
            </a>
            <a
              href={CIVILIAN_JOBS}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col rounded-2xl p-5 text-white shadow-md bg-gradient-to-br from-sky-500 to-blue-600 hover:brightness-110 transition"
            >
              <span className="text-3xl">🏢</span>
              <span className="mt-2 text-lg font-bold">민간 일자리</span>
              <span className="mt-0.5 text-xs text-sky-100">기업·사업장 채용 →</span>
            </a>
          </div>
          <a
            href={WORKNET}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 flex items-center justify-center gap-2 rounded-2xl p-4 text-white shadow-md bg-gradient-to-br from-emerald-600 to-teal-600 hover:brightness-110 transition"
          >
            <span className="text-2xl">🌐</span>
            <span className="text-lg font-bold">워크넷 (전국 채용정보)</span>
            <span className="text-emerald-100">→</span>
          </a>
          <p className="mt-2 text-xs text-gray-400">공식 채용 게시판으로 연결됩니다.</p>
        </section>

        {/* 이웃 구인구직 (운영자 승인제) */}
        <section>
          <div className="flex items-center justify-between gap-2 mb-3">
            <h2 className="text-lg font-extrabold text-gray-900">🤝 이웃 구인·구직</h2>
            <Link
              href="/jobs/new"
              className="shrink-0 rounded-xl bg-orange-500 px-4 py-2.5 text-sm font-bold text-white shadow hover:bg-orange-600 transition-colors"
            >
              ✏️ 글 올리기
            </Link>
          </div>

          {approvedPosts.length === 0 ? (
            <div className="rounded-2xl border border-dashed border-gray-300 bg-white p-8 text-center">
              <p className="text-4xl">📝</p>
              <p className="mt-3 text-[15px] font-semibold text-gray-700">
                아직 등록된 이웃 글이 없어요
              </p>
              <p className="mt-1 text-sm text-gray-500">
                첫 구인·구직 글을 남겨보세요.
                <br />모든 글은 운영자 승인 후 게시됩니다.
              </p>
              <Link
                href="/jobs/new"
                className="mt-4 inline-block rounded-xl bg-orange-500 px-5 py-3 text-sm font-bold text-white hover:bg-orange-600 transition-colors"
              >
                ✏️ 글 올리기
              </Link>
            </div>
          ) : (
            <div className="space-y-3">
              {approvedPosts.map((p) => (
                <article
                  key={p.id}
                  className="bg-white rounded-2xl border border-gray-200 p-5"
                >
                  <div className="flex items-center gap-2">
                    <span
                      className={`rounded-full px-2.5 py-0.5 text-xs font-bold ${
                        p.kind === "구인"
                          ? "bg-blue-100 text-blue-700"
                          : "bg-orange-100 text-orange-700"
                      }`}
                    >
                      {p.kind}
                    </span>
                    <h3 className="text-base font-bold text-gray-900">{p.title}</h3>
                  </div>
                  <div className="mt-2 text-sm text-gray-600">📍 {p.region}</div>
                  <p className="mt-1.5 text-[15px] leading-relaxed text-gray-700 whitespace-pre-wrap">
                    {p.body}
                  </p>
                  <div className="mt-3 pt-3 border-t border-gray-100 text-sm font-semibold text-gray-800">
                    📞 {p.contact}
                  </div>
                </article>
              ))}
            </div>
          )}
        </section>
      </main>
    </div>
  );
}
