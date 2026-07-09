import fs from "fs";
import path from "path";

export type Post = {
  slug: string;
  title: string;
  date: string;
  emoji: string;
  topic: string;
  body: string;
};

function parse(raw: string, slug: string): Post {
  const m = raw.match(/^---\s*\n([\s\S]*?)\n---\s*\n?([\s\S]*)$/);
  const fm: Record<string, string> = {};
  let body = raw;
  if (m) {
    for (const line of m[1].split("\n")) {
      const idx = line.indexOf(":");
      if (idx > 0) {
        const key = line.slice(0, idx).trim();
        let val = line.slice(idx + 1).trim();
        // 앞뒤가 같은 따옴표로 감싸진 경우에만 제거 (제목 안 따옴표 보존)
        if (
          (val.startsWith('"') && val.endsWith('"') && val.length > 1) ||
          (val.startsWith("'") && val.endsWith("'") && val.length > 1)
        ) {
          val = val.slice(1, -1);
        }
        fm[key] = val;
      }
    }
    body = m[2].trim();
  }
  return {
    slug,
    title: fm.title || "정보",
    date: fm.date || "",
    emoji: fm.emoji || "📰",
    topic: fm.topic || "",
    body,
  };
}

export function getPosts(sub: string): Post[] {
  const dir = path.join(process.cwd(), "content", sub);
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".md"))
    .map((f) => parse(fs.readFileSync(path.join(dir, f), "utf8"), f.replace(/\.md$/, "")))
    .sort((a, b) => b.date.localeCompare(a.date));
}
