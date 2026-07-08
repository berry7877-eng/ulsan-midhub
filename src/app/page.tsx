// 당근 오프라인 모임 초대 링크
const MOIM_URL = "https://daangn.com/kr/share/community/ref/invite-group/bbSzlfihyYu";
// 카카오 오픈채팅방 — 개설 후 링크로 교체 (오픈채팅 > 만들기 > 공유 > 링크 복사)
const KAKAO_OPENCHAT_URL = "#";

export default function Home() {
  const kakaoReady = KAKAO_OPENCHAT_URL !== "#";

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <header className="bg-white border-b border-gray-200 px-4 py-4">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-lg font-bold text-gray-900">울산 미드허브</h1>
          <p className="text-xs text-gray-500">중장년을 위한 AI · 정책 · 취업 · 모임</p>
        </div>
      </header>

      <main className="max-w-2xl mx-auto px-4 py-6 space-y-5">
        {/* 1. AI */}
        <section className="bg-gradient-to-br from-indigo-600 to-blue-600 rounded-2xl text-white px-6 py-8">
          <span className="inline-block rounded-full bg-white/15 px-3 py-1 text-xs font-semibold">
            🤖 AI 이야기
          </span>
          <h2 className="mt-3 text-2xl font-bold leading-snug">
            AI는 경험 많은<br />중장년에게 무기입니다
          </h2>
          <p className="mt-3 text-[15px] text-blue-100 leading-relaxed">
            AI는 스스로 판단하지 못합니다.
            <span className="font-semibold text-white"> 무엇을 시킬지 아는 사람</span>이
            있어야 제대로 일합니다.
          </p>
          <p className="mt-2 text-[15px] text-blue-100 leading-relaxed">
            30년 현장에서 쌓은 감각과 판단력 —
            그 <span className="font-semibold text-white">도메인 지식 × AI</span>는
            초급자가 흉내 낼 수 없는 경쟁력이 됩니다.
          </p>
          <a
            href={MOIM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-block rounded-lg bg-white px-5 py-3 text-sm font-semibold text-blue-700 hover:bg-blue-50 transition-colors"
          >
            AI 배우는 무료 모임 →
          </a>
        </section>

        {/* 2. 정책과 교육 */}
        <section className="bg-white rounded-2xl border border-gray-200 px-6 py-6">
          <span className="inline-block rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">
            🎓 정책 · 교육
          </span>
          <h3 className="mt-3 text-xl font-bold text-gray-900">
            중장년을 위한 정책과 교육
          </h3>
          <p className="mt-2 text-sm text-gray-600 leading-relaxed">
            몰라서 못 받는 지원, 미드허브가 모아드립니다.
          </p>
          <ul className="mt-4 space-y-2">
            {[
              { name: "국민내일배움카드", desc: "훈련비 최대 500만원 지원" },
              { name: "울산 중장년내일센터", desc: "재취업 상담·전직 지원 서비스" },
              { name: "폴리텍·직업훈련원", desc: "무료·국비 직업교육 과정" },
            ].map((p) => (
              <li key={p.name} className="flex items-start gap-2 text-sm">
                <span className="mt-0.5 text-green-600">✓</span>
                <span>
                  <span className="font-semibold text-gray-800">{p.name}</span>
                  <span className="text-gray-500"> — {p.desc}</span>
                </span>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-xs text-gray-400">
            교육 통합 신청 기능 준비 중 · 최신 정책은 모임에서 공유합니다
          </p>
        </section>

        {/* 3. 중장년 취업 */}
        <section className="bg-white rounded-2xl border border-gray-200 px-6 py-6">
          <span className="inline-block rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700">
            💼 취업
          </span>
          <h3 className="mt-3 text-xl font-bold text-gray-900">
            울산 중장년 구인 공고
          </h3>
          <p className="mt-2 text-sm text-gray-600 leading-relaxed">
            울산 7개+ 기관 공고를 한 곳에서 확인하고,
            담당자에게 <span className="font-semibold text-gray-800">폰연결</span>로
            바로 전화하세요.
          </p>
          <a
            href="/jobs"
            className="mt-4 inline-block rounded-lg bg-blue-600 px-5 py-3 text-sm font-semibold text-white hover:bg-blue-700 transition-colors"
          >
            구인 공고 보기 →
          </a>
        </section>

        {/* 4. 수다 & 사주운세 (모임 · 오픈채팅) */}
        <section className="bg-orange-50 border border-orange-200 rounded-2xl px-6 py-6">
          <span className="inline-block rounded-full bg-orange-100 px-3 py-1 text-xs font-semibold text-orange-700">
            💬 수다 & 사주운세
          </span>
          <h3 className="mt-3 text-xl font-bold text-gray-900">
            편하게 어울리는 공간
          </h3>
          <p className="mt-2 text-sm text-gray-600 leading-relaxed">
            취업 얘기, 사는 얘기, 재미로 보는 사주·운세까지.
            같은 나이대끼리 부담 없이 어울려요.
          </p>
          <div className="mt-4 space-y-2">
            <a
              href={MOIM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center rounded-lg bg-orange-500 px-5 py-3 text-sm font-semibold text-white hover:bg-orange-600 transition-colors"
            >
              🥕 당근 오프라인 모임 참여 →
            </a>
            {kakaoReady ? (
              <a
                href={KAKAO_OPENCHAT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center rounded-lg bg-yellow-400 px-5 py-3 text-sm font-semibold text-yellow-900 hover:bg-yellow-300 transition-colors"
              >
                💬 카카오 오픈채팅 참여 →
              </a>
            ) : (
              <div className="flex items-center justify-center rounded-lg bg-gray-100 px-5 py-3 text-sm font-semibold text-gray-400">
                💬 카카오 오픈채팅 (개설 준비 중)
              </div>
            )}
          </div>
        </section>
      </main>
    </div>
  );
}
