import { NextResponse } from 'next/server';

export async function GET() {
    const CHANNEL_ID = "UC7IdqAY0l9PfXh_I8O4p4Zw";
    const RSS_URL = `https://www.youtube.com/feeds/videos.xml?channel_id=${CHANNEL_ID}`;

    try {
        const response = await fetch(RSS_URL, {
            next: { revalidate: 3600 }
        });
        
        if (!response.ok) throw new Error("Failed to fetch from YouTube");

        const xmlData = await response.text();

        // Regex দিয়ে ডেটা বের করা
        const videoIds = [...xmlData.matchAll(/<yt:videoId>(.*?)<\/yt:videoId>/g)].map(m => m[1]);
        const titles = [...xmlData.matchAll(/<title>(.*?)<\/title>/g)].map(m => m[1]).slice(1);
        const publishedDates = [...xmlData.matchAll(/<published>(.*?)<\/published>/g)].map(m => m[1]);
        
        // ডেসক্রিপশন বের করার জন্য Regex (media:description ট্যাগ টার্গেট করে)
        const descriptions = [...xmlData.matchAll(/<media:description>(.*?)<\/media:description>/gs)].map(m => m[1]);

        const videos = videoIds.map((id, index) => ({
            id: id,
            title: titles[index] || "Untitled Video",
            description: descriptions[index] || "No description available", // এখানে ডেসক্রিপশন অ্যাড করা হয়েছে
            link: id,
            thumbnail: `https://i.ytimg.com/vi/${id}/maxresdefault.jpg`, 
            published: publishedDates[index]
        }));

        return NextResponse.json(videos);
    } catch (error) {
        console.error("Fetch Error:", error);
        return NextResponse.json({ error: "Failed to fetch videos" }, { status: 500 });
    }
}