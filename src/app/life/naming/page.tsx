"use client";

import Link from "next/link";
import { useState } from "react";

const POOLS: Record<string, { label: string; syl: string[] }> = {
  bright: {
    label: "밝고 희망차게",
    syl: ["하", "온", "별", "봄", "빛", "해", "솔", "슬", "다", "라", "찬", "이"],
  },
  wise: {
    label: "지혜롭고 차분하게",
    syl: ["서", "윤", "지", "현", "유", "연", "우", "준", "은", "예", "주", "민"],
  },
  strong: {
    label: "강하고 든든하게",
    syl: ["건", "강", "태", "훈", "진", "석", "재", "성", "호", "동", "우", "현"],
  },
  warm: {
    label: "복스럽고 정겹게",
    syl: ["복", "영", "정", "명", "선", "경", "숙", "자", "옥", "순", "미", "희"],
  },
};

function makeNames(surname: string, pool: string[]): string[] {
  const set = new Set<string>();
  let guard = 0;
  while (set.size < 5 && guard < 200) {
    guard++;
    const a = pool[Math.floor(Math.random() * pool.length)];
    const b = pool[Math.floor(Math.random() * pool.length)];
    if (a === b) continue;
    set.add(`${surname}${a}${b}`);
  }
  return [...set];
}

export default function NamingPage() {
  const [surname, setSurname] = useState("");
  const [feel, setFeel] = useState("bright");
  const [names, setNames] = useState<string[]>([]);

  function run() {
    if (!surname.trim()) return;
    setNames(makeNames(surname.trim().slice(0, 2), POOLS[feel].syl));
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-gradient-to-br from-amber-500 to-orange-600 text-white px-4 py-4">
        <div className="max-w-2xl mx-auto">
          <Link
            href="/life"
            className="inline-flex items-center gap-2 rounded-2xl bg-white px-6 py-3.5 text-lg font-extrabold text-orange-600 shadow-md hover:bg-orange-50 transition-colors"
          >
            ← 즐기기 홈
          </Link>
          <h1 className="mt-4 text-2xl font-extrabold">🖋️ 이름 짓기 도우미</h1>
          <p className="mt-1 text-sm text-amber-50">손주·반려동물·가게 이름까지, 아이디어를 드려요</p>
        </div>
      </header>

      <main className="max-w-2xl mx-auto px-4 py-6">
        <div className="bg-white rounded-2xl border border-gray-200 p-5 space-y-4">
          <div>
            <label className="block text-sm font-bold text-gray-800 mb-2">성(姓)</label>
            <input
              value={surname}
              onChange={(e) => setSurname(e.target.value.slice(0, 2))}
              placeholder="예) 김"
              className="w-full rounded-xl border border-gray-300 px-4 py-3 text-base focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-200"
            />
          </div>
          <div>
            <label className="block text-sm font-bold text-gray-800 mb-2">어떤 느낌으로?</label>
            <div className="grid grid-cols-2 gap-2">
              {Object.entries(POOLS).map(([k, v]) => (
                <button
                  key={k}
                  type="button"
                  onClick={() => setFeel(k)}
                  className={`rounded-xl px-3 py-2.5 text-sm font-semibold transition ${
                    feel === k
                      ? "bg-amber-500 text-white"
                      : "bg-gray-50 text-gray-600 ring-1 ring-gray-200 hover:bg-gray-100"
                  }`}
                >
                  {v.label}
                </button>
              ))}
            </div>
          </div>
          <button
            type="button"
            onClick={run}
            disabled={!surname.trim()}
            className="w-full rounded-xl bg-amber-500 px-5 py-3.5 text-base font-bold text-white hover:bg-amber-600 disabled:bg-gray-300"
          >
            이름 추천받기 ✨
          </button>
        </div>

        {names.length > 0 && (
          <div className="mt-5">
            <div className="grid grid-cols-1 gap-2">
              {names.map((n) => (
                <div
                  key={n}
                  className="rounded-2xl bg-white border border-amber-200 p-4 text-center text-2xl font-extrabold text-gray-900"
                >
                  {n}
                </div>
              ))}
            </div>
            <button
              type="button"
              onClick={run}
              className="mt-3 w-full rounded-xl bg-white px-4 py-3 text-sm font-bold text-amber-700 ring-1 ring-amber-200 hover:bg-amber-50"
            >
              🔄 다른 이름 더 보기
            </button>
            <p className="mt-3 text-center text-xs text-gray-400">
              재미·아이디어용이에요. 정식 작명(한자·사주)은 전문가와 상의하세요 🙂
            </p>
          </div>
        )}
      </main>
    </div>
  );
}
