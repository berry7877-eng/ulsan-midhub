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
              { icon: "🤝", title: "중장년 커뮤니티", desc: "취업 경험 공유, 정보 제보" },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-xl border border-gray-200 p-4"
              >
                <span className="text-2xl">{item.icon}</span>
                <h4 className="mt-2 text-sm font-semibold text-gray-800">{item.title}</h4>
                <p className="mt-0.5 text-xs text-gray-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-amber-50 border border-amber-200 rounded-xl px-5 py-4">
          <p className="text-sm font-semibold text-amber-800">서비스 준비 중</p>
          <p className="mt-1 text-xs text-amber-700 leading-relaxed">
            현재 울산 미드허브는 초기 구축 단계입니다.
            구인 공고 폰연결 기능을 먼저 제공합니다.
          </p>
          <a
            href="/jobs"
            className="mt-3 inline-block text-xs font-semibold text-amber-700 underline"
          >
            공고 목록 확인하기
          </a>
        </section>
      </main>
    </div>
  );
}
