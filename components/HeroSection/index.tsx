'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

const SKIP_FRAMES = 10;
const VIDEO_FPS = 30;
const SKIP_TIME = SKIP_FRAMES / VIDEO_FPS;

export default function HeroSection() {
    const [isVisible, setIsVisible] = useState(false);
    const [videoReady, setVideoReady] = useState(false);
    const videoRef = useRef<HTMLVideoElement | null>(null);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        video.muted = true;
        video.volume = 0;
        video.defaultMuted = true;

        let hasSeeked = false;

        const startPlaybackCorrectly = async () => {
            try {
                await video.play();
                requestAnimationFrame(() => {
                    video.currentTime = SKIP_TIME;
                });
            } catch {
                // autoplay blocked
            }
        };

        const handleSeeked = () => {
            if (!hasSeeked && video.currentTime >= SKIP_TIME) {
                hasSeeked = true;
                setVideoReady(true);
            }
        };

        const handleTimeUpdate = () => {
            if (video.duration && video.currentTime >= video.duration - 0.05) {
                video.currentTime = SKIP_TIME;
                video.play().catch(() => { });
            }
        };

        const handleVisibilityChange = () => {
            document.hidden ? video.pause() : video.play().catch(() => { });
        };

        video.addEventListener('loadeddata', startPlaybackCorrectly);
        video.addEventListener('seeked', handleSeeked);
        video.addEventListener('timeupdate', handleTimeUpdate);
        document.addEventListener('visibilitychange', handleVisibilityChange);

        return () => {
            video.removeEventListener('loadeddata', startPlaybackCorrectly);
            video.removeEventListener('seeked', handleSeeked);
            video.removeEventListener('timeupdate', handleTimeUpdate);
            document.removeEventListener('visibilitychange', handleVisibilityChange);
        };
    }, []);

    const cards = [
        {
            id: 1,
            src: '/assets/menu.webp',
            alt: 'Sushi Roll',
            label: 'Menu',
            link: '/menu',
        },
        {
            id: 2,
            src: '/assets/reservation.webp',
            alt: 'Restaurant Ambiance',
            label: 'Reservations',
            link: '/reservation',
        },
        {
            id: 3,
            src: '/assets/restaurant.webp',
            alt: 'Restaurant Interior',
            label: 'Our Restaurant',
            link: '/about',
        },
    ];

    return (
        <section
            className="relative mx-auto w-full max-h-screen overflow-hidden bg-black"
            role="banner"
            aria-label="noir Demo Website for Businesses"
        >
            {/* Background Image (shown until video is ready) */}
            <Image
                src="/assets/hero.webp"
                alt="A black table with different dishes photo taken from top"
                fill
                priority
                className={`object-cover object-[80%_20%] transition-opacity duration-700 ${videoReady ? 'opacity-0' : 'opacity-100'
                    }`}
            />

            {/* Background Video (optional - uncomment to use) */}
            {/* <video
                ref={videoRef}
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
                    videoReady ? 'opacity-100' : 'opacity-0'
                }`}
                style={{ objectPosition: 'center 25%' }}
                playsInline
                preload="auto"
                poster="/assets/hero3.webp"
                aria-hidden="true"
            >
                <source src="/assets/hero-bg.mp4" type="video/mp4" />
            </video> */}

            {/* Overlay gradient for better text readability */}
            <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-black/70" />

            {/* Content Container */}
            <div className="relative min-h-screen flex flex-col">
                {/* Mobile Layout - Stacked vertically */}
                <div className="md:hidden flex flex-col h-screen">
                    {/* Hero Section - Takes available space */}
                    <div className="flex-1 flex items-end justify-center p-6 pb-8">
                        <div
                            className={`space-y-3 text-center transition-all duration-1000 delay-300 ${isVisible
                                ? 'opacity-100 translate-y-0'
                                : 'opacity-0 translate-y-8'
                                }`}
                        >
                            <h1 className="text-foreground text-5xl font-light tracking-tight leading-none">
                                A tasteful culinary experience
                            </h1>
                            <p className="text-muted-foreground text-lg font-light tracking-wide">
                                Experience the authentic flavors of the world
                            </p>
                        </div>
                    </div>

                    {/* Cards Section - Fixed at bottom */}
                    <div className="bg-linear-to-t from-background via-background/95 to-transparent p-6 pt-8 pb-8 space-y-4">
                        {cards.map((card, index) => (
                            <Link
                                key={card.id}
                                href={card.link}
                                className={`group relative h-32 overflow-hidden rounded-lg transition-all duration-700 block ${isVisible
                                    ? 'opacity-100 translate-y-0'
                                    : 'opacity-0 translate-y-8'
                                    } hover:scale-[1.02] hover:shadow-xl`}
                                style={{
                                    transitionDelay: `${(index + 4) * 150}ms`,
                                }}
                            >
                                {/* Card Image */}
                                <div className="absolute inset-0">
                                    <img
                                        src={card.src}
                                        alt={card.alt}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                </div>

                                {/* Gradient Overlay */}
                                <div className="absolute inset-0 bg-linear-to-t from-background/90 via-background/40 to-transparent" />

                                {/* Hover Overlay */}
                                <div className="absolute inset-0 bg-background/0 group-hover:bg-primary/10 transition-colors duration-300" />

                                {/* Card Label */}
                                <div className="absolute bottom-0 right-0 p-4 flex items-center gap-2">
                                    <span className="text-foreground text-sm font-light tracking-wider transition-all duration-300 group-hover:tracking-widest group-hover:text-primary">
                                        {card.label}
                                    </span>
                                    <ArrowRight className="w-4 h-4 text-foreground transition-all duration-300 group-hover:translate-x-1 group-hover:text-primary" />
                                </div>

                                {/* Border Effect on Hover */}
                                <div className="absolute inset-0 border border-border/0 group-hover:border-primary/60 transition-colors duration-300 rounded-lg" />
                            </Link>
                        ))}
                    </div>
                </div>

                {/* Tablet and Desktop Layout */}
                <div className="hidden md:flex flex-col min-h-screen lg:min-h-screen py-6 md:py-8 lg:py-0">
                    {/* Main Content Area */}
                    <div className="flex-1 flex flex-col lg:flex-row items-end lg:items-stretch p-6 md:p-8 lg:p-12 gap-6 lg:gap-8">
                        {/* Left Side - Tagline */}
                        <div
                            className={`flex-1 flex items-end pb-4 lg:pb-8 transition-all duration-1000 delay-300 ${isVisible
                                ? 'opacity-100 translate-y-0'
                                : 'opacity-0 translate-y-8'
                                }`}
                        >
                            <div className="space-y-3">
                                <h1 className="text-foreground text-6xl lg:text-7xl xl:text-8xl font-light tracking-wide leading-none uppercase">
                                    noir
                                </h1>
                                <p className="text-muted-foreground text-xl lg:text-2xl font-light tracking-wide">
                                    Experience the authentic flavors of the world
                                </p>
                            </div>
                        </div>

                        {/* Right Side - Cards (row on medium, column on large) */}
                        <div className="w-full lg:w-auto lg:shrink-0 pb-4 lg:pt-24 xl:pt-8 transition-all duration-300">
                            <div className="grid grid-cols-3 lg:grid-cols-1 gap-4 lg:gap-4 lg:w-80 xl:w-96">
                                {cards.map((card, index) => (
                                    <Link
                                        key={card.id}
                                        href={card.link}
                                        className={`group relative h-48 lg:h-40 xl:h-48 overflow-hidden rounded-lg transition-all duration-700 ${isVisible
                                            ? 'opacity-100 translate-x-0'
                                            : 'opacity-0 translate-x-8'
                                            } hover:scale-[1.02] hover:shadow-xl`}
                                        style={{
                                            transitionDelay: `${(index + 1) * 150}ms`,
                                        }}
                                    >
                                        {/* Card Image */}
                                        <div className="absolute inset-0">
                                            <img
                                                src={card.src}
                                                alt={card.alt}
                                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                            />
                                        </div>

                                        {/* Gradient Overlay */}
                                        <div className="absolute inset-0 bg-linear-to-t from-background/90 via-background/40 to-transparent" />

                                        {/* Hover Overlay */}
                                        {/* <div className="absolute inset-0 bg-background/0 group-hover:bg-primary/5 transition-colors duration-300" /> */}

                                        {/* Card Label */}
                                        <div className="absolute bottom-0 right-0 p-5 flex items-center gap-2">
                                            <span className="text-foreground text-sm md:text-base font-light tracking-wider transition-all duration-300 group-hover:tracking-widest group-hover:text-primary">
                                                {card.label}
                                            </span>
                                            <ArrowRight className="w-4 h-4 text-foreground transition-all duration-300 group-hover:translate-x-1 group-hover:text-primary" />
                                        </div>

                                        {/* Border Effect on Hover */}
                                        <div className="absolute inset-0 border border-border/0 group-hover:border-primary/60 transition-colors duration-300 rounded-lg" />
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}