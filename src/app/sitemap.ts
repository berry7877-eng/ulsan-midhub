import type { MetadataRoute } from "next";
import { getPosts } from "@/lib/posts";

// 검색엔진에 "이 사이트에 어떤 페이지가 있는지" 알려주는 목록.
// 매일 발행되는 건강정보가 자동으로 포함되도록 getPosts 로 읽어서 생성한다.
// (수동 관리하면 새 글이 빠진다 — 하루 한 편씩 늘어나므로)

export const BASE_URL = "https://ulsan-midhub.vercel.app";

// 사람이 직접 도는 주요 페이지. 실제 존재하는 경로만 넣는다(없는 경로를 넣으면 신뢰도가 깎인다).
const STATIC_PATHS: { path: string; priority: number; freq: MetadataRoute.Sitemap[0]["changeFrequency"] }[] = [
  { path: "/", priority: 1.0, freq: "daily" },
  { path: "/today", priority: 0.9, freq: "daily" },
  { path: "/jobs", priority: 0.9, freq: "daily" },
  { path: "/jobs/board", priority: 0.8, freq: "daily" },
  { path: "/jobs/new", priority: 0.5, freq: "monthly" },
  { path: "/life", priority: 0.7, freq: "weekly" },
  { path: "/life/health", priority: 0.9, freq: "daily" },
  { path: "/life/tips", priority: 0.6, freq: "weekly" },
  { path: "/life/study", priority: 0.6, freq: "weekly" },
  { path: "/life/enjoy", priority: 0.6, freq: "weekly" },
  { path: "/benefits", priority: 0.8, freq: "weekly" },
  { path: "/benefits/list", priority: 0.8, freq: "weekly" },
  { path: "/benefits/guide", priority: 0.6, freq: "monthly" },
  { path: "/ai", priority: 0.8, freq: "weekly" },
  { path: "/ai/learn", priority: 0.7, freq: "weekly" },
  { path: "/ai/curriculum", priority: 0.6, freq: "monthly" },
  { path: "/future", priority: 0.6, freq: "monthly" },
  { path: "/future/retire", priority: 0.6, freq: "monthly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticEntries: MetadataRoute.Sitemap = STATIC_PATHS.map(({ path, priority, freq }) => ({
    url: `${BASE_URL}${path}`,
    lastModified: now,
    changeFrequency: freq,
    priority,
  }));

  // 건강정보 상세 — 매일 한 편씩 늘어난다
  const healthEntries: MetadataRoute.Sitemap = getPosts("health").map((p) => ({
    url: `${BASE_URL}/life/health/${encodeURIComponent(p.slug)}`,
    // frontmatter 의 date(YYYY-MM-DD)를 쓰되, 형식이 깨졌으면 오늘로 폴백
    lastModified: /^\d{4}-\d{2}-\d{2}$/.test(p.date) ? new Date(p.date) : now,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticEntries, ...healthEntries];
}
