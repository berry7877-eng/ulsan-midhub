import Link from "next/link";
import { getPosts } from "@/lib/posts";
import HealthCards from "./HealthCards";

export const metadata = {
  title: "건강 — 울산 미드허브",
  description: "중장년 건강을 지키는 쉬운 정보. 키워드를 누르면 자세히 열려요. 매일 업데이트.",
};

export default function HealthPage() {
  const posts = getPosts("health");

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-gradient-to-br from-teal-500 to-emerald-600 text-white px-4 py-4">
        <div className="max-w-2xl mx-auto">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-2xl bg-white px-6 py-3.5 text-lg font-extrabold text-emerald-700 shadow-md hover:bg-emerald-50 transition-colors"
          >
            🏠 홈으로
          </Link>
          <h1 className="mt-4 text-2xl font-extrabold">건강</h1>
          <p className="mt-1 text-sm text-emerald-50">
            키워드를 누르면 자세한 정보가 열려요 · 매일 새로워집니다
          </p>
        </div>
      </header>

      <main className="max-w-2xl mx-auto px-4 py-6">
        {posts.length === 0 ? (
          <p className="text-center text-gray-500 py-10">곧 첫 정보가 올라옵니다 🙂</p>
        ) : (
          <HealthCards posts={posts} />
        )}
      </main>
    </div>
  );
}
