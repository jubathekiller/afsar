"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import nprogress from "nprogress";
import "nprogress/nprogress.css";

export default function TopLoader() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    // পেজ লোড শেষ হলে প্রোগ্রেস বার বন্ধ হবে
    nprogress.done();
    
    return () => {
      // পেজ পরিবর্তন শুরু হলে প্রোগ্রেস বার শুরু হবে
      nprogress.start();
    };
  }, [pathname, searchParams]);

  return null; // এটি শুধু ব্যাকগ্রাউন্ডে কাজ করবে, কিছু রেন্ডার করবে না
}