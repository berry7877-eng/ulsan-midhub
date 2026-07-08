import Link from "next/link";
import { supabase, type JobPost } from "@/lib/supabase";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "이웃 구인·구직 — 울산 미드허브",
  description: "울산 이웃끼리 나누는 구인·구직 게시판. 누구나 올리고 운영자 승인 후 게시됩니다.",
};

async function getApprovedPosts(): Promise<JobPost[]> {
  if (!supabase) return [];
  const { data } = await supabase
    .from("job_posts")
    .select("*")
    .eq("status", "approved")
    .order("created_at", { ascending: false });
  return data ?? [];
}

export default async function BoardPage() {
  const posts = await getApprovedPosts();

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-blue-600 text-white px-4 py-4">
        <div className="max-w-2xl mx-auto">
          <Link
            href="/jobs"
            className="inline-flex items-center gap-2 rounded-2xl bg-white px-6 py-3.5 text-lg font-extrabold text-blue-700 shadow-md hover:bg-blue-50 transition-colors"
          >
            ← 취업 홈
          </Link>
          <h1 className="mt-4 text-2xl font-extrabold">🤝 이웃 구인·구직</h1>
          <p className="mt-1 text-sm text-blue-100">
            누구나 올릴 수 있어요 · 운영자 승인 후 게시됩니다
          </p>
        </div>
      </header>

      <main className="max-w-2xl mx-auto px-4 py-6">
        <div className="flex justify-end mb-3">
          <Link
            href="/jobs/new"
            className="rounded-xl bg-orange-500 px-4 py-2.5 text-sm font-bold text-white shadow hover:bg-orange-600 transition-colors"
          >
            ✏️ 글 올리기
          </Link>
        </div>

        {posts.length === 0 ? (
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
            {posts.map((p) => (
              <article key={p.id} className="bg-white rounded-2xl border border-gray-200 p-5">
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
      </main>
    </div>
  );
}
