'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { href: '/menu', label: 'MENU' },
        { href: '/about', label: 'ABOUT' },
        { href: '/book-a-table', label: 'BOOK A TABLE' },
    ];

    return (
        <>
            <nav
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                    ? 'bg-black/95 backdrop-blur-md shadow-lg'
                    : 'bg-black/60 backdrop-blur-sm'
                    }`}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16 lg:h-20">
                        {/* Logo */}
                        <Link
                            href="/"
                            className="flex items-center space-x-2 group"
                        >
                            <div className="flex items-center space-x-3">
                                <div className="w-8 h-8 lg:w-10 lg:h-10 bg-white/10 rounded-sm flex items-center justify-center group-hover:bg-white/20 transition-colors">
                                    <div className="w-4 h-4 lg:w-5 lg:h-5 border-2 border-white rotate-45"></div>
                                </div>
                                <span className="text-white font-light text-xl lg:text-2xl tracking-[0.3em] group-hover:tracking-[0.4em] transition-all">
                                    QITCHEN
                                </span>
                            </div>
                        </Link>

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className="relative px-4 lg:px-6 py-2 text-white/90 hover:text-white text-sm lg:text-base font-light tracking-wider transition-colors group"
                                >
                                    {link.label}
                                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                                </Link>
                            ))}
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="md:hidden p-2 hover:bg-white/10 rounded-md transition-colors"
                            aria-label="Toggle menu"
                        >
                            {isMobileMenuOpen ? (
                                <X className="w-6 h-6" />
                            ) : (
                                <Menu className="w-6 h-6" />
                            )}
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu */}
            <div
                className={`fixed inset-0 z-40 bg-black/95 backdrop-blur-lg md:hidden transition-all duration-300 ${isMobileMenuOpen
                    ? 'opacity-100 pointer-events-auto'
                    : 'opacity-0 pointer-events-none'
                    }`}
            >
                <div className="flex flex-col items-center justify-center h-full space-y-8 px-4">
                    {navLinks.map((link, index) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className=" text-2xl font-light tracking-widest hover:tracking-[0.3em] transition-all opacity-0 animate-fade-in"
                            style={{
                                animationDelay: `${index * 100}ms`,
                                animationFillMode: 'forwards',
                            }}
                        >
                            {link.label}
                        </Link>
                    ))}
                </div>
            </div>
        </>
    );
}