'use client'

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Facebook, Instagram, Twitter } from 'lucide-react';

export default function Footer() {
    const fadeInUp = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: [0.25, 0.46, 0.45, 0.94] as const
            }
        }
    };

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        }
    };

    const currentYear = new Date().getFullYear();

    return (
        <footer className="relative bg-background border-t overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute top-0 right-0 w-96 h-96 bg-primary rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary rounded-full blur-3xl" />
            </div>

            <div className="relative container mx-auto px-4 py-16">
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-3 gap-12"
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    {/* Brand Section */}
                    <motion.div variants={fadeInUp} className="space-y-6">
                        <h2 className="text-4xl font-bold uppercase tracking-wider">
                            Qiolia
                        </h2>
                        <p className="text-muted-foreground leading-relaxed">
                            Experience the art of Japanese cuisine with a modern twist.
                            Where tradition meets innovation.
                        </p>
                        <div className="flex gap-4">
                            {[
                                { icon: Facebook, href: '#', label: 'Facebook' },
                                { icon: Instagram, href: '#', label: 'Instagram' },
                                { icon: Twitter, href: '#', label: 'Twitter' }
                            ].map((social, index) => (
                                <motion.a
                                    key={social.label}
                                    href={social.href}
                                    aria-label={social.label}
                                    className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-primary hover:border-primary hover:text-primary-foreground transition-all duration-300"
                                    whileHover={{ scale: 1.1, rotate: 5 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <social.icon className="w-4 h-4" />
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>

                    {/* Quick Links */}
                    <motion.div variants={fadeInUp} className="space-y-6">
                        <h3 className="text-xl font-semibold uppercase tracking-wide">
                            Quick Links
                        </h3>
                        <ul className="space-y-3">
                            {['Home', 'Menu', 'About', 'Reservations', 'Gallery', 'Blog'].map((link) => (
                                <li key={link}>
                                    <Link
                                        href={`/${link.toLowerCase()}`}
                                        className="text-muted-foreground hover:text-foreground transition-colors duration-300 inline-flex items-center group"
                                    >
                                        <span className="w-0 h-px bg-primary group-hover:w-4 transition-all duration-300 mr-0 group-hover:mr-2" />
                                        {link}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Services */}
                    <motion.div variants={fadeInUp} className="space-y-6">
                        <h3 className="text-xl font-semibold uppercase tracking-wide">
                            Services
                        </h3>
                        <ul className="space-y-3">
                            {['Private Dining', 'Catering', 'Events', 'Gift Cards', 'Cooking Classes', 'Takeaway'].map((service) => (
                                <li key={service}>
                                    <Link
                                        href={`/${service.toLowerCase().replace(' ', '-')}`}
                                        className="text-muted-foreground hover:text-foreground transition-colors duration-300 inline-flex items-center group"
                                    >
                                        <span className="w-0 h-px bg-primary group-hover:w-4 transition-all duration-300 mr-0 group-hover:mr-2" />
                                        {service}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                </motion.div>

                {/* Newsletter Section */}
                <motion.div
                    className="mt-16 pt-8 border-t border-border"
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    <div className="max-w-2xl mx-auto text-center space-y-6">
                        <h3 className="text-2xl font-semibold uppercase tracking-wide">
                            Subscribe to Our Newsletter
                        </h3>
                        <p className="text-muted-foreground">
                            Stay updated with our latest dishes, events, and exclusive offers
                        </p>
                        <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="flex-1 px-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all duration-300"
                                required
                            />
                            <motion.button
                                type="submit"
                                className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium uppercase tracking-wide hover:bg-primary/90 transition-colors duration-300"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                Subscribe
                            </motion.button>
                        </form>
                    </div>
                </motion.div>

                {/* Bottom Bar */}
                <motion.div
                    className="mt-12 pt-8 border-t border-border"
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
                        <p>© {currentYear} Qiolia Restaurant. All rights reserved.</p>
                        <div className="flex gap-6">
                            <Link href="/privacy" className="hover:text-foreground transition-colors duration-300">
                                Privacy Policy
                            </Link>
                            <Link href="/terms" className="hover:text-foreground transition-colors duration-300">
                                Terms of Service
                            </Link>
                            <Link href="/cookies" className="hover:text-foreground transition-colors duration-300">
                                Cookie Policy
                            </Link>
                        </div>
                    </div>
                </motion.div>
            </div>
        </footer>
    );
}