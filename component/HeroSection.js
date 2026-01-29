'use client'
import React from 'react'
import Link from 'next/link'
import { usePopup } from '@/context/PopupContext'
export default function HeroSection() {
    const { openPopup } = usePopup();
    const handleShare = () => {
        openPopup({
            title: "Support Afsar's Quest",
            message: "Thanks for watching! Please share this video to support independent research-driven analysis."
        });
    };
    return (
        <section className="relative w-full min-h-[90vh] flex items-center overflow-hidden bg-black">

            {/* 1. Main Background Image Layer */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-[20s] scale-110 motion-safe:animate-[pulse_10s_infinite]"
                style={{
                    backgroundImage: "url('https://www.afsarsquest.com/background-image.png')",
                    backgroundAttachment: 'fixed' // Parallax effect
                }}
            >
                {/* 2. Layered Overlays for Professional Look */}
                {/* কালচে লাল গ্রেডিয়েন্ট যা লেখাকে ফুটিয়ে তুলবে */}
                <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-red-900/40"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-red/50"></div>
            </div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10 py-20 lg:py-0">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    {/* Left Side: Text Content */}
                    <div className="text-white order-2 lg:order-1">
                        <div className="inline-block px-3 py-1 rounded-full bg-red-600/20 border border-red-600/50 text-red-500 text-sm font-bold mb-6 tracking-wider uppercase">
                            Analysis • Activism • Awareness
                        </div>

                        <h1 className="text-5xl md:text-7xl font-black leading-tight mb-6">
                            Afsar’s <br />
                            <span className="text-red-600">Quest
                            </span>
                        </h1>

                        <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed max-w-xl">
                            I am Afsar: Political Analyst & Content Creator. Delivering research-driven commentary to fight propaganda and decode injustice in Bangladesh & beyond.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-5">
                            <button
                                onClick={() => handleShare()}
                                className="bg-red-600 cursor-pointer hover:bg-red-700 text-white px-10 py-4 rounded-xl font-bold text-lg transition-all shadow-xl shadow-red-600/30 active:scale-95">
                                Donate Now
                            </button>
                            <Link href={'/videos-blogs'} className="bg-white/5 hover:bg-white/10 backdrop-blur-md text-white border border-white/20 px-10 py-4 rounded-xl font-bold text-lg transition-all">
                                Watch Insights
                            </Link>
                        </div>
                    </div>

                    {/* Right Side: Featured Person/Side Image */}
                    <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
                        <div className="relative w-full max-w-[450px]">
                            {/* Decorative Glow behind the image */}
                            <div className="absolute -inset-4 bg-red-600 opacity-20 blur-3xl rounded-full animate-pulse"></div>

                            <div className="relative rounded-3xl border-2 border-white/10 overflow-hidden shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-500">
                                <img
                                    src="https://www.afsarsquest.com/_next/image?url=%2Ffb.jpeg&w=1920&q=75" // আপনার পোর্ট্রেট ছবি এখানে দিন
                                    alt="Afsar Portrait"
                                    className="w-full h-auto object-cover scale-105 hover:scale-100 transition-transform duration-700"
                                />
                                {/* নিচের অংশটি ব্যাকগ্রাউন্ডের সাথে মিশিয়ে দেওয়ার জন্য ওভারলে */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}