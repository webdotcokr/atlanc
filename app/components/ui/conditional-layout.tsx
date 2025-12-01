"use client";

import { usePathname } from "next/navigation";
import BtBanner from "./bt-banner";
import Footer from "./footer";

export default function ConditionalLayout() {
  const pathname = usePathname();
  // franchise 페이지는 자체 CTA와 Footer가 있으므로 제외
  const isFranchisePage = pathname === "/franchise";

  if (isFranchisePage) {
    return null;
  }

  return (
    <>
      <BtBanner />
      <Footer />
    </>
  );
}
