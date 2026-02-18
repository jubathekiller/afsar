import React from 'react'
import Link from 'next/link'
import { Facebook, Youtube, Instagram, Twitter } from 'lucide-react'

export default function Footer() {
    return (
        <footer className="bg-[#BC0000] py-4 w-full">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                    
                    {/* Copyright and Credits */}
                    <div>
                        <p className="text-white text-sm lg:text-lg font-medium">
                            © 2026 Afsar's Quest
                            
                        </p>
                    </div>

                    {/* Social Media Links */}
                    <div className="flex items-center justify-center gap-5">
                        <a 
                            target="_blank" 
                            href="https://www.youtube.com/@AfsarsQuest" 
                            className="text-white hover:scale-110 transition-transform"
                            aria-label="Youtube"
                        >
                            <Youtube size={20} />
                        </a>
                        <a 
                            target="_blank" 
                            href="https://www.facebook.com/afsar1031" 
                            className="text-white hover:scale-110 transition-transform"
                            aria-label="Facebook"
                        >
                            <Facebook size={20} />
                        </a>
                        <a 
                            target="_blank" 
                            href="https://www.instagram.com/afsarquest1031" 
                            className="text-white hover:scale-110 transition-transform"
                            aria-label="Instagram"
                        >
                            <Instagram size={20} />
                        </a>
                        <a 
                            target="_blank" 
                            href="https://x.com/afsar1031" 
                            className="text-white hover:scale-110 transition-transform"
                            aria-label="Twitter"
                        >
                            {/* Twitter (X) এর জন্য Lucide এ Twitter আইকন ব্যবহার করা হয়েছে */}
                            <Twitter size={20} />
                        </a>
                    </div>

                </div>
            </div>
        </footer>
    )
}