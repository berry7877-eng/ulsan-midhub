import Link from "next/link";
import KoreanLunarCalendar from "korean-lunar-calendar";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "이사 길일 (손 없는 날) — 울산 미드허브",
  description: "이사·이전에 좋다는 손 없는 날을 음력으로 계산해 알려드립니다.",
};

const WD = ["일", "월", "화", "수", "목", "금", "토"];
const SONEOMNEUN = new Set([9, 10, 19, 20, 29, 30]); // 음력 끝수 9·0

type Day = { m: number; d: number; wd: string; lunar: string };

function goodDays(year: number, month: number): Day[] {
  const cal = new KoreanLunarCalendar();
  const last = new Date(year, month, 0).getDate();
  const out: Day[] = [];
  for (let d = 1; d <= last; d++) {
    cal.setSolarDate(year, month, d);
    const l = cal.getLunarCalendar();
    if (SONEOMNEUN.has(l.day)) {
      const wd = WD[new Date(year, month - 1, d).getDay()];
      out.push({ m: month, d, wd, lunar: `음력 ${l.month}.${l.day}` });
    }
  }
  return out;
}

export default function MovingPage() {
  const now = new Date();
  const months = [0, 1, 2].map((i) => {
    const dt = new Date(now.getFullYear(), now.getMonth() + i, 1);
    return { year: dt.getFullYear(), month: dt.getMonth() + 1 };
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-gradient-to-br from-teal-500 to-emerald-700 text-white px-4 py-4">
        <div className="max-w-2xl mx-auto">
          <Link
            href="/life"
            className="inline-flex items-center gap-2 rounded-2xl bg-white px-6 py-3.5 text-lg font-extrabold text-emerald-700 shadow-md hover:bg-emerald-50 transition-colors"
          >
            ← 즐기기 홈
          </Link>
          <h1 className="mt-4 text-2xl font-extrabold">📅 이사 길일 (손 없는 날)</h1>
          <p className="mt-1 text-sm text-teal-50">앞으로 3개월간 손 없는 날을 정리했어요</p>
        </div>
      </header>

      <main className="max-w-2xl mx-auto px-4 py-6 space-y-5">
        <section className="rounded-2xl bg-teal-50 border border-teal-200 p-4 text-[15px] text-teal-900 leading-relaxed">
          <b>손 없는 날</b>이란, 예로부터 나쁜 기운(손)이 없다고 여겨 이사·개업·혼례에 좋다는 날이에요.
          음력으로 <b>끝수가 9와 0인 날</b>(9·10·19·20·29·30일)이 여기에 해당합니다.
        </section>

        {months.map(({ year, month }) => {
          const days = goodDays(year, month);
          return (
            <section key={`${year}-${month}`}>
              <h2 className="text-lg font-extrabold text-gray-900 mb-2">
                {year}년 {month}월
              </h2>
              {days.length === 0 ? (
                <p className="text-sm text-gray-400">이 달은 해당 날이 없어요.</p>
              ) : (
                <div className="grid grid-cols-2 gap-2">
                  {days.map((d) => (
                    <div
                      key={`${d.m}-${d.d}`}
                      className={`rounded-2xl border p-4 ${
                        d.wd === "일"
                          ? "border-red-200 bg-red-50"
                          : d.wd === "토"
                          ? "border-blue-200 bg-blue-50"
                          : "border-gray-200 bg-white"
                      }`}
                    >
                      <p className="text-lg font-extrabold text-gray-900">
                        {d.m}월 {d.d}일 <span className="text-sm font-bold text-gray-500">({d.wd})</span>
                      </p>
                      <p className="mt-0.5 text-xs text-gray-500">{d.lunar}</p>
                    </div>
                  ))}
                </div>
              )}
            </section>
          );
        })}

        <p className="text-center text-xs text-gray-400">
          전통 관습 참고용이에요. 실제 이사는 일정·비용도 함께 고려하세요 🙂
        </p>
      </main>
    </div>
  );
}
