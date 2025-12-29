"use client";

import { usePathname } from "next/navigation";
import BtBanner from "./bt-banner";
import Footer from "./footer";

export default function ConditionalLayout() {
  const pathname = usePathname();
  // franchise 페이지는 자체 CTA와 Footer가 있으므로 제외
  const isFranchisePage = pathname === "/franchise";
  // admin 페이지는 별도 레이아웃 사용
  const isAdminPage = pathname?.startsWith("/admin");

  if (isFranchisePage || isAdminPage) {
    return null;
  }

  return (
    <>
      <BtBanner />
      <Footer />
    </>
  );
}
