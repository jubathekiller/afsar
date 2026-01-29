'use client'
import React from 'react';
import { usePopup } from '@/context/PopupContext';

export default function Support() {
    const { openPopup } = usePopup();
    
    const handleShare = () => {
        openPopup({
            title: "Support Afsar's Quest",
            message: "Thanks for watching! Please share this video to support independent research-driven analysis."
        });
    };

    return (
        <section className="mt-6 md:mt-10 px-4 md:px-6"> 
            <div className="max-w-6xl mx-auto">
                <div className="bg-white rounded-[2rem] md:rounded-[3rem] overflow-hidden border border-gray-100 shadow-xl">
                    <div className="flex flex-col lg:flex-row">

                        {/* Content Side */}
                        <div className="flex-1 p-8 md:p-14 lg:p-16 flex flex-col justify-center text-center lg:text-left">
                            <div className="mb-4">
                                <span className="text-red-600 font-black tracking-[0.2em] uppercase text-[10px] bg-red-50 px-4 py-1.5 rounded-full inline-block">
                                    Support Us
                                </span>
                            </div>
                            
                            <h1 className="text-2xl md:text-4xl lg:text-5xl font-black text-gray-900 mb-6 leading-[1.1]">
                                Join the Quest <br className="hidden sm:block" />
                                <span className="text-red-600">Support Truth</span>
                            </h1>

                            <p className="text-sm md:text-base text-gray-600 mb-8 leading-relaxed max-w-md mx-auto lg:mx-0">
                                I create independent, research-driven analysis. There is no corporate funding—your support is my only strength.
                            </p>

                            {/* Features - Mobile friendly grid */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3 mb-8 text-left max-w-xs mx-auto lg:mx-0">
                                <div className="flex items-center text-gray-700 font-bold text-xs md:text-sm">
                                    <span className="bg-red-600 text-white rounded-full p-1 mr-3 flex-shrink-0">
                                        <svg className="w-2 h-2 md:w-3 md:h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M5 13l4 4L19 7"></path></svg>
                                    </span>
                                    Join the Change
                                </div>
                                <div className="flex items-center text-gray-700 font-bold text-xs md:text-sm">
                                    <span className="bg-red-600 text-white rounded-full p-1 mr-3 flex-shrink-0">
                                        <svg className="w-2 h-2 md:w-3 md:h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M5 13l4 4L19 7"></path></svg>
                                    </span>
                                    Independent Voice
                                </div>
                            </div>

                            <button 
                                onClick={() => handleShare()}
                                className="w-full sm:w-max bg-red-600 hover:bg-red-700 text-white px-10 py-4 rounded-2xl font-black text-sm md:text-base transition-all shadow-lg shadow-red-200 active:scale-95"
                            >
                                DONATE NOW
                            </button>
                        </div>

                        {/* QR Code Side */}
                        <div className="w-full lg:w-[40%] bg-gray-50 p-8 md:p-12 flex flex-col items-center justify-center border-t lg:border-t-0 lg:border-l border-gray-100">
                            <div className="relative group">
                                {/* Decorative circle behind QR */}
                                <div className="absolute inset-0 bg-red-600/5 rounded-full blur-3xl group-hover:bg-red-600/10 transition-colors"></div>
                                
                                <div className="relative bg-white p-5 md:p-6 rounded-[2.5rem] shadow-2xl border border-gray-100">
                                    <img
                                        src="https://www.afsarsquest.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbkash-qr.ff81a16e.png&w=1920&q=75"
                                        alt="bKash QR Code"
                                        className="w-40 h-40 md:w-56 md:h-56 object-contain"
                                    />
                                    <div className="mt-4 text-center border-t border-gray-50 pt-3">
                                        <div className="flex items-center justify-center gap-2 mb-1">
                                            <img src="https://www.afsarsquest.com/_next/image?url=%2FbKash.png&w=64&q=75" className="w-4 h-4" alt="bkash" />
                                            <p className="text-red-600 font-black text-[10px] md:text-xs uppercase tracking-tighter">Merchant Account</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <p className="mt-6 text-gray-400 text-center text-[10px] font-bold uppercase tracking-widest">
                                Scan with bKash App
                            </p>
                        </div>

                    </div>
                </div>

                <p className="text-center mt-8 text-gray-300 text-[9px] font-bold uppercase tracking-[0.4em]">
                    Afsar's Quest • 2026
                </p>
            </div>
        </section>
    );
}