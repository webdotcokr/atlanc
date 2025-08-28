import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/ui/header";
import BtBanner from "./components/ui/bt-banner";
import Footer from "./components/ui/footer";

export const metadata: Metadata = {
  title: "디자인 토큰 테스트",
  description: "Figma 디자인 토큰을 Next.js에 적용한 예시",
  viewport: "width=device-width, initial-scale=1",
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
