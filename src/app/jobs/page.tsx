import PhoneConnect from "@/components/PhoneConnect";

// 울산경제일자리진흥원 실시간 채용 게시판
const PUBLIC_JOBS =
  "https://job.ubpi.or.kr/job/recruit/publicRecruit/list.ulsan?mId=001001002001000000";
const CIVILIAN_JOBS =
  "https://job.ubpi.or.kr/job/recruit/civilianRecruit/list.ulsan?mId=001001001000000000";

const jobs = [
  {
    id: 1,
    title: "물류센터 운영 관리자",
    company: "(주)울산물류",
    location: "울산 북구",
    salary: "월 280만원~",
    type: "정규직",
    age: "40세 이상 우대",
    phone: "052-123-4567",
    tags: ["경력 10년↑", "관리직", "물류"],
  },
  {
    id: 2,
    title: "현장 안전관리 담당자",
    company: "현대중공업 협력사",
    location: "울산 동구",
    salary: "연봉 협의",
    type: "계약직",
    age: "45~60세",
    phone: "010-9876-5432",
    tags: ["안전관리사", "산업현장", "경력직"],
  },
  {
    id: 3,
    title: "소규모 카페 매니저",
    company: "울산 남구 카페",
    location: "울산 남구 삼산동",
    salary: "월 230만원",
    type: "정규직",
    age: "40~55세 선호",
    phone: "010-1234-0000",
    tags: ["서비스업", "매니저", "유경험자"],
  },
  {
    id: 4,
    title: "사회복지 행정 지원",
    company: "울산 중구청",
    location: "울산 중구",
    salary: "시급 11,000원",
    type: "파트타임",
    age: "50세 이상 환영",
    phone: "052-290-3000",
    tags: ["공공기관", "행정", "50+"],
  },
];

export default function JobsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b border-gray-200 px-4 py-4">
        <div className="max-w-2xl mx-auto">
          <a href="/" className="text-blue-600 text-sm hover:underline">← 홈으로</a>
          <h1 className="text-xl font-bold text-gray-900 mt-1">울산 중장년 구인 공고</h1>
          <p className="text-sm text-gray-500 mt-0.5">
            40~60대 취업희망자 맞춤 공고 · 오늘 {jobs.length}건
          </p>
        </div>
      </header>

      <main className="max-w-2xl mx-auto px-4 py-6 space-y-4">
        {/* 울산 실시간 채용 게시판 (울산경제일자리진흥원) */}
        <section>
          <h2 className="text-base font-bold text-gray-900 mb-2">
            🔴 울산 실시간 채용정보
          </h2>
          <div className="grid grid-cols-2 gap-3">
            <a
              href={PUBLIC_JOBS}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col rounded-2xl p-5 text-white shadow-md bg-gradient-to-br from-blue-600 to-indigo-700 hover:brightness-110 transition"
            >
              <span className="text-3xl">🏛️</span>
              <span className="mt-2 text-lg font-bold">공공 일자리</span>
              <span className="mt-0.5 text-xs text-blue-100">
                관공서·공공기관 채용 →
              </span>
            </a>
            <a
              href={CIVILIAN_JOBS}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col rounded-2xl p-5 text-white shadow-md bg-gradient-to-br from-sky-500 to-blue-600 hover:brightness-110 transition"
            >
              <span className="text-3xl">🏢</span>
              <span className="mt-2 text-lg font-bold">민간 일자리</span>
              <span className="mt-0.5 text-xs text-sky-100">
                기업·사업장 채용 →
              </span>
            </a>
          </div>
          <p className="mt-2 text-xs text-gray-400">
            울산경제일자리진흥원 공식 채용 게시판으로 연결됩니다.
          </p>
        </section>

        <h2 className="text-base font-bold text-gray-900 pt-2">
          ⭐ 미드허브 추천 공고 (예시)
        </h2>
        {jobs.map((job) => (
          <article
            key={job.id}
            className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="flex items-start justify-between gap-2">
              <div className="flex-1 min-w-0">
                <h2 className="text-base font-semibold text-gray-900 truncate">
                  {job.title}
                </h2>
                <p className="text-sm text-gray-500 mt-0.5">{job.company}</p>
              </div>
              <span className="shrink-0 rounded-full bg-blue-50 px-2.5 py-0.5 text-xs font-medium text-blue-700">
                {job.type}
              </span>
            </div>

            <div className="mt-3 grid grid-cols-2 gap-y-1 text-sm text-gray-600">
              <span>📍 {job.location}</span>
              <span>💰 {job.salary}</span>
              <span>🎂 {job.age}</span>
            </div>

            <div className="mt-3 flex flex-wrap gap-1.5">
              {job.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-gray-100 px-2.5 py-0.5 text-xs text-gray-600"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="mt-4 pt-3 border-t border-gray-100">
              <PhoneConnect phone={job.phone} />
            </div>
          </article>
        ))}
      </main>
    </div>
  );
}
