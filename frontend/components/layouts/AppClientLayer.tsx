'use client';

import Header from "./Header";
import Footer from "./Footer";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

interface AppClientLayerProps {
  children: React.ReactNode;
}

export default function AppClientLayer({ children }: AppClientLayerProps) {
  const pathname = usePathname();
  const [isMobile, setIsMobile] = useState(false);

  // Determine if the current viewport is mobile
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1024); // Adjust the width as per your mobile breakpoint
    };

    // Initial check
    handleResize();

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Cleanup event listener on unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isSearchPage = pathname.startsWith('/search');
  const isProductDetailPage = pathname.startsWith('/product-detail');

  const shouldHideHeaderFooter = isSearchPage || (isProductDetailPage && isMobile);

  return (
    <>
      {!shouldHideHeaderFooter && <Header />}
      {children}
      {!shouldHideHeaderFooter && <Footer />}
    </>
  );
}
