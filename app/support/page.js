'use client' // ক্লায়েন্ট সাইড ফিচারের জন্য এটি জরুরি

import React from 'react'
import { Copy, Check, Landmark, Smartphone } from 'lucide-react' // আইকন ব্যবহারের জন্য
import { useState } from 'react'

// ফাংশনের নাম অবশ্যই Capital Letter দিয়ে শুরু করবেন
export default function page() {
    const [copied, setCopied] = useState(false);
    const mfsNumber = "+8801635332980";

    const handleCopy = (text) => {
        navigator.clipboard.writeText(text);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="bg-white min-h-screen w-full p-6 md:p-10 relative animate-in fade-in zoom-in duration-300">

            {/* Header Section */}
            <div className="text-center mb-12">
                <h2 className="text-red-600 font-black text-3xl md:text-5xl tracking-tight uppercase">
                    Direct Support
                </h2>
                <div className="h-1.5 w-24 bg-red-600 mx-auto mt-3 rounded-full"></div>
                <p className="text-gray-500 mt-5 font-medium text-sm md:text-lg max-w-xl mx-auto leading-relaxed">
                    Your contribution fuels independent research and analysis.
                </p>
            </div>

            {/* Main Grid Layout */}
            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch">

                {/* Left Column: QR Code Section */}
                <div className="bg-red-50/40 border border-red-100 rounded-[2.5rem] p-10 flex flex-col items-center justify-center text-center shadow-inner">
                    <div className="bg-white p-6 rounded-[2rem] shadow-2xl mb-8 transform hover:rotate-2 transition-transform duration-500">
                        <img
                            src="https://www.afsarsquest.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbkash-qr.ff81a16e.png&w=1920&q=75"
                            alt="bKash QR Code"
                            className="w-56 h-56 md:w-72 md:h-72 object-contain"
                        />
                    </div>
                    <div className="space-y-4">
                        <p className="text-xl font-black text-gray-800 uppercase tracking-tight">Scan to Pay</p>
                        <div className="flex items-center justify-center gap-3 bg-white px-6 py-3 rounded-full shadow-sm border border-red-50">
                            <img src="https://www.afsarsquest.com/_next/image?url=%2FbKash.png&w=64&q=75" alt="bKash" className="w-6 h-6" />
                            <span className="text-red-600 font-bold text-xs uppercase tracking-widest">bKash Merchant / Personal</span>
                        </div>
                    </div>
                </div>

                {/* Right Column: Wallets & Bank */}
                <div className="flex flex-col gap-6">

                    {/* Mobile Wallets Card */}
                    <div className="bg-white border border-gray-100 rounded-[2.5rem] p-8 hover:shadow-xl transition-all duration-500 group">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="p-3 bg-red-50 rounded-2xl group-hover:bg-red-600 group-hover:text-white transition-colors">
                                <Smartphone size={24} />
                            </div>
                            <div>
                                <p className="font-black text-gray-900 text-lg leading-none">MFS Wallets</p>
                                <p className="text-gray-400 text-[10px] font-black mt-1.5 uppercase tracking-widest">bKash / Nagad Personal</p>
                            </div>
                        </div>
                        <div className="bg-gray-50 rounded-2xl p-5 flex items-center justify-between border border-gray-100 group-hover:border-red-100 transition-colors">
                            <span className="text-red-600 font-black text-xl md:text-2xl tracking-tighter">{mfsNumber}</span>
                            <button
                                onClick={() => handleCopy(mfsNumber)}
                                className="flex items-center gap-2 text-[10px] font-black bg-white px-4 py-2 rounded-xl border border-gray-200 text-gray-500 uppercase hover:bg-black hover:text-white transition-all shadow-sm"
                            >
                                {copied ? <Check size={12} className="text-green-500" /> : <Copy size={12} />}
                                {copied ? "Copied" : "Copy"}
                            </button>
                        </div>
                    </div>

                    {/* Bank Details Card */}
                    <div className="bg-slate-900 rounded-[2.5rem] p-8 md:p-10 text-white relative overflow-hidden shadow-2xl flex-1 group">
                        <div className="absolute -right-6 -bottom-6 opacity-5 group-hover:opacity-10 transition-opacity">
                            <Landmark size={200} />
                        </div>

                        <div className="relative z-10 h-full flex flex-col justify-between">
                            <div className="flex items-center gap-4 mb-10">
                                <div className="bg-white p-2 rounded-xl">
                                    <img src="https://www.afsarsquest.com/_next/image?url=%2Fislami-bank.png&w=64&q=75" alt="IBBL" className="w-10 h-10 object-contain" />
                                </div>
                                <div>
                                    <p className="font-black text-xl leading-tight uppercase tracking-tight">Islami Bank Plc</p>
                                    <p className="text-gray-500 text-[10px] font-bold uppercase tracking-[0.2em]">Mirpur 1 Branch, Dhaka</p>
                                </div>
                            </div>

                            <div className="space-y-6">
                                <div>
                                    <p className="text-gray-500 text-[10px] font-black uppercase tracking-[0.3em] mb-2">Account Holder</p>
                                    <p className="font-bold text-lg md:text-xl tracking-wide border-l-2 border-red-600 pl-4">MD. NURUL AFSAR</p>
                                </div>
                                <div className="bg-white/5 rounded-3xl p-6 border border-white/10 backdrop-blur-sm">
                                    <p className="text-gray-500 text-[10px] font-black uppercase tracking-[0.3em] mb-2">Account Number</p>
                                    <p className="text-red-500 font-black text-2xl md:text-3xl tracking-[0.1em] break-all">20502100205884502</p>
                                </div>
                                <div className="flex justify-between items-center text-[10px] font-black text-gray-500 uppercase tracking-widest pt-2">
                                    <span>Routing: 125263106</span>
                                    <span className="text-red-500/40 italic">Independent Quest</span>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            {/* Footer Note */}
            <p className="text-center text-gray-400 text-[10px] mt-12 font-black uppercase tracking-[0.5em] opacity-50">
                Thank you for being part of this journey
            </p>
        </div>
    )
}