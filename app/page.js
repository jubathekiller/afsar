'use client' // ক্লায়েন্ট সাইড রেন্ডারিং নিশ্চিত করতে

import HeroSection from '@/component/HeroSection'
import RecentVideo from '@/component/RecentVideo'
import Support from '@/component/Support'
import React, { useState, useEffect } from 'react'

export default function Page() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // বিল্ড টাইমে বা সার্ভার রেন্ডারিং এর সময় এটি রান হবে না
  if (!isMounted) {
    return <div className="min-h-screen bg-white" />; // শুধু একটি সাদা স্ক্রিন বা লোডার
  }

  return (
    <main className="min-h-screen bg-white">
      <HeroSection />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 md:space-y-5 py-10">
        <div className="transform hover:scale-[1.01] transition-transform duration-500">
          <Support />
        </div>

        <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent w-full" />

        <RecentVideo />
      </div>
    </main>
  )
}