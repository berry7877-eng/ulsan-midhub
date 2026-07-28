import type { MetadataRoute } from "next";
import { BASE_URL } from "./sitemap";

// 검색엔진 크롤러에게 "읽어가도 된다 / 여긴 읽지 마라"를 알려주는 파일.
// 없으면 크롤러가 와도 기준이 없어 수집이 소극적이다.

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        // 운영자 전용·수집 의미 없는 경로는 제외
        disallow: ["/jobs/admin", "/api/"],
      },
      // 네이버(중장년 타깃에 가장 중요)와 다음은 별도 봇 이름을 쓴다.
      { userAgent: "Yeti", allow: "/", disallow: ["/jobs/admin", "/api/"] },
      { userAgent: "Daumoa", allow: "/", disallow: ["/jobs/admin", "/api/"] },
    ],
    sitemap: `${BASE_URL}/sitemap.xml`,
  };
}
