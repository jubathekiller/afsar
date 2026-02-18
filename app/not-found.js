'use client' // এটি অবশ্যই যোগ করতে হবে

import React from 'react'
import Link from 'next/link'
import { Home, ArrowLeft, Search } from 'lucide-react'
import { useRouter } from 'next/navigation'

export default function NotFound() {
  const router = useRouter()

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center space-y-6">
        
        {/* Illustration Section */}
        <div className="relative flex justify-center">
          <div className="absolute inset-0 bg-red-50 rounded-full blur-3xl opacity-50 scale-150"></div>
          <div className="relative bg-white border border-slate-100 p-8 rounded-full shadow-sm">
             <Search size={48} className="text-[#BC0000]" />
          </div>
        </div>

        {/* Text Section */}
        <div className="space-y-2">
          <h1 className="text-7xl font-black text-slate-900 tracking-tighter">404</h1>
          <h2 className="text-xl font-bold uppercase tracking-[0.2em] text-slate-700">
            Page Not Found
          </h2>
          <p className="text-slate-500 font-light text-sm md:text-base leading-relaxed">
            দুঃখিত, আপনি যে পৃষ্ঠাটি খুঁজছেন সেটি খুঁজে পাওয়া যায়নি।
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
          <Link 
            href="/" 
            className="flex items-center justify-center gap-2 bg-[#BC0000] text-white px-8 py-3 font-bold uppercase text-[12px] tracking-widest hover:bg-slate-900 transition-all active:scale-95 shadow-lg shadow-red-100"
          >
            <Home size={16} /> Back to Home
          </Link>
          
          <button 
            type="button"
            onClick={() => router.back()} // এখানে window.history এর বদলে router.back() ব্যবহার করুন
            className="flex items-center justify-center gap-2 border border-slate-200 text-slate-600 px-8 py-3 font-bold uppercase text-[12px] tracking-widest hover:bg-slate-50 transition-all active:scale-95"
          >
            <ArrowLeft size={16} /> Go Back
          </button>
        </div>
      </div>
    </div>
  )
}