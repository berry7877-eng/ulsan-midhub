// 간단 마크다운 렌더러 (오늘의 정보 본문용). 굵게(**), 목록, 콜아웃만 처리.
function inline(text: string, keyBase: string) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((p, i) =>
    p.startsWith("**") && p.endsWith("**") ? (
      <strong key={`${keyBase}-${i}`} className="font-bold text-gray-900">
        {p.slice(2, -2)}
      </strong>
    ) : (
      <span key={`${keyBase}-${i}`}>{p}</span>
    )
  );
}

export default function PostBody({ body }: { body: string }) {
  const lines = body.split("\n");
  return (
    <div className="space-y-2 text-[15px] leading-relaxed text-gray-700">
      {lines.map((raw, i) => {
        const line = raw.trim();
        if (!line) return null;
        if (line.startsWith("👉")) {
          return (
            <p
              key={i}
              className="rounded-xl bg-orange-50 border border-orange-200 px-4 py-3 font-semibold text-orange-900"
            >
              {inline(line, `l${i}`)}
            </p>
          );
        }
        if (line.startsWith("**■") || line.startsWith("■")) {
          return (
            <h3 key={i} className="pt-2 text-base font-extrabold text-gray-900">
              {inline(line.replace(/\*\*/g, ""), `l${i}`)}
            </h3>
          );
        }
        const num = line.match(/^(\d+)\.\s+(.*)/);
        if (num) {
          return (
            <div key={i} className="flex gap-2">
              <span className="font-bold text-orange-600">{num[1]}.</span>
              <span>{inline(num[2], `l${i}`)}</span>
            </div>
          );
        }
        return <p key={i}>{inline(line, `l${i}`)}</p>;
      })}
    </div>
  );
}
