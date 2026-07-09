import Link from "next/link";

export const metadata = {
  title: "생활편의 — 울산 미드허브",
  description: "알아두면 편한 앱·서비스·생활 꿀팁. 중장년 일상이 한결 편해져요.",
};

const items = [
  { name: "'내 곁에 국민연금' 앱", desc: "내 예상 연금액을 5분 만에 확인. 노후 계획의 첫걸음이에요." },
  { name: "카카오맵 · 네이버지도", desc: "버스 도착 시간, 지하철 환승까지. 낯선 곳도 걱정 없어요." },
  { name: "정부24 · 복지로", desc: "각종 증명서 발급과 '내가 받을 수 있는 복지'를 온라인으로 확인." },
  { name: "유튜브 '건강 체조' 채널", desc: "따라 하기 쉬운 10분 실내 운동. 비 오는 날 집에서 딱." },
  { name: "스마트폰 글씨 크게 하기", desc: "설정 → 화면/글자 크기에서 키우면 눈이 편해요. 밝기도 함께 조절." },
  { name: "보이스피싱·스미싱 조심", desc: "'검찰·택배·환급' 문자 속 링크는 절대 누르지 마세요. 의심되면 112·1332로 확인." },
];

export default function TipsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-gradient-to-br from-teal-500 to-emerald-700 text-white px-4 py-4">
        <div className="max-w-2xl mx-auto">
          <Link
            href="/life"
            className="inline-flex items-center gap-2 rounded-2xl bg-white px-6 py-3.5 text-lg font-extrabold text-emerald-700 shadow-md hover:bg-emerald-50 transition-colors"
          >
            ← 오늘
          </Link>
          <h1 className="mt-4 text-2xl font-extrabold">생활편의</h1>
          <p className="mt-1 text-sm text-teal-50">알아두면 일상이 한결 편해져요.</p>
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
