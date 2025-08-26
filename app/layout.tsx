import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/ui/header";
import BtBanner from "./components/ui/bt-banner";
import Footer from "./components/ui/footer";

export const metadata: Metadata = {
  title: "디자인 토큰 테스트",
  description: "Figma 디자인 토큰을 Next.js에 적용한 예시",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="antialiased">
        <Header />
        <main className="pt-20">
          <BtBanner />
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
