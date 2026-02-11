'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Instagram, Facebook, Twitter } from 'lucide-react';

export default function HeroSection() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const sideImages = [
        {
            id: 1,
            src: '/images/sushi-roll.jpg',
            alt: 'Sushi Roll',
            label: 'MENU',
            link: '/menu',
        },
        {
            id: 2,
            src: '/images/restaurant-ambiance.jpg',
            alt: 'Restaurant Ambiance',
            label: 'RESERVATION',
            link: '/book-a-table',
        },
        {
            id: 3,
            src: '/images/restaurant-interior.jpg',
            alt: 'Restaurant Interior',
            label: 'OUR RESTAURANT',
            link: '/about',
        },
    ];

    return (
        <section className="relative min-h-screen w-full overflow-hidden bg-[#1a1a1a]">
            {/* Background Image */}
            <div className="absolute inset-0">
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{
                        backgroundImage: 'url(/images/hero-bg.jpg)',
                        filter: 'brightness(0.4)',
                    }}
                />
                <div className="absolute inset-0 bg-linear-to-r from-black/80 via-black/50 to-transparent" />
            </div>

            {/* Main Content Grid */}
            <div className="relative min-h-screen grid grid-cols-1 lg:grid-cols-12 gap-0">
                {/* Left Side - Hero Text */}
                <div className="lg:col-span-7 flex items-center justify-center lg:justify-start px-6 sm:px-12 lg:px-20 py-32 lg:py-0">
                    <div
                        className={`space-y-8 transform transition-all duration-1000 ${isVisible
                                ? 'translate-y-0 opacity-100'
                                : 'translate-y-12 opacity-0'
                            }`}
                    >
                        {/* Hero Image - Bowl */}
                        <div className="relative w-full max-w-md mx-auto lg:mx-0">
                            <div className="relative aspect-square rounded-full overflow-hidden shadow-2xl">
                                <img
                                    src="/images/sushi-bowl.jpg"
                                    alt="Sushi Bowl"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent" />
                            </div>
                        </div>

                        {/* Text Content */}
                        <div className="space-y-6">
                            <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-light text-white tracking-tight leading-none">
                                SUSHI
                                <br />
                                <span className="tracking-[0.15em]">SENSATION</span>
                            </h1>
                            <p className="text-white/70 text-base sm:text-lg font-light max-w-md leading-relaxed">
                                Experience the art of authentic Japanese cuisine crafted with
                                precision and passion.
                            </p>
                        </div>

                        {/* CTA Button */}
                        <div className="pt-4">
                            <Link
                                href="/book-a-table"
                                className="inline-block px-10 py-4 bg-white text-black font-light text-sm tracking-[0.2em] hover:bg-white/90 transition-all duration-300 hover:tracking-[0.25em] shadow-lg hover:shadow-xl"
                            >
                                RESERVE A TABLE
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Right Side - Image Grid */}
                <div className="hidden lg:flex lg:col-span-5 flex-col justify-center gap-6 pr-6 py-20">
                    {sideImages.map((image, index) => (
                        <Link
                            key={image.id}
                            href={image.link}
                            className="group relative h-48 overflow-hidden shadow-2xl transform transition-all duration-500 hover:scale-105"
                            style={{
                                animationDelay: `${(index + 1) * 200}ms`,
                            }}
                        >
                            <img
                                src={image.src}
                                alt={image.alt}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent" />
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />

                            <div className="absolute bottom-0 right-0 p-6">
                                <span className="text-white text-sm font-light tracking-[0.2em] opacity-90 group-hover:opacity-100 group-hover:tracking-[0.25em] transition-all duration-300">
                                    {image.label}
                                </span>
                            </div>

                            {/* Hover Border Effect */}
                            <div className="absolute inset-0 border-2 border-white/0 group-hover:border-white/30 transition-colors duration-300" />
                        </Link>
                    ))}
                </div>
            </div>

            {/* Social Media Links - Bottom Left */}
            <div className="absolute bottom-8 left-6 sm:left-12 flex items-center space-x-6 z-10">
                <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/60 hover:text-white transition-colors duration-300"
                    aria-label="Instagram"
                >
                    <Instagram className="w-5 h-5" />
                </a>
                <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/60 hover:text-white transition-colors duration-300"
                    aria-label="Facebook"
                >
                    <Facebook className="w-5 h-5" />
                </a>
                <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/60 hover:text-white transition-colors duration-300"
                    aria-label="Twitter"
                >
                    <Twitter className="w-5 h-5" />
                </a>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 right-6 sm:right-12 flex flex-col items-center space-y-2 animate-bounce">
                <div className="w-px h-16 bg-linear-to-b from-white/0 via-white/60 to-white/0" />
                <span className="text-white/40 text-xs tracking-widest rotate-90 origin-center mt-8">
                    SCROLL
                </span>
            </div>
        </section>
    );
}