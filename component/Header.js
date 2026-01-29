"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { usePopup } from '@/context/PopupContext';
export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();
    const { openPopup } = usePopup();
    // লিঙ্কগুলোর একটি লিস্ট তৈরি করা যাতে কোড ক্লিন থাকে
    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'Videos', href: '/videos-blogs' },
        { name: 'Support', href: '/support' },
    ];
    const handleShare = () => {
        openPopup({
            title: "Support Afsar's Quest",
            message: "Thanks for watching! Please share this video to support independent research-driven analysis."
        });
    };
    return (
        <nav className="bg-white border-b border-gray-100 sticky top-0 z-50 shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center">

                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <Link href="/" className="text-2xl font-extrabold bg-gradient-to-r from-red-600 to-rose-500 bg-clip-text text-transparent">
                            Afsar’s Quest
                        </Link>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex space-x-6 items-center">
                        {navLinks.map((link) => {
                            const isActive = pathname === link.href;
                            return (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className={`relative px-1 py-2 font-semibold transition-all duration-300 ${isActive
                                        ? 'text-red-600'
                                        : 'text-gray-600 hover:text-red-500'
                                        }`}
                                >
                                    {link.name}
                                    {/* Active Bottom Indicator */}
                                    {isActive && (
                                        <span className="absolute bottom-0 left-0 w-full h-0.5 bg-red-600 rounded-full shadow-[0_0_8px_rgba(220,38,38,0.5)]"></span>
                                    )}
                                </Link>
                            );
                        })}

                        <button 
                        onClick={()=>handleShare()}
                        className="ml-4 cursor-pointer bg-red-600 text-white px-6 py-2 rounded-lg font-bold hover:bg-red-700 transition-all shadow-md active:scale-95">
                            Donate Now
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700 p-2">
                            <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                {isOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-white border-t border-gray-50 py-4 px-4 space-y-2 shadow-xl">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            onClick={() => setIsOpen(false)}
                            className={`block px-4 py-3 rounded-xl font-bold transition-all ${pathname === link.href
                                ? 'bg-red-50 text-red-600'
                                : 'text-gray-700 hover:bg-gray-50'
                                }`}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <div className="pt-2">
                        <button 
                          onClick={()=>handleShare()}
                        className="block w-full text-center bg-red-600 text-white px-5 py-4 rounded-xl font-extrabold">
                            Donate Now
                        </button>
                    </div>
                </div>
            )}
        </nav>
    );
}