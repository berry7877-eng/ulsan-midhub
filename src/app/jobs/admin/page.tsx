"use client";

import Link from "next/link";
import { useState } from "react";
import type { JobPost } from "@/lib/supabase";

export default function AdminPage() {
  const [pass, setPass] = useState("");
  const [posts, setPosts] = useState<JobPost[] | null>(null);
  const [msg, setMsg] = useState("");
  const [busy, setBusy] = useState(false);

  async function load() {
    setBusy(true);
    setMsg("");
    const res = await fetch(`/api/admin?pass=${encodeURIComponent(pass)}`);
    setBusy(false);
    if (res.status === 401) {
      setMsg("암호가 맞지 않아요.");
      return;
    }
    if (res.status === 503) {
      setMsg("Supabase가 아직 연결되지 않았어요 (환경변수 필요).");
      return;
    }
    if (!res.ok) {
      setMsg("불러오기 실패. 잠시 후 다시 시도해주세요.");
      return;
    }
    const data = await res.json();
    setPosts(data.posts ?? []);
  }

  async function act(id: string, action: "approve" | "reject") {
    setBusy(true);
    const res = await fetch("/api/admin", {
      method: "POST",
      headers: { "Content-Type": "application/json", "x-admin-pass": pass },
      body: JSON.stringify({ id, action }),
    });
    setBusy(false);
    if (res.ok) {
      setPosts((prev) => (prev ? prev.filter((p) => p.id !== id) : prev));
    } else {
      setMsg("처리 실패. 다시 시도해주세요.");
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-gray-900 text-white px-4 py-4">
        <div className="max-w-2xl mx-auto">
          <Link href="/jobs" className="text-sm text-gray-300 hover:text-white">
            ← 구인구직
          </Link>
          <h1 className="mt-2 text-2xl font-extrabold">🔐 운영자 승인</h1>
          <p className="mt-1 text-sm text-gray-400">대기중인 이웃 구인구직 글을 승인·거절합니다</p>
        </div>
      </header>

      <main className="max-w-2xl mx-auto px-4 py-6">
        <div className="flex gap-2">
          <input
            type="password"
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            placeholder="운영자 암호"
            className="flex-1 rounded-xl border border-gray-300 px-4 py-3 text-base focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
          />
          <button
            type="button"
            onClick={load}
            disabled={busy || !pass}
            className="rounded-xl bg-blue-600 px-5 py-3 text-sm font-bold text-white hover:bg-blue-700 disabled:bg-gray-300"
          >
            {busy ? "…" : "불러오기"}
          </button>
        </div>
        {msg && <p className="mt-3 text-sm font-semibold text-red-600">{msg}</p>}

        {posts && (
          <div className="mt-6 space-y-3">
            <p className="text-sm text-gray-500">대기중 {posts.length}건</p>
            {posts.length === 0 && (
              <p className="rounded-2xl border border-dashed border-gray-300 bg-white p-8 text-center text-gray-500">
                승인 대기중인 글이 없어요.
              </p>
            )}
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
                <div className="mt-2 text-sm font-semibold text-gray-800">📞 {p.contact}</div>
                <div className="mt-4 flex gap-2">
                  <button
                    type="button"
                    onClick={() => act(p.id, "approve")}
                    disabled={busy}
                    className="flex-1 rounded-xl bg-emerald-600 px-4 py-2.5 text-sm font-bold text-white hover:bg-emerald-700 disabled:opacity-50"
                  >
                    ✓ 승인
                  </button>
                  <button
                    type="button"
                    onClick={() => act(p.id, "reject")}
                    disabled={busy}
                    className="flex-1 rounded-xl bg-gray-200 px-4 py-2.5 text-sm font-bold text-gray-700 hover:bg-gray-300 disabled:opacity-50"
                  >
                    거절
                  </button>
                </div>
              </article>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
