import Link from "next/link";

export const metadata = {
  title: "노후설계 — 울산 미드허브",
  description: "국민연금, 노후 자산, 건강한 노후까지. 중장년이 지금 챙겨야 할 준비들.",
};

const items = [
  {
    name: "국민연금 수령 시기 정하기",
    desc: "정해진 나이에 받는 게 기본. 당겨 받으면 평생 줄고(1년당 약 6%↓), 늦추면 평생 늘어요(1년당 약 7.2%↑). 내 예상 연금액은 '내 곁에 국민연금' 앱이나 1355에서 확인하세요.",
  },
  {
    name: "퇴직연금·개인연금 점검",
    desc: "회사 퇴직연금(DB·DC)과 개인연금(연금저축·IRP)을 한 번 정리해보세요. 세액공제 혜택도 챙길 수 있어요. 자세한 건 금융감독원 '통합연금포털'에서 확인.",
  },
  {
    name: "노후 생활비 계산해보기",
    desc: "'한 달에 얼마면 될까'를 적어보는 것부터 시작. 국민연금 + 퇴직연금 + 저축으로 얼마가 나오는지 숫자로 보면 계획이 잡힙니다.",
  },
  {
    name: "건강이 가장 큰 노후 자산",
    desc: "의료비는 노후 지출의 큰 부분이에요. 지금의 근력·식습관 관리가 곧 돈을 아끼는 길. 홈 → 건강에서 매일 팁을 확인하세요.",
  },
  {
    name: "일하는 노후도 방법",
    desc: "재취업·신중년 일자리로 소득과 활력을 함께. 홈 → 미래 → 취업/정책에서 지원제도를 확인해보세요.",
  },
];

export default function RetirePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-gradient-to-br from-amber-500 to-orange-600 text-white px-4 py-4">
        <div className="max-w-2xl mx-auto">
          <Link
            href="/future"
            className="inline-flex items-center gap-2 rounded-2xl bg-white px-6 py-3.5 text-lg font-extrabold text-orange-600 shadow-md hover:bg-orange-50 transition-colors"
          >
            ← 미래
          </Link>
          <h1 className="mt-4 text-2xl font-extrabold">노후설계</h1>
          <p className="mt-1 text-sm text-amber-50">지금 챙기면 훨씬 든든한 준비들.</p>
        </div>
      </header>

      <main className="max-w-2xl mx-auto px-4 py-6 space-y-3">
        {items.map((it) => (
          <div key={it.name} className="bg-white rounded-2xl border border-gray-200 p-5">
            <h3 className="text-base font-bold text-gray-900">{it.name}</h3>
            <p className="mt-1 text-[15px] leading-relaxed text-gray-600">{it.desc}</p>
          </div>
        ))}
        <p className="text-center text-xs text-gray-400">
          정확한 금액·자격은 국민연금공단(☎1355) 등에서 꼭 확인하세요 🙂
        </p>
      </main>
    </div>
  );
}
