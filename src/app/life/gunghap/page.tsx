"use client";

import Link from "next/link";
import { useState } from "react";

const ZODIAC = ["쥐", "소", "범", "토끼", "용", "뱀", "말", "양", "원숭이", "닭", "개", "돼지"];
const EMOJI = ["🐭", "🐮", "🐯", "🐰", "🐲", "🐍", "🐴", "🐑", "🐵", "🐔", "🐶", "🐷"];

// 삼합
const SAMHAP = [
  [0, 4, 8],
  [1, 5, 9],
  [2, 6, 10],
  [3, 7, 11],
];
// 육합 쌍
const YUKHAP = new Set(["0-1", "2-11", "3-10", "4-9", "5-8", "6-7"]);

function key(a: number, b: number) {
  const lo = Math.min(a, b);
  const hi = Math.max(a, b);
  return `${lo}-${hi}`;
}

function score(a: number, b: number) {
  const variance = (a * 3 + b * 5) % 8; // 0~7, 안정적
  const sameSamhap = SAMHAP.some((g) => g.includes(a) && g.includes(b) && a !== b);
  const isYukhap = YUKHAP.has(key(a, b));
  const isChung = (a + 6) % 12 === b;
  const same = a === b;

  if (sameSamhap) return { s: 88 + variance, band: "천생연분" };
  if (isYukhap) return { s: 82 + variance, band: "찰떡궁합" };
  if (isChung) return { s: 46 + variance, band: "노력이 필요해요" };
  if (same) return { s: 70 + variance, band: "편안한 사이" };
  return { s: 66 + variance, band: "무난한 궁합" };
}

const MSG: Record<string, string> = {
  천생연분: "서로를 끌어당기는 조합이에요. 말하지 않아도 통하는 사이. 큰일도 함께라면 든든합니다.",
  찰떡궁합: "부족한 곳을 서로 채워주는 짝꿍. 다툼이 있어도 금세 화해합니다.",
  "노력이 필요해요": "성격이 반대라 부딪힐 수 있어요. 하지만 반대라서 배울 것도 많습니다. 한 발씩 양보가 답.",
  "편안한 사이": "닮은꼴이라 마음이 편해요. 가끔은 서로 자극이 되는 새로움도 챙겨보세요.",
  "무난한 궁합": "큰 문제 없이 잘 지내는 사이. 작은 배려가 관계를 오래가게 합니다.",
};

export default function GunghapPage() {
  const [me, setMe] = useState<number | null>(null);
  const [you, setYou] = useState<number | null>(null);
  const [res, setRes] = useState<null | { s: number; band: string }>(null);

  function run() {
    if (me === null || you === null) return;
    setRes(score(me, you));
  }

  function Picker({
    label,
    val,
    set,
  }: {
    label: string;
    val: number | null;
    set: (n: number) => void;
  }) {
    return (
      <div>
        <p className="text-sm font-bold text-gray-800 mb-2">{label}</p>
        <div className="grid grid-cols-6 gap-1.5">
          {ZODIAC.map((z, i) => (
            <button
              key={z}
              type="button"
              onClick={() => set(i)}
              className={`flex flex-col items-center rounded-xl py-2 text-xs font-semibold transition ${
                val === i
                  ? "bg-pink-500 text-white"
                  : "bg-gray-50 text-gray-600 ring-1 ring-gray-200 hover:bg-gray-100"
              }`}
            >
              <span className="text-lg">{EMOJI[i]}</span>
              {z}
            </button>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-gradient-to-br from-pink-500 to-rose-600 text-white px-4 py-4">
        <div className="max-w-2xl mx-auto">
          <Link
            href="/life"
            className="inline-flex items-center gap-2 rounded-2xl bg-white px-6 py-3.5 text-lg font-extrabold text-rose-600 shadow-md hover:bg-rose-50 transition-colors"
          >
            ← 즐기기 홈
          </Link>
          <h1 className="mt-4 text-2xl font-extrabold">💑 띠 궁합 보기</h1>
          <p className="mt-1 text-sm text-pink-50">두 사람의 띠를 골라보세요 (부부·자녀·친구 다 좋아요)</p>
        </div>
      </header>

      <main className="max-w-2xl mx-auto px-4 py-6">
        <div className="bg-white rounded-2xl border border-gray-200 p-5 space-y-4">
          <Picker label="내 띠" val={me} set={setMe} />
          <Picker label="상대 띠" val={you} set={setYou} />
          <button
            type="button"
            onClick={run}
            disabled={me === null || you === null}
            className="w-full rounded-xl bg-pink-500 px-5 py-3.5 text-base font-bold text-white hover:bg-pink-600 disabled:bg-gray-300"
          >
            궁합 보기 💕
          </button>
        </div>

        {res && me !== null && you !== null && (
          <div className="mt-5 rounded-3xl bg-gradient-to-br from-pink-500 to-rose-600 p-6 text-white shadow-lg text-center">
            <p className="text-3xl">
              {EMOJI[me]} 💕 {EMOJI[you]}
            </p>
            <p className="mt-2 text-sm text-pink-100">
              {ZODIAC[me]}띠 × {ZODIAC[you]}띠
            </p>
            <p className="mt-3 text-5xl font-black">{res.s}점</p>
            <p className="mt-2 inline-block rounded-full bg-white/20 px-4 py-1 text-lg font-bold">
              {res.band}
            </p>
            <p className="mt-3 text-[15px] leading-relaxed text-pink-50">{MSG[res.band]}</p>
            <p className="mt-4 text-xs text-pink-200">재미로 보는 궁합이에요 🙂</p>
          </div>
        )}
      </main>
    </div>
  );
}
