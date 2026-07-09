"use client";

import Link from "next/link";
import { useState } from "react";

const ZODIAC = [
  { name: "쥐", emoji: "🐭" },
  { name: "소", emoji: "🐮" },
  { name: "범", emoji: "🐯" },
  { name: "토끼", emoji: "🐰" },
  { name: "용", emoji: "🐲" },
  { name: "뱀", emoji: "🐍" },
  { name: "말", emoji: "🐴" },
  { name: "양", emoji: "🐑" },
  { name: "원숭이", emoji: "🐵" },
  { name: "닭", emoji: "🐔" },
  { name: "개", emoji: "🐶" },
  { name: "돼지", emoji: "🐷" },
];

const POOLS = {
  총운: [
    "막혔던 일이 슬슬 풀리는 날. 서두르지 말고 하나씩 처리하세요.",
    "귀인을 만날 운. 오늘 걸려온 전화 한 통이 반갑게 다가옵니다.",
    "무리한 결정은 잠시 미루세요. 내일이 훨씬 낫습니다.",
    "작은 행운이 겹치는 날. 기분 좋은 소식이 들립니다.",
    "마음이 조금 무겁다면 산책 한 번. 생각이 정리됩니다.",
    "그동안의 노력이 인정받는 하루. 자신감을 가지세요.",
  ],
  재물: [
    "지갑을 잘 챙기세요. 작은 지출이 새는 날입니다.",
    "예상 못한 곳에서 이득이 생길 수 있어요.",
    "큰돈 쓸 일은 하루 미루면 후회가 없습니다.",
    "묵혀둔 돈·포인트를 확인해보세요. 잊고 있던 게 있어요.",
    "친구와의 돈거래는 오늘만큼은 조심하세요.",
    "알뜰한 하루가 복이 됩니다. 장보기 전 목록부터.",
  ],
  애정: [
    "따뜻한 말 한마디가 관계를 부드럽게 합니다.",
    "가족과 함께하는 식사에 좋은 기운이 있어요.",
    "오래 연락 못 한 사람에게 안부를 전해보세요.",
    "작은 오해는 오늘 풀고 가는 게 좋습니다.",
    "웃음이 인연을 부르는 날. 표정을 밝게.",
    "혼자만의 시간도 소중합니다. 무리한 약속은 사양해도 좋아요.",
  ],
  건강: [
    "무릎·허리를 아끼세요. 무거운 건 나눠 드세요.",
    "물 한 잔 자주. 오늘은 특히 수분이 중요합니다.",
    "가벼운 스트레칭이 몸을 살립니다. 10분이면 충분.",
    "충분한 잠이 보약. 오늘은 일찍 쉬세요.",
    "짜게 먹지 않도록. 국물은 조금만.",
    "햇볕 30분이 기분과 뼈를 챙깁니다.",
  ],
};

function pick(arr: string[], seed: number) {
  return arr[Math.abs(seed) % arr.length];
}

export default function SajuPage() {
  const [year, setYear] = useState("");
  const [result, setResult] = useState<null | {
    z: (typeof ZODIAC)[number];
    stars: number;
    lines: { k: string; v: string }[];
  }>(null);

  function run() {
    const y = parseInt(year, 10);
    if (!y || y < 1930 || y > 2020) return;
    const zi = ((y - 4) % 12 + 12) % 12;
    const z = ZODIAC[zi];
    const now = new Date();
    const dayKey = now.getFullYear() * 10000 + (now.getMonth() + 1) * 100 + now.getDate();
    const base = dayKey + zi * 7;
    const stars = 2 + (Math.abs(base) % 4); // 2~5
    setResult({
      z,
      stars,
      lines: [
        { k: "총운", v: pick(POOLS.총운, base) },
        { k: "재물운", v: pick(POOLS.재물, base + 1) },
        { k: "애정운", v: pick(POOLS.애정, base + 2) },
        { k: "건강운", v: pick(POOLS.건강, base + 3) },
      ],
    });
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-gradient-to-br from-violet-600 to-purple-700 text-white px-4 py-4">
        <div className="max-w-2xl mx-auto">
          <Link
            href="/life"
            className="inline-flex items-center gap-2 rounded-2xl bg-white px-6 py-3.5 text-lg font-extrabold text-purple-700 shadow-md hover:bg-purple-50 transition-colors"
          >
            ← 즐기기 홈
          </Link>
          <h1 className="mt-4 text-2xl font-extrabold">🔮 오늘의 운세</h1>
          <p className="mt-1 text-sm text-violet-100">태어난 해만 넣으면 오늘의 띠 운세를 봐드려요</p>
        </div>
      </header>

      <main className="max-w-2xl mx-auto px-4 py-6">
        <div className="bg-white rounded-2xl border border-gray-200 p-5">
          <label className="block text-sm font-bold text-gray-800 mb-2">태어난 해 (예: 1968)</label>
          <div className="flex gap-2">
            <input
              inputMode="numeric"
              value={year}
              onChange={(e) => setYear(e.target.value.replace(/\D/g, "").slice(0, 4))}
              placeholder="4자리 연도"
              className="flex-1 rounded-xl border border-gray-300 px-4 py-3 text-base focus:border-violet-500 focus:outline-none focus:ring-2 focus:ring-violet-200"
            />
            <button
              type="button"
              onClick={run}
              disabled={year.length !== 4}
              className="rounded-xl bg-violet-600 px-5 py-3 text-sm font-bold text-white hover:bg-violet-700 disabled:bg-gray-300"
            >
              운세 보기
            </button>
          </div>
        </div>

        {result && (
          <div className="mt-5 rounded-3xl bg-gradient-to-br from-violet-600 to-purple-700 p-6 text-white shadow-lg">
            <div className="text-center">
              <div className="text-5xl">{result.z.emoji}</div>
              <p className="mt-2 text-lg font-bold">{result.z.name}띠 · 오늘의 운세</p>
              <p className="mt-1 text-2xl">{"★".repeat(result.stars)}{"☆".repeat(5 - result.stars)}</p>
            </div>
            <div className="mt-4 space-y-2">
              {result.lines.map((l) => (
                <div key={l.k} className="rounded-2xl bg-white/15 p-4">
                  <p className="text-sm font-bold text-violet-100">{l.k}</p>
                  <p className="mt-0.5 text-[15px] leading-relaxed">{l.v}</p>
                </div>
              ))}
            </div>
            <p className="mt-4 text-center text-xs text-violet-200">
              재미로 보는 운세예요 🙂 매일 달라집니다.
            </p>
          </div>
        )}
      </main>
    </div>
  );
}
