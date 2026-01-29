"use client";
import React, { useEffect, useState } from 'react';
import Link from 'next/link';

export default function RecentVideo() {
    const [videos, setVideos] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchVideos = async () => {
            try {
                const response = await fetch('/api/videos');
                const data = await response.json();
                if (!data.error) {
                    setVideos(data);
                }
                setLoading(false);
            } catch (error) {
                console.error("Error:", error);
                setLoading(false);
            }
        };
        fetchVideos();
    }, []);

    // Skeleton Loading: ভিডিও লোড হওয়ার সময় ইউজার একটি সুন্দর প্রি-ভিউ দেখবে
    if (loading) {
        return (
            <section className="bg-white py-12">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="h-10 w-48 bg-gray-200 animate-pulse rounded-lg mb-8"></div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[1, 2, 3, 4, 5, 6].map((n) => (
                            <div key={n} className="rounded-2xl bg-gray-100 h-64 animate-pulse"></div>
                        ))}
                    </div>
                </div>
            </section>
        );
    }

    return (
        <section className="bg-white py-10 md:py-16">
            <div className="max-w-7xl mx-auto px-5">
                {/* Header Section */}
                <div className="flex items-center justify-between mb-10">
                    <h2 className="text-2xl md:text-3xl font-black border-l-8 border-red-600 pl-4 text-gray-900 uppercase tracking-tighter">
                        Latest Content
                    </h2>
                    <div className="hidden md:block h-[2px] flex-grow bg-gray-100 ml-8"></div>
                </div>
                
                {/* Video Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {videos.slice(0, 6).map((video) => (
                        <Link 
                            key={video.id} 
                            href={`/video/${video.link}`} 
                            className="group flex flex-col bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
                        >
                            {/* Thumbnail Wrapper */}
                            <div className="relative overflow-hidden aspect-video">
                                <img 
                                    src={video.thumbnail} 
                                    alt={video.title} 
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                                {/* Play Icon Overlay (Desktop Only) */}
                                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                                    <div className="bg-red-600 p-3 rounded-full text-white shadow-lg">
                                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M8 5v14l11-7z" />
                                        </svg>
                                    </div>
                                </div>
                            </div>

                            {/* Info Section */}
                            <div className="p-5 flex flex-col flex-grow">
                                <h3 className="font-bold text-gray-900 text-lg leading-tight line-clamp-2 group-hover:text-red-600 transition-colors mb-4">
                                    {video.title}
                                </h3>
                                
                                <div className="mt-auto flex items-center text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                                    <span className="text-red-600 mr-2">●</span>
                                    Afsar's Quest Analysis
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}