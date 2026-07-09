import Link from "next/link";

export const metadata = {
  title: "오늘의 추천 — 울산 미드허브",
  description: "울산 중장년에게 권하는 나들이·배움·앱·소소한 즐거움. 오늘 하나만 해봐도 좋아요.",
};

const sections = [
  {
    icon: "🚶",
    title: "몸이 가벼워지는 울산 나들이",
    items: [
      { name: "태화강 국가정원 십리대숲", desc: "평평해서 걷기 편하고, 대숲 사이 바람이 시원해요. 아침 산책 강력 추천." },
      { name: "대왕암공원 해안 산책로", desc: "바다 보며 걷다 보면 30분이 훌쩍. 무릎에 부담 적은 완만한 길이에요." },
      { name: "간절곶 · 진하해변", desc: "탁 트인 바다로 기분 전환. 커피 한 잔 들고 벤치에 앉아만 있어도 좋습니다." },
    ],
  },
  {
    icon: "🎨",
    title: "새로 배워보기 (부담 없이)",
    items: [
      { name: "스마트폰 사진 잘 찍기", desc: "손주·꽃·풍경을 예쁘게. 유튜브에 '중장년 스마트폰 사진'만 쳐도 쉬운 강의가 많아요." },
      { name: "평생교육 무료 강좌", desc: "울산인재평생교육진흥원에서 저렴·무료 취미/자격 강좌를 열어요. 미래 → 교육에서 확인." },
      { name: "AI에게 말 걸어보기", desc: "챗GPT에 '오늘 저녁 뭐 먹지?'부터. 홈 → AI에서 3분이면 시작합니다." },
    ],
  },
  {
    icon: "📱",
    title: "알아두면 편한 앱·채널",
    items: [
      { name: "'내 곁에 국민연금' 앱", desc: "내 예상 연금액을 5분 만에 확인. 노후 계획의 첫걸음이에요." },
      { name: "카카오맵 · 네이버지도 길찾기", desc: "버스 도착 시간, 지하철 환승까지. 낯선 곳도 걱정 없어요." },
      { name: "유튜브 '건강 체조' 채널", desc: "따라 하기 쉬운 10분 실내 운동. 비 오는 날 집에서 딱." },
    ],
  },
  {
    icon: "☕",
    title: "소소한 즐거움 한 스푼",
    items: [
      { name: "동네 도서관 하루 나기", desc: "시원하고 조용하고 공짜. 신문·잡지·베스트셀러까지 다 있어요." },
      { name: "라디오·팟캐스트 산책", desc: "이어폰 하나 꽂고 걸으면 30분이 짧게 느껴집니다." },
      { name: "손주·자녀에게 영상통화", desc: "용건 없어도 얼굴 한 번. 오늘 가장 기분 좋아지는 3분." },
    ],
  },
];

export default function RecommendPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-gradient-to-br from-rose-500 to-orange-500 text-white px-4 py-4">
        <div className="max-w-2xl mx-auto">
          <Link
            href="/life"
            className="inline-flex items-center gap-2 rounded-2xl bg-white px-6 py-3.5 text-lg font-extrabold text-orange-500 shadow-md hover:bg-orange-50 transition-colors"
          >
            ← 오늘
          </Link>
          <h1 className="mt-4 text-2xl font-extrabold">⭐ 오늘의 추천</h1>
          <p className="mt-1 text-sm text-rose-50">오늘 하나만 해봐도 하루가 달라져요.</p>
        </div>
      </header>

      <main className="max-w-2xl mx-auto px-4 py-6 space-y-6">
        {sections.map((s) => (
          <section key={s.title}>
            <h2 className="text-lg font-extrabold text-gray-900 mb-3">
              {s.icon} {s.title}
            </h2>
            <div className="space-y-3">
              {s.items.map((it) => (
                <div key={it.name} className="bg-white rounded-2xl border border-gray-200 p-5">
                  <h3 className="text-base font-bold text-gray-900">{it.name}</h3>
                  <p className="mt-1 text-[15px] leading-relaxed text-gray-600">{it.desc}</p>
                </div>
              ))}
            </div>
          </section>
        ))}

        <p className="text-center text-xs text-gray-400">
          울산 미드허브가 골라본 추천이에요. 마음 가는 것 하나면 충분합니다 🙂
        </p>
      </main>
    </div>
  );
}
