import fs from "fs";
import path from "path";

export type TodayPost = {
  slug: string;
  title: string;
  date: string;
  emoji: string;
  topic: string;
  body: string;
};

const DIR = path.join(process.cwd(), "content", "today");

function parse(raw: string, slug: string): TodayPost {
  const m = raw.match(/^---\s*\n([\s\S]*?)\n---\s*\n?([\s\S]*)$/);
  const fm: Record<string, string> = {};
  let body = raw;
  if (m) {
    for (const line of m[1].split("\n")) {
      const idx = line.indexOf(":");
      if (idx > 0) {
        const key = line.slice(0, idx).trim();
        let val = line.slice(idx + 1).trim();
        val = val.replace(/^["']|["']$/g, "");
        fm[key] = val;
      }
    }
    body = m[2].trim();
  }
  return {
    slug,
    title: fm.title || "오늘의 정보",
    date: fm.date || "",
    emoji: fm.emoji || "📰",
    topic: fm.topic || "",
    body,
  };
}

export function getTodayPosts(): TodayPost[] {
  if (!fs.existsSync(DIR)) return [];
  return fs
    .readdirSync(DIR)
    .filter((f) => f.endsWith(".md"))
    .map((f) => parse(fs.readFileSync(path.join(DIR, f), "utf8"), f.replace(/\.md$/, "")))
    .sort((a, b) => b.date.localeCompare(a.date));
}

export function getLatestPost(): TodayPost | null {
  return getTodayPosts()[0] ?? null;
}
