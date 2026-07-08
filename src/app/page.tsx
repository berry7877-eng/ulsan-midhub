// 당근 오프라인 모임 초대 링크
const MOIM_URL = "https://daangn.com/kr/share/community/ref/invite-group/bbSzlfihyYu";
// 카카오 오픈채팅방 링크 (미개설 시 "#")
const KAKAO_OPENCHAT_URL: string = "https://open.kakao.com/o/p1uzC4Ci";

function MidHubLogo() {
  return (
    <svg
      viewBox="0 0 48 48"
      className="h-10 w-10 shrink-0"
      role="img"
      aria-label="울산 미드허브 로고"
    >
      <defs>
        <linearGradient id="hub" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#4f46e5" />
          <stop offset="1" stopColor="#2563eb" />
        </linearGradient>
      </defs>
      <g stroke="#cbd5e1" strokeWidth="2" strokeLinecap="round">
        <line x1="24" y1="24" x2="24" y2="9" />
        <line x1="24" y1="24" x2="39" y2="24" />
        <line x1="24" y1="24" x2="24" y2="39" />
        <line x1="24" y1="24" x2="9" y2="24" />
      </g>
      <circle cx="24" cy="9" r="4.5" fill="#2563eb" />
      <circle cx="39" cy="24" r="4.5" fill="#16a34a" />
      <circle cx="24" cy="39" r="4.5" fill="#f97316" />
      <circle cx="9" cy="24" r="4.5" fill="#eab308" />
      <circle cx="24" cy="24" r="8" fill="url(#hub)" />
    </svg>
  );
}

export default function Home() {
  const kakaoReady = KAKAO_OPENCHAT_URL !== "#";

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <header className="bg-white border-b border-gray-200 px-4 py-4">
        <div className="max-w-2xl mx-auto flex items-center gap-3">
          <MidHubLogo />
          <div>
            <h1 className="text-xl font-bold text-gray-900">울산 미드허브</h1>
            <p className="text-sm text-gray-500">중장년을 위한 AI · 정책 · 취업 · 모임</p>
          </div>
        </div>
      </header>

      <main className="max-w-2xl mx-auto px-4 py-6">
        {/* 4분할 타일: AI로 날개달기 · 두번째 인생 · 혜택 · 취업 */}
        <div className="grid grid-cols-2 gap-4">
          {/* 1. AI로 날개달기 */}
          <a
            href={MOIM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col min-h-[210px] rounded-3xl p-6 text-white shadow-lg ring-1 ring-black/5 bg-gradient-to-br from-violet-600 to-indigo-700 hover:brightness-110 transition"
          >
            <span className="text-5xl font-black tracking-tight">AI</span>
            <h2 className="mt-auto text-2xl font-extrabold tracking-tight">AI로 날개달기</h2>
            <p className="mt-1.5 text-[15px] font-medium leading-snug text-violet-100">
              경험에 AI를 더해 날아오르기 →
            </p>
          </a>

          {/* 2. 두번째 인생 즐기기 */}
          <a
            href={MOIM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col min-h-[210px] rounded-3xl p-6 text-white shadow-lg ring-1 ring-black/5 bg-gradient-to-br from-orange-500 to-red-500 hover:brightness-110 transition"
          >
            <span className="text-5xl">🎉</span>
            <h2 className="mt-auto text-2xl font-extrabold tracking-tight leading-tight">
              두번째 인생 즐기기
            </h2>
            <p className="mt-1.5 text-[15px] font-medium leading-snug text-orange-50">
              수다 · 운세로 활력 충전 →
            </p>
          </a>

          {/* 3. 혜택 */}
          <a
            href="/benefits"
            className="flex flex-col min-h-[210px] rounded-3xl p-6 text-white shadow-lg ring-1 ring-black/5 bg-gradient-to-br from-emerald-500 to-green-700 hover:brightness-110 transition"
          >
            <span className="text-5xl">🎁</span>
            <h2 className="mt-auto text-2xl font-extrabold tracking-tight">혜택</h2>
            <p className="mt-1.5 text-[15px] font-medium leading-snug text-emerald-50">
              정책 · 교육 지원정보 →
            </p>
          </a>

          {/* 4. 취업 */}
          <a
            href="/jobs"
            className="flex flex-col min-h-[210px] rounded-3xl p-6 text-white shadow-lg ring-1 ring-black/5 bg-gradient-to-br from-sky-500 to-blue-700 hover:brightness-110 transition"
          >
            <span className="text-5xl">💼</span>
            <h2 className="mt-auto text-2xl font-extrabold tracking-tight">취업</h2>
            <p className="mt-1.5 text-[15px] font-medium leading-snug text-sky-50">
              워크넷 · 울산일자리 →
            </p>
          </a>
        </div>

        {/* 커뮤니티 바로가기 */}
        <div className="mt-4 grid grid-cols-2 gap-4">
          <a
            href={MOIM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center rounded-2xl bg-orange-500 px-4 py-4 text-lg font-bold text-white shadow-md hover:bg-orange-600 transition-colors"
          >
            🥕 당근 모임
          </a>
          {kakaoReady ? (
            <a
              href={KAKAO_OPENCHAT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center rounded-2xl bg-yellow-400 px-4 py-4 text-lg font-bold text-yellow-900 shadow-md hover:bg-yellow-300 transition-colors"
            >
              💬 카카오 채팅
            </a>
          ) : (
            <div className="flex items-center justify-center rounded-2xl bg-gray-100 px-4 py-4 text-lg font-bold text-gray-400">
              💬 카카오 (준비 중)
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
