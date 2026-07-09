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
