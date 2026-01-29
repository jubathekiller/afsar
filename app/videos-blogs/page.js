"use client";
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
export default function RecentVideo() {
    const [videos, setVideos] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchVideos = async () => {
            try {
                // আমরা আমাদের নিজেদের তৈরি করা API কল করছি
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

    if (loading) return <div className="text-center py-10 text-red-600 font-bold">Loading Videos...</div>;

    return (
        <section className="bg-white py-12">
            <div className="max-w-7xl mx-auto px-4">
               
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {videos.slice(0, 6).map((video) => (
                        <Link 
                            key={video.id} 
                            href={"video/"+video.link} 
                            
                            className="group bg-gray-50 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all"
                        >
                            <img src={video.thumbnail} alt={video.title} className="w-full aspect-video object-cover" />
                            <div className="p-4">
                                <h3 className="font-bold text-gray-900 line-clamp-2 group-hover:text-red-600">
                                    {video.title}
                                </h3>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}