'use client'
import React, { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import Link from 'next/link'

export default function page() {
    const { vid } = useParams();
    const [allVideos, setAllVideos] = useState([]);
    const [currentVideo, setCurrentVideo] = useState(null);
    const [isExpanded, setIsExpanded] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchVideos = async () => {
            try {
                const response = await fetch('/api/videos');
                const data = await response.json();
                if (!data.error) {
                    setAllVideos(data);
                    // বর্তমান ভিডিওর ডাটা খুঁজে বের করা
                    const video = data.find(v => v.id === vid);
                    setCurrentVideo(video);
                }
                setLoading(false);
            } catch (error) {
                console.error("Error:", error);
                setLoading(false);
            }
        };
        fetchVideos();
    }, [vid]);

    // টেক্সট প্রসেসিং ফাংশন: লিঙ্ক এবং হ্যাশট্যাগ চিনে নেওয়া
    const formatDescription = (text) => {
        if (!text) return "";

        // URL এবং Hashtag ধরার জন্য Regex
        const urlRegex = /(https?:\/\/[^\s]+)/g;
        const hashtagRegex = /(#[a-zA-Z0-9_]+)/g;

        const parts = text.split(/(\s+)/); // স্পেস দিয়ে টেক্সট ভাগ করা

        return parts.map((part, i) => {
            if (part.match(urlRegex)) {
                return <a key={i} href={part} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">{part}</a>;
            }
            if (part.match(hashtagRegex)) {
                return <span key={i} className="text-blue-600 cursor-pointer hover:underline">{part}</span>;
            }
            return part;
        });
    };

    if (loading) return <div className="text-center py-20 text-red-600 font-bold">Loading...</div>;

    const moreVideos = allVideos.filter(v => v.id !== vid);
    console.log(currentVideo);
    return (
        <div className='min-h-screen bg-gray-50 pt-20 pb-10 px-4 md:px-8'>
            <div className='max-w-7xl mx-auto flex flex-col lg:flex-row gap-8'>
                {
                    currentVideo === undefined ? (
                        <div className='w-full text-center py-20 text-red-600 font-bold'>
                            Video not found.
                        </div>
                    ) : (
                        <div className='w-full lg:w-[68%]'>
                            <div className='bg-white rounded-3xl shadow-sm overflow-hidden border border-gray-100'>
                                <div className='aspect-video bg-black'>
                                    <iframe
                                        className="w-full h-full"
                                        src={`https://www.youtube.com/embed/${vid}?autoplay=1`}
                                        title="Main Video"
                                        frameBorder="0"
                                        allowFullScreen
                                    ></iframe>
                                </div>

                                <div className='p-6 md:p-8'>
                                    <h1 className='text-2xl md:text-xl font-black text-gray-900 leading-tight'>
                                        {currentVideo?.title}
                                    </h1>

                                    {/* Description Box with "Show More" functionality */}
                                    <div className='mt-6 bg-gray-100 rounded-2xl p-5 relative'>
                                        <div className={`text-gray-700 text-sm leading-relaxed whitespace-pre-wrap ${!isExpanded ? 'max-h-24 overflow-hidden' : 'h-auto pb-8'}`}>
                                            {formatDescription(currentVideo?.description)}
                                        </div>

                                        <button
                                            onClick={() => setIsExpanded(!isExpanded)}
                                            className='mt-2 text-gray-900 cursor-pointer font-bold text-sm hover:underline block'
                                        >
                                            {isExpanded ? "Show Less" : "...more"}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }
                {/* Left Side: Main Video Player & Description */}


                {/* Right Side: Sidebar */}
                <div className='w-full lg:w-[32%]'>
                    <div className='bg-white rounded-3xl p-6 shadow-sm border border-gray-100'>
                        <h2 className='text-xl font-bold text-gray-900 mb-6'>Up Next</h2>
                        <div className='flex flex-col gap-5'>
                            {moreVideos.slice(0, 10).map((video) => (
                                <Link key={video.id} href={`/video/${video.id}`} className='flex gap-4 group'>
                                    <div className='relative flex-shrink-0 w-32 h-20 overflow-hidden rounded-xl'>
                                        <img src={video.thumbnail} alt="" className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-500' />
                                    </div>
                                    <div className='flex flex-col'>
                                        <h3 className='text-sm font-bold text-gray-800 line-clamp-2 leading-snug group-hover:text-red-600 transition-colors'>
                                            {video.title}
                                        </h3>
                                        <span className='text-[10px] text-gray-400 mt-1 font-semibold uppercase'>
                                            {new Date(video.published).toLocaleDateString()}
                                        </span>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}