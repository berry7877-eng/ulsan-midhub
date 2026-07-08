"use client";

import Link from "next/link";
import { useState } from "react";
import { supabase } from "@/lib/supabase";

// Supabase 미설정 시 폴백: 운영자 이메일로 접수
const ADMIN_EMAIL = "berry7877@gmail.com";

export default function NewJobPost() {
  const [kind, setKind] = useState<"구인" | "구직">("구인");
  const [title, setTitle] = useState("");
  const [region, setRegion] = useState("");
  const [contact, setContact] = useState("");
  const [body, setBody] = useState("");
  const [sent, setSent] = useState(false);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");

  const canSubmit = title.trim() && region.trim() && contact.trim() && body.trim();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!canSubmit || busy) return;
    setBusy(true);
    setError("");

    if (supabase) {
      const { error: err } = await supabase
        .from("job_posts")
        .insert({ kind, title, region, contact, body });
      if (err) {
        setError("등록 중 문제가 생겼어요. 잠시 후 다시 시도해주세요.");
        setBusy(false);
        return;
      }
      setSent(true);
      setBusy(false);
      return;
    }

    // 폴백: 메일로 접수
    const subject = `[미드허브 ${kind}] ${title}`;
    const text = [
      `구분: ${kind}`,
      `제목: ${title}`,
      `지역: ${region}`,
      `연락처: ${contact}`,
      "",
      "내용:",
      body,
    ].join("\n");
    window.location.href = `mailto:${ADMIN_EMAIL}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(text)}`;
    setSent(true);
    setBusy(false);
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-blue-600 text-white px-4 py-4">
        <div className="max-w-2xl mx-auto">
          <Link
            href="/jobs"
            className="inline-flex items-center gap-2 rounded-2xl bg-white px-5 py-3 text-base font-extrabold text-blue-700 shadow-md hover:bg-blue-50 transition-colors"
          >
            ← 구인구직으로
          </Link>
          <h1 className="mt-4 text-2xl font-extrabold">✏️ 구인·구직 글 올리기</h1>
          <p className="mt-1 text-sm text-blue-100">
            누구나 올릴 수 있어요 · 운영자 승인 후 게시됩니다
          </p>
        </div>
      </header>

      <main className="max-w-2xl mx-auto px-4 py-6">
        {sent ? (
          <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-8 text-center">
            <p className="text-4xl">✅</p>
            <p className="mt-3 text-lg font-bold text-emerald-900">접수되었습니다</p>
            <p className="mt-2 text-[15px] leading-relaxed text-emerald-800">
              {supabase ? (
                <>운영자 확인(승인) 후 게시판에 올라갑니다. 조금만 기다려 주세요 🙂</>
              ) : (
                <>
                  메일 앱에서 <b>보내기</b>를 누르면 운영자에게 전달됩니다.
                  <br />운영자 확인 후 게시판에 올라갑니다.
                </>
              )}
            </p>
            <Link
              href="/jobs"
              className="mt-5 inline-block rounded-xl bg-blue-600 px-5 py-3 text-sm font-bold text-white hover:bg-blue-700 transition-colors"
            >
              구인구직으로 돌아가기
            </Link>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* 구분 */}
            <div>
              <label className="block text-sm font-bold text-gray-800 mb-2">구분</label>
              <div className="grid grid-cols-2 gap-3">
                {(["구인", "구직"] as const).map((k) => (
                  <button
                    key={k}
                    type="button"
                    onClick={() => setKind(k)}
                    className={`rounded-xl px-4 py-3 text-base font-bold transition ${
                      kind === k
                        ? "bg-blue-600 text-white"
                        : "bg-white text-gray-600 ring-1 ring-gray-300"
                    }`}
                  >
                    {k === "구인" ? "🙋 사람 구해요 (구인)" : "💪 일 구해요 (구직)"}
                  </button>
                ))}
              </div>
            </div>

            <Field label="제목" value={title} onChange={setTitle} placeholder="예) 식당 주방 보조 구합니다" />
            <Field label="지역" value={region} onChange={setRegion} placeholder="예) 울산 남구 삼산동" />
            <Field
              label="연락 방법"
              value={contact}
              onChange={setContact}
              placeholder="예) 010-1234-5678 / 카톡 ID"
            />

            <div>
              <label className="block text-sm font-bold text-gray-800 mb-2">상세 내용</label>
              <textarea
                value={body}
                onChange={(e) => setBody(e.target.value)}
                rows={5}
                placeholder="근무 시간, 급여, 조건 등을 편하게 적어주세요."
                className="w-full rounded-xl border border-gray-300 px-4 py-3 text-base text-gray-900 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
              />
            </div>

            <p className="text-xs text-gray-400 leading-relaxed">
              전화번호 등 개인정보는 공개 게시됩니다. 꼭 필요한 정보만 적어주세요.
              부적절한 글은 게시되지 않을 수 있습니다.
            </p>

            {error && (
              <p className="text-sm font-semibold text-red-600">{error}</p>
            )}
            <button
              type="submit"
              disabled={!canSubmit || busy}
              className="w-full rounded-2xl bg-blue-600 px-5 py-4 text-lg font-bold text-white shadow-md transition-colors hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-gray-300"
            >
              {busy ? "제출 중…" : "운영자에게 제출하기"}
            </button>
          </form>
        )}
      </main>
    </div>
  );
}

function Field({
  label,
  value,
  onChange,
  placeholder,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder: string;
}) {
  return (
    <div>
      <label className="block text-sm font-bold text-gray-800 mb-2">{label}</label>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full rounded-xl border border-gray-300 px-4 py-3 text-base text-gray-900 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
      />
    </div>
  );
}
