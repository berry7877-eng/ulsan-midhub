import { getPosts, type Post } from "@/lib/posts";
import { BASE_URL } from "../sitemap";

// RSS 2.0 피드 — 매일 발행되는 건강정보를 외부로 내보내는 배관.
//
// 왜 필요한가: 채널마다 따로 연동을 붙이면 채널 수만큼 코드가 늘어난다.
// 피드를 하나 두면 밴드·페이스북·뉴스레터·구독기가 전부 여기서 가져간다.
// (건강정보만 싣는다 — today 는 개별 주소가 없어서 구독기가 중복 처리를 못 한다)

export const dynamic = "force-static";
export const revalidate = 3600;

function esc(s: string): string {
  return String(s ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

// 마크다운 본문 → 읽을 수 있는 평문 요약
function summarize(body: string, n = 200): string {
  return body
    .replace(/^#{1,6}\s+/gm, "")
    .replace(/\*\*|__|[*_`>]/g, "")
    .replace(/^\s*[-+]\s+/gm, "")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, n);
}

// 마크다운 본문 → 최소 HTML (문단·굵게만. 라이브러리 없이 안전하게)
function toHtml(body: string): string {
  return body
    .split(/\n{2,}/)
    .map((block) => {
      const t = block.trim();
      if (!t) return "";
      const inline = esc(t).replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");
      return `<p>${inline.replace(/\n/g, "<br />")}</p>`;
    })
    .filter(Boolean)
    .join("\n");
}

// frontmatter 의 date 는 YYYY-MM-DD (KST). 발행 시각(07:30 KST)을 붙여 RFC-822 로.
function pubDate(d: string): string {
  const m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(d || "");
  const dt = m ? new Date(`${d}T07:30:00+09:00`) : new Date();
  return dt.toUTCString();
}

function item(p: Post): string {
  const url = `${BASE_URL}/life/health/${encodeURIComponent(p.slug)}`;
  return `    <item>
      <title>${esc(p.title)}</title>
      <link>${esc(url)}</link>
      <guid isPermaLink="true">${esc(url)}</guid>
      <pubDate>${pubDate(p.date)}</pubDate>
      <category>${esc(p.topic || "건강정보")}</category>
      <description>${esc(summarize(p.body))}</description>
      <content:encoded><![CDATA[${toHtml(p.body)}]]></content:encoded>
    </item>`;
}

export function GET() {
  const posts = getPosts("health").slice(0, 30); // 최근 30편이면 어느 구독기든 충분
  const latest = posts[0]?.date;

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0"
     xmlns:atom="http://www.w3.org/2005/Atom"
     xmlns:content="http://purl.org/rss/1.0/modules/content/">
  <channel>
    <title>울산 미드허브 — 중장년 건강정보</title>
    <link>${BASE_URL}/life/health</link>
    <description>울산 40대에서 60대를 위한 건강정보. 매일 한 편씩 올라옵니다.</description>
    <language>ko</language>
    <lastBuildDate>${pubDate(latest)}</lastBuildDate>
    <atom:link href="${BASE_URL}/feed.xml" rel="self" type="application/rss+xml" />
${posts.map(item).join("\n")}
  </channel>
</rss>
`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, max-age=0, s-maxage=3600, stale-while-revalidate=86400",
    },
  });
}
