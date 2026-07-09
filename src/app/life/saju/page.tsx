import Link from "next/link";
import { computeSaju, SI_LABELS } from "@/lib/saju";

export const metadata = {
  title: "사주팔자 — 울산 미드허브",
  description: "생년월일시로 내 사주팔자와 오행, 타고난 성향을 풀어봅니다. 재미·참고용.",
};

export const dynamic = "force-dynamic";

const ELEM_COLOR: Record<string, { bg: string; text: string; bar: string }> = {
  목: { bg: "bg-green-100", text: "text-green-700", bar: "bg-green-500" },
  화: { bg: "bg-red-100", text: "text-red-700", bar: "bg-red-500" },
  토: { bg: "bg-amber-100", text: "text-amber-700", bar: "bg-amber-500" },
  금: { bg: "bg-slate-200", text: "text-slate-700", bar: "bg-slate-500" },
  수: { bg: "bg-blue-100", text: "text-blue-700", bar: "bg-blue-500" },
};

export default async function SajuPage({
  searchParams,
}: {
  searchParams: Promise<Record<string, string>>;
}) {
  const sp = await searchParams;
  const y = parseInt(sp.y ?? "", 10);
  const m = parseInt(sp.m ?? "", 10);
  const d = parseInt(sp.d ?? "", 10);
  const siRaw = sp.si ?? "";
  const si = siRaw === "" ? -1 : parseInt(siRaw, 10);
  const valid = y >= 1930 && y <= 2020 && m >= 1 && m <= 12 && d >= 1 && d <= 31;
  const result = valid ? computeSaju(y, m, d, si) : null;

  const total = result ? result.pillars.length * 2 : 8;

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-gradient-to-br from-violet-600 to-purple-700 text-white px-4 py-4">
        <div className="max-w-2xl mx-auto">
          <Link
            href="/life"
            className="inline-flex items-center gap-2 rounded-2xl bg-white px-6 py-3.5 text-lg font-extrabold text-purple-700 shadow-md hover:bg-purple-50 transition-colors"
          >
            ← 즐기기 홈
          </Link>
          <h1 className="mt-4 text-2xl font-extrabold">🔮 사주팔자</h1>
          <p className="mt-1 text-sm text-violet-100">
            생년월일시로 타고난 기운과 성향을 풀어봐요
          </p>
        </div>
      </header>

      <main className="max-w-2xl mx-auto px-4 py-6 space-y-5">
        {/* 입력 폼 */}
        <form method="get" className="bg-white rounded-2xl border border-gray-200 p-5">
          <p className="text-sm font-bold text-gray-800 mb-2">생년월일 (양력)</p>
          <div className="grid grid-cols-3 gap-2">
            <input name="y" defaultValue={sp.y} inputMode="numeric" placeholder="년(1968)" className="rounded-xl border border-gray-300 px-3 py-3 text-base focus:border-violet-500 focus:outline-none focus:ring-2 focus:ring-violet-200" />
            <input name="m" defaultValue={sp.m} inputMode="numeric" placeholder="월(5)" className="rounded-xl border border-gray-300 px-3 py-3 text-base focus:border-violet-500 focus:outline-none focus:ring-2 focus:ring-violet-200" />
            <input name="d" defaultValue={sp.d} inputMode="numeric" placeholder="일(15)" className="rounded-xl border border-gray-300 px-3 py-3 text-base focus:border-violet-500 focus:outline-none focus:ring-2 focus:ring-violet-200" />
          </div>
          <p className="text-sm font-bold text-gray-800 mt-4 mb-2">태어난 시 (모르면 비워두세요)</p>
          <select name="si" defaultValue={sp.si ?? ""} className="w-full rounded-xl border border-gray-300 px-3 py-3 text-base bg-white focus:border-violet-500 focus:outline-none focus:ring-2 focus:ring-violet-200">
            <option value="">모름</option>
            {SI_LABELS.map((s, i) => (
              <option key={i} value={i}>
                {s.name} ({s.range})
              </option>
            ))}
          </select>
          <button type="submit" className="mt-4 w-full rounded-xl bg-violet-600 px-5 py-3.5 text-base font-bold text-white hover:bg-violet-700">
            사주 보기 🔮
          </button>
        </form>

        {result && (
          <>
            {/* 사주팔자 */}
            <section className="bg-white rounded-2xl border border-gray-200 p-5">
              <h2 className="text-base font-extrabold text-gray-900 mb-1">
                내 사주팔자 <span className="text-sm font-medium text-gray-400">({result.ttiName}띠)</span>
              </h2>
              <p className="text-xs text-gray-400 mb-3">일간(나)은 <b className="text-violet-700">{result.ilgan}</b>, 파란 테두리가 '나'예요.</p>
              <div className="grid gap-2" style={{ gridTemplateColumns: `repeat(${result.pillars.length}, minmax(0,1fr))` }}>
                {result.pillars.map((p) => {
                  const isDay = p.label === "일주";
                  return (
                    <div key={p.label} className={`rounded-2xl border-2 p-2 text-center ${isDay ? "border-violet-500" : "border-gray-200"}`}>
                      <p className="text-xs text-gray-400">{p.label}</p>
                      <div className={`mt-1 rounded-lg py-2 text-2xl font-black ${ELEM_COLOR[p.ganElem].bg} ${ELEM_COLOR[p.ganElem].text}`}>{p.gan}</div>
                      <div className={`mt-1 rounded-lg py-2 text-2xl font-black ${ELEM_COLOR[p.jiElem].bg} ${ELEM_COLOR[p.jiElem].text}`}>{p.ji}</div>
                    </div>
                  );
                })}
              </div>
              {!result.hasHour && (
                <p className="mt-2 text-xs text-gray-400">※ 태어난 시를 넣으면 시주까지 4기둥으로 봐드려요.</p>
              )}
            </section>

            {/* 일간 성향 */}
            <section className="rounded-2xl bg-gradient-to-br from-violet-600 to-purple-700 p-5 text-white">
              <p className="text-sm font-semibold text-violet-100">타고난 성향 · 일간 {result.ilgan}({result.ilganDesc.elem})</p>
              <p className="mt-1 text-xl font-extrabold">{result.ilganDesc.short} 같은 사람</p>
              <p className="mt-2 text-[15px] leading-relaxed text-violet-50">{result.ilganDesc.desc}</p>
            </section>

            {/* 오행 분포 */}
            <section className="bg-white rounded-2xl border border-gray-200 p-5">
              <h2 className="text-base font-extrabold text-gray-900 mb-3">오행(五行) 균형</h2>
              <div className="space-y-2">
                {result.oheng.map((o) => (
                  <div key={o.name} className="flex items-center gap-2">
                    <span className={`w-8 shrink-0 text-center rounded-lg py-0.5 text-sm font-bold ${ELEM_COLOR[o.name].bg} ${ELEM_COLOR[o.name].text}`}>{o.name}</span>
                    <div className="flex-1 h-4 rounded-full bg-gray-100 overflow-hidden">
                      <div className={`h-full ${ELEM_COLOR[o.name].bar}`} style={{ width: `${(o.count / total) * 100}%` }} />
                    </div>
                    <span className="w-6 text-right text-sm font-bold text-gray-500">{o.count}</span>
                  </div>
                ))}
              </div>
              <div className="mt-4 rounded-xl bg-violet-50 p-4 text-[15px] leading-relaxed text-violet-900">
                <p><b>강한 기운</b>: {result.strong} · <b>약한 기운</b>: {result.weak}</p>
                <p className="mt-1">{result.balanceMsg}</p>
              </div>
            </section>

            <p className="text-center text-xs text-gray-400">
              전통 명리(命理) 방식으로 계산했지만, 재미·참고용이에요 🙂 큰 결정은 신중히.
            </p>
          </>
        )}
      </main>
    </div>
  );
}
