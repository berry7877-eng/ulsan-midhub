import Link from "next/link";

export const metadata = {
  title: "두번째 인생 즐기기 — 울산 미드허브",
  description: "오늘의 정보, 재미로 보는 운세·궁합, 이사 길일, 이름 짓기까지. 울산 중장년의 즐거운 쉼터.",
};

const MOIM_URL =
  "https://daangn.com/kr/share/community/ref/invite-group/bbSzlfihyYu";

type Tile = {
  href: string;
  external?: boolean;
  icon: string;
  title: string;
  sub: string;
  from: string;
  to: string;
  subColor: string;
};

const tiles: Tile[] = [
  {
    href: "/today",
    icon: "📰",
    title: "오늘의 정보",
    sub: "매일 한 조각씩 →",
    from: "from-blue-500",
    to: "to-indigo-700",
    subColor: "text-blue-100",
  },
  {
    href: "/life/saju",
    icon: "🔮",
    title: "오늘의 운세",
    sub: "재미로 보는 사주 →",
    from: "from-violet-600",
    to: "to-purple-700",
    subColor: "text-violet-100",
  },
  {
    href: "/life/gunghap",
    icon: "💑",
    title: "궁합 보기",
    sub: "우리 잘 맞을까? →",
    from: "from-pink-500",
    to: "to-rose-600",
    subColor: "text-pink-50",
  },
  {
    href: "/life/moving",
    icon: "📅",
    title: "이사 길일",
    sub: "손 없는 날 확인 →",
    from: "from-teal-500",
    to: "to-emerald-700",
    subColor: "text-teal-50",
  },
  {
    href: "/life/naming",
    icon: "🖋️",
    title: "이름 짓기",
    sub: "작명 아이디어 →",
    from: "from-amber-500",
    to: "to-orange-600",
    subColor: "text-amber-50",
  },
  {
    href: MOIM_URL,
    external: true,
    icon: "🤝",
    title: "수다 모임",
    sub: "당근에서 함께 →",
    from: "from-orange-500",
    to: "to-red-500",
    subColor: "text-orange-50",
  },
];

export default function LifeHub() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-gradient-to-br from-orange-500 to-red-500 text-white px-4 py-4">
        <div className="max-w-2xl mx-auto">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-2xl bg-white px-6 py-3.5 text-lg font-extrabold text-orange-600 shadow-md hover:bg-orange-50 transition-colors"
          >
            🏠 홈으로
          </Link>
          <h1 className="mt-4 text-2xl font-extrabold">🎉 두번째 인생 즐기기</h1>
          <p className="mt-1 text-sm text-orange-50">
            정보도 챙기고, 재미도 보고. 부담 없이 즐겨요.
          </p>
        </div>
      </header>

      <main className="max-w-2xl mx-auto px-4 py-6">
        <div className="grid grid-cols-2 gap-4">
          {tiles.map((t) => {
            const cls = `flex flex-col min-h-[160px] rounded-3xl p-5 text-white shadow-lg ring-1 ring-black/5 bg-gradient-to-br ${t.from} ${t.to} hover:brightness-110 transition`;
            const inner = (
              <>
                <span className="text-4xl">{t.icon}</span>
                <h2 className="mt-auto text-xl font-extrabold tracking-tight leading-tight">
                  {t.title}
                </h2>
                <p className={`mt-1 text-sm font-medium ${t.subColor}`}>{t.sub}</p>
              </>
            );
            return t.external ? (
              <a
                key={t.title}
                href={t.href}
                target="_blank"
                rel="noopener noreferrer"
                className={cls}
              >
                {inner}
              </a>
            ) : (
              <Link key={t.title} href={t.href} className={cls}>
                {inner}
              </Link>
            );
          })}
        </div>

        <p className="mt-6 text-center text-xs text-gray-400">
          운세·궁합·작명은 재미로 보는 콘텐츠예요 🙂
        </p>
      </main>
    </div>
  );
}
