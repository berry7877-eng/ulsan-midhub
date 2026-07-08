import type { Benefit, Status } from "@/lib/benefits";

export default function BenefitCard({
  b,
  status,
}: {
  b: Benefit;
  status?: Status;
}) {
  return (
    <div className="bg-white rounded-2xl border border-gray-200 p-5">
      <div className="flex items-start gap-3">
        <span className="text-3xl leading-none">{b.icon}</span>
        <div className="min-w-0">
          <div className="flex flex-wrap items-center gap-2">
            <h3 className="text-lg font-bold text-gray-900">{b.title}</h3>
            {status === "yes" && (
              <span className="rounded-full bg-emerald-100 px-2.5 py-0.5 text-xs font-bold text-emerald-700">
                ✓ 해당 가능성 높아요
              </span>
            )}
            {status === "maybe" && (
              <span className="rounded-full bg-amber-100 px-2.5 py-0.5 text-xs font-bold text-amber-700">
                가능성 있어요 · 확인 필요
              </span>
            )}
          </div>
          {b.tag && (
            <span className="mt-1 inline-block rounded-full bg-emerald-50 px-2.5 py-0.5 text-xs font-bold text-emerald-700 ring-1 ring-emerald-200">
              {b.tag}
            </span>
          )}
          <p className="mt-1.5 text-[15px] leading-relaxed text-gray-600">{b.desc}</p>
          <a
            href={b.link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-flex items-center rounded-lg bg-emerald-600 px-4 py-2 text-sm font-semibold text-white hover:bg-emerald-700 transition-colors"
          >
            {b.link.label} →
          </a>
        </div>
      </div>
    </div>
  );
}
