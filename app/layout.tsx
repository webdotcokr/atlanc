import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/ui/header";
import BtBanner from "./components/ui/bt-banner";
import Footer from "./components/ui/footer";

export const metadata: Metadata = {
  title: "아뜰랑 맨즈헤어",
  description: "프리미엄 남성 전문 헤어샵. 10년 경력의 데이터 기반 맞춤 컨설팅으로 당신만의 스타일을 완성합니다. 신사점, 건대점 운영 중",
  viewport: "width=device-width, initial-scale=1",
  openGraph: {
    title: "아뜰랑 맨즈헤어",
    description: "프리미엄 남성 전문 헤어샵. 10년 경력의 데이터 기반 맞춤 컨설팅으로 당신만의 스타일을 완성합니다. 신사점, 건대점 운영 중",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "아뜰랑 맨즈헤어",
    description: "프리미엄 남성 전문 헤어샵. 10년 경력의 데이터 기반 맞춤 컨설팅으로 당신만의 스타일을 완성합니다. 신사점, 건대점 운영 중",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;600;700&display=swap" rel="stylesheet" />
        <meta name="naver-site-verification" content="00072606d809c0707346a415d7c6122ec807ab53" />
      </head>
      <body className="antialiased">
        <Header />
        <main>
          {children}
        </main>
        <BtBanner />
        <Footer />
      </body>
    </html>
  );
}
