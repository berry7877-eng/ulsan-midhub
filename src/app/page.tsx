// 당근 모임 초대 링크
const MOIM_URL = "https://daangn.com/kr/share/community/ref/invite-group/bbSzlfihyYu";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <header className="bg-white border-b border-gray-200 px-4 py-4">
        <div className="max-w-2xl mx-auto flex items-center justify-between">
          <div>
            <h1 className="text-lg font-bold text-gray-900">울산 미드허브</h1>
            <p className="text-xs text-gray-500">40~60대 중장년 취업 플랫폼</p>
          </div>
        </div>
      </header>

      <main className="max-w-2xl mx-auto px-4 py-8 space-y-8">
        <section className="bg-blue-600 rounded-2xl text-white px-6 py-8">
          <p className="text-sm font-medium text-blue-200">울산 중장년 취업희망자를 위한</p>
          <h2 className="mt-1 text-2xl font-bold leading-snug">
            경험이 자산이 되는<br />일자리 플랫폼
          </h2>
          <p className="mt-3 text-sm text-blue-100 leading-relaxed">
            AI는 초급자의 일자리를 빼앗지만,<br />
            경험 많은 중장년에겐 오히려 기회입니다.
          </p>
          <a
            href="/jobs"
            className="mt-5 inline-block rounded-lg bg-white px-5 py-2.5 text-sm font-semibold text-blue-700 hover:bg-blue-50 transition-colors"
          >
            구인 공고 보기 →
          </a>
        </section>

        <section>
          <h3 className="text-base font-semibold text-gray-800 mb-3">주요 기능</h3>
          <div className="grid grid-cols-2 gap-3">
            {[
              { icon: "📋", title: "정보 집약 대시보드", desc: "울산 7개+ 기관 공고 실시간 수집" },
              { icon: "📞", title: "폰연결", desc: "공고 담당자에게 바로 전화 연결" },
              { icon: "🎓", title: "교육 통합 신청", desc: "폴리텍·직업훈련원 원스톱 신청" },
              { icon: "🤝", title: "중장년 커뮤니티", desc: "당근 모임에서 만나요", href: MOIM_URL },
            ].map((item) =>
              item.href ? (
                <a
                  key={item.title}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white rounded-xl border border-orange-200 p-4 block hover:border-orange-400 hover:shadow-sm transition-colors"
                >
                  <span className="text-2xl">{item.icon}</span>
                  <h4 className="mt-2 text-sm font-semibold text-gray-800">{item.title}</h4>
                  <p className="mt-0.5 text-xs text-orange-600 font-medium">{item.desc} →</p>
                </a>
              ) : (
                <div
                  key={item.title}
                  className="bg-white rounded-xl border border-gray-200 p-4"
                >
                  <span className="text-2xl">{item.icon}</span>
                  <h4 className="mt-2 text-sm font-semibold text-gray-800">{item.title}</h4>
                  <p className="mt-0.5 text-xs text-gray-500">{item.desc}</p>
                </div>
              )
            )}
          </div>
        </section>

        <section className="bg-orange-50 border border-orange-200 rounded-2xl px-6 py-6">
          <span className="inline-block rounded-full bg-orange-100 px-3 py-1 text-xs font-semibold text-orange-700">
            🤝 당근 모임
          </span>
          <h3 className="mt-3 text-lg font-bold text-gray-900 leading-snug">
            울산 중장년에게<br />꼭 필요한 정보를 나눠요
          </h3>
          <p className="mt-2 text-sm text-gray-600 leading-relaxed">
            <span className="font-semibold text-gray-800">AI교육 · 취업 · 생활편의</span> 정보를
            같은 나이대끼리 나누는 모임입니다.
            어렵지 않아요. 부담 없이 편하게 들러보세요.
          </p>
          <a
            href={MOIM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-block rounded-lg bg-orange-500 px-5 py-2.5 text-sm font-semibold text-white hover:bg-orange-600 transition-colors"
          >
            당근 모임 참여하기 →
          </a>
          <a
            href="/jobs"
            className="mt-3 block text-xs font-semibold text-gray-500 underline"
          >
            먼저 구인 공고부터 볼게요
          </a>
        </section>
      </main>
    </div>
  );
}
