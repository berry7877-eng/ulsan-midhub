import Link from "next/link";

export const metadata = {
  title: "배워보기 — 울산 미드허브",
  description: "부담 없이 새로 배워보기. 스마트폰·취미·평생교육·AI 첫걸음까지.",
};

const items = [
  { name: "스마트폰 사진 잘 찍기", desc: "손주·꽃·풍경을 예쁘게. 유튜브에 '중장년 스마트폰 사진'만 쳐도 쉬운 강의가 많아요." },
  { name: "평생교육 무료 강좌", desc: "울산인재평생교육진흥원에서 저렴·무료 취미/자격 강좌를 열어요. 홈 → 미래 → 교육에서 확인." },
  { name: "AI에게 말 걸어보기", desc: "챗GPT에 '오늘 저녁 뭐 먹지?'부터. 홈 → AI에서 3분이면 시작합니다." },
  { name: "유튜브로 배우기", desc: "요리·기타·화투·엑셀까지. 무엇이든 '초보 강의'를 붙여 검색하면 나와요." },
  { name: "도서관 문화강좌", desc: "동네 도서관·주민센터에 저렴한 강좌가 많아요. 새 친구는 덤." },
];

export default function StudyPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-gradient-to-br from-sky-500 to-blue-700 text-white px-4 py-4">
        <div className="max-w-2xl mx-auto">
          <Link
            href="/life"
            className="inline-flex items-center gap-2 rounded-2xl bg-white px-6 py-3.5 text-lg font-extrabold text-blue-700 shadow-md hover:bg-blue-50 transition-colors"
          >
            ← 오늘
          </Link>
          <h1 className="mt-4 text-2xl font-extrabold">배워보기</h1>
          <p className="mt-1 text-sm text-sky-100">늦지 않았어요. 오늘 하나 시작해봐요.</p>
        </div>
      </header>

      <main className="max-w-2xl mx-auto px-4 py-6 space-y-3">
        {items.map((it) => (
          <div key={it.name} className="bg-white rounded-2xl border border-gray-200 p-5">
            <h3 className="text-base font-bold text-gray-900">{it.name}</h3>
            <p className="mt-1 text-[15px] leading-relaxed text-gray-600">{it.desc}</p>
          </div>
        ))}
      </main>
    </div>
  );
}
