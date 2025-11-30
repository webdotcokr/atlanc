"use client";

import { usePathname } from "next/navigation";
import BtBanner from "./bt-banner";
import Footer from "./footer";

export default function ConditionalLayout() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  if (isHome) {
    return null;
  }

  return (
    <>
      <BtBanner />
      <Footer />
    </>
  );
}
