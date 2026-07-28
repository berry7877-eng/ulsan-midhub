import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ulsan-midhub.vercel.app"),
  title: "울산 미드허브 — 중장년 AI·정책·취업·모임",
  description:
    "울산 40~60대 중장년을 위한 통합 플랫폼. AI 활용, 정책·교육 정보, 취업 공고, 오프라인 모임까지 한 곳에서.",
  openGraph: {
    title: "울산 미드허브 — 중장년 AI·정책·취업·모임",
    description:
      "AI · 취업 · 혜택 · 운세까지. 울산 40~60대를 위한 정보 한 곳에서.",
    url: "https://ulsan-midhub.vercel.app",
    siteName: "울산 미드허브",
    images: [{ url: "/og.png", width: 1080, height: 1080 }],
    locale: "ko_KR",
    type: "website",
  },
  // 검색엔진 소유확인 토큰 — 각 서비스에 사이트를 등록할 때 요구한다.
  // 공개되어도 되는 값이다(HTML 에 노출되는 것이 목적). 지우면 등록이 해제될 수 있으니 유지할 것.
  verification: {
    other: {
      // 네이버 서치어드바이저 (중장년 타깃에는 구글보다 중요 — 네이버는 자동 수집이 소극적이라 등록 필수)
      "naver-site-verification": "b9bb89fcee18665ac90cf943b20bdd70f24c32b6",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ko"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
