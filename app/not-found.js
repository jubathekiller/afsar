'use client'

import React, { Suspense } from 'react' // Suspense ইম্পোর্ট করুন
import Link from 'next/link'
import { Home, ArrowLeft, Search } from 'lucide-react'
import { useRouter } from 'next/navigation'

// ১. মূল কন্টেন্টকে আলাদা একটি ফাংশনে নিয়ে আসুন
function NotFoundContent() {
  const router = useRouter()
  const handleBack = () => {
    if (typeof window !== 'undefined' && window.history.length > 1) {
      router.back()
    } else {
      router.push('/')
    }
  }

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center space-y-6">
        <div className="relative flex justify-center">
          <div className="absolute inset-0 bg-red-50 rounded-full blur-3xl opacity-50 scale-150"></div>
          <div className="relative bg-white border border-slate-100 p-8 rounded-full shadow-sm">
            <Search size={48} className="text-[#BC0000]" />
          </div>
        </div>

        <div className="space-y-2">
          <h1 className="text-7xl font-black text-slate-900 tracking-tighter">404</h1>
          <h2 className="text-xl font-bold uppercase tracking-[0.2em] text-slate-700">
            Page Not Found
          </h2>
          <p className="text-slate-500 font-light text-sm md:text-base leading-relaxed">
            দুঃখিত, আপনি যে পৃষ্ঠাটি খুঁজছেন সেটি খুঁজে পাওয়া যায়নি।
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
          <Link
            href="/"
            className="flex items-center justify-center gap-2 bg-[#BC0000] text-white px-8 py-3 font-bold uppercase text-[12px] tracking-widest hover:bg-slate-800 transition-all active:scale-95 shadow-lg"
          >
            <Home size={16} /> Back to Home
          </Link>

          <button
            type="button"
            onClick={handleBack}
            className="flex items-center justify-center gap-2 border border-slate-200 text-slate-600 px-8 py-3 font-bold uppercase text-[12px] tracking-widest hover:bg-slate-50 transition-all active:scale-95"
          >
            <ArrowLeft size={16} /> Go Back
          </button>
        </div>
      </div>
    </div>
  )
}

// ২. মূল এক্সপোর্ট ফাংশনে Suspense দিয়ে র‍্যাপ করুন
export default function NotFound() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
      <NotFoundContent />
    </Suspense>
  )
}