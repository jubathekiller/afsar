import HeroSection from '@/component/HeroSection'
import RecentVideo from '@/component/RecentVideo'
import Support from '@/component/Support'
import React from 'react'

export default function Page() {
  return (
    <main className="min-h-screen bg-white">
      {/* হিরো সেকশন সাধারণত ফুল উইডথ হয় */}
      <HeroSection />

      {/* কন্টেইনার সেকশন */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 md:space-y-5 py-10">
        
        {/* Support Section: এটা অনেকটা Call to Action (CTA) এর মতো কাজ করবে */}
        <div className="transform hover:scale-[1.01] transition-transform duration-500">
          <Support />
        </div>

        {/* Divider (ঐচ্ছিক - দেখতে ক্লিন লাগে) */}
        <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent w-full" />

        {/* Recent Videos Section */}
        <RecentVideo />
        
      </div>
    </main>
  )
}