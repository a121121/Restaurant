"use client";

import { useEffect, useState } from "react";
import { motion, PanInfo } from "framer-motion";
import { Quote, Star, Shield, CheckCircle, Award, Users, Utensils } from "lucide-react";
import Image from "next/image";


const randomMan = "/man.jpg";
const randomWoman = "/woman.webp";

interface Testimonial {
    quote: string;
    author: string;
    company: string;
    rating: number;
    image: string;
    title: string;
    date: string;
    verified: boolean;
    helpful: number;
}

const testimonials: Testimonial[] = [
    {
        quote: `This is hands down the best dining experience I've had in years. The pasta was perfectly al dente and the sauce had layers of flavor I didn't expect. Already planning my next visit.`,
        author: "Rana",
        company: "Canberra, Australia",
        rating: 5,
        image: randomMan,
        title: "An Unforgettable Evening",
        date: "2022-03-23",
        verified: true,
        helpful: 12,
    },
    {
        quote: "Incredible food, warm atmosphere, and attentive staff. Every dish was beautifully presented and tasted even better than it looked. Will absolutely be coming back.",
        author: "Matthew R",
        company: "Australia",
        rating: 5,
        image: randomMan,
        title: "Outstanding Dining Experience",
        date: "2022-08-16",
        verified: true,
        helpful: 8,
    },
    {
        quote: "The steak was cooked to perfection and the sides were generous. Service was quick without feeling rushed. One of the best meals I've had this year.",
        author: "Roy",
        company: "Australia",
        rating: 5,
        image: randomMan,
        title: "Perfect Steak, Perfect Night",
        date: "2024-11-14",
        verified: true,
        helpful: 15,
    },
    {
        quote: "Took my wife here for our anniversary and she was blown away. The chef even came out to wish us well. Little touches like that make all the difference.",
        author: "Kanwal Shahzadi",
        company: "USA",
        rating: 5,
        image: randomWoman,
        title: "Far Exceeded Our Expectations",
        date: "2025-06-03",
        verified: true,
        helpful: 6,
    },
    {
        quote: "The dessert menu alone is worth the visit. The chocolate lava cake was warm, gooey, and absolutely divine. My friends were equally impressed.",
        author: "Veronica",
        company: "Australia",
        rating: 5,
        image: randomWoman,
        title: "Save Room for Dessert!",
        date: "2022-02-27",
        verified: true,
        helpful: 23,
    },
    {
        quote: "Great for any occasion — date night, family dinner, or celebrating with friends. The menu has something for everyone and the wine list is excellent.",
        author: "Ellen",
        company: "Australia",
        rating: 5,
        image: randomWoman,
        title: "Our New Favourite Spot",
        date: "2023-01-17",
        verified: true,
        helpful: 4,
    },
    {
        quote: "Food quality is exceptional and the ambiance is just right — cozy but not too dark. Generous portions and very reasonably priced for the quality 👌",
        author: "Lilly",
        company: "Australia",
        rating: 5,
        image: randomWoman,
        title: "Excellent Food & Atmosphere",
        date: "2025-02-14",
        verified: true,
        helpful: 2,
    },
];

export default function Testimonials() {
    const [index, setIndex] = useState(0);
    const [paused, setPaused] = useState(false);

    /* Auto rotate */
    useEffect(() => {
        if (paused) return;

        const id = setInterval(() => {
            setIndex((i) => (i + 1) % testimonials.length);
        }, 5000);

        return () => clearInterval(id);
    }, [paused]);

    const handleSwipe = (_: PointerEvent, info: PanInfo) => {
        const threshold = 80;

        if (info.offset.x < -threshold) {
            setIndex((i) => (i + 1) % testimonials.length);
        }

        if (info.offset.x > threshold) {
            setIndex((i) => (i - 1 + testimonials.length) % testimonials.length);
        }
    };

    const t = testimonials[index];

    return (
        <section className="relative py-12 lg:py-8 overflow-hidden bg-linear-to-b from-transparent via-frost-bg/30 to-transparent" id="testimonials">
            {/* Subtle background accents */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute top-1/4 left-0 w-72 h-72 bg-frost-accent/5 rounded-full blur-3xl" />
                <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-frost-accent-soft/5 rounded-full blur-3xl" />
            </div>

            <div className="container mx-auto relative z-10 px-4 sm:px-6 lg:px-8 max-w-7xl">
                <div className="flex flex-col-reverse lg:flex-row items-center gap-8 lg:gap-16">

                    {/* LEFT — REVIEW */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        viewport={{ once: true, amount: 0.3 }}
                        onMouseEnter={() => setPaused(true)}
                        onMouseLeave={() => setPaused(false)}
                        className="w-full lg:w-1/2"
                    >
                        <motion.div
                            key={index}
                            drag="x"
                            dragConstraints={{ left: 0, right: 0 }}
                            dragElastic={0.25}
                            onDragEnd={handleSwipe}
                            initial={{ opacity: 0, x: 40 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.35 }}
                            className="cursor-grab active:cursor-grabbing"
                        >
                            <div className="relative p-6 sm:p-8 lg:p-10 rounded-2xl backdrop-blur-xl border border-border shadow-xl dark:shadow-2xl dark:shadow-black/50 space-y-5 sm:space-y-6 min-h-[500px] sm:min-h-[420px] flex flex-col justify-center select-none transition-all duration-300 royal-card">

                                {/* Quote Icon */}
                                <div className="absolute top-6 right-6 opacity-[0.07]">
                                    <Quote className="h-20 w-20 sm:h-24 sm:w-24 text-frost-accent" />
                                </div>

                                {/* Author */}
                                <div className="flex items-center gap-3 sm:gap-4 relative z-10">
                                    <div className="relative">
                                        <Image
                                            src={t.image}
                                            alt={t.author}
                                            width={64}
                                            height={64}
                                            className="rounded-full w-14 h-14 sm:w-16 sm:h-16 object-cover ring-4 ring-frost-accent/20"
                                        />
                                        {t.verified && (
                                            <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center ring-2 ring-card">
                                                <CheckCircle className="h-4 w-4 text-white" />
                                            </div>
                                        )}
                                    </div>
                                    <div>
                                        <div className="flex items-center gap-2 flex-wrap">
                                            <p className="font-bold text-base sm:text-lg text-frost-heading">{t.author}</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Stars */}
                                <div className="flex items-center gap-1">
                                    {[...Array(5)].map((_, i) => (
                                        <Star
                                            key={i}
                                            className={`h-5 w-5 sm:h-6 sm:w-6 transition-all duration-300 ${i < t.rating
                                                ? "text-yellow-500 fill-yellow-500 dark:text-yellow-400 dark:fill-yellow-400"
                                                : "text-muted dark:text-muted/50"
                                                }`}
                                        />
                                    ))}
                                    <span className="ml-2 text-sm font-semibold text-frost-fg/80">
                                        {t.rating}.0
                                    </span>
                                </div>

                                {/* Title */}
                                <h3 className="text-xl sm:text-2xl font-bold text-frost-heading leading-tight">
                                    {t.title}
                                </h3>

                                {/* Quote */}
                                <blockquote className="text-base sm:text-lg leading-relaxed text-frost-fg/70 italic border-l-0 pl-0 my-0">
                                    &ldquo;{t.quote}&rdquo;
                                </blockquote>

                                {/* Meta */}
                                <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-xs sm:text-sm text-frost-fg/60 pt-2 border-t border-border">
                                    <span className="flex items-center gap-1.5 font-medium text-green-600 dark:text-green-400">
                                        <CheckCircle className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                                        Verified Diner
                                    </span>
                                    <span className="flex items-center gap-1.5">
                                        <Users className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                                        {t.helpful} found helpful
                                    </span>
                                </div>

                                <p className="lg:hidden text-center text-xs pt-2 text-frost-fg/40">
                                    Swipe to see more reviews
                                </p>
                            </div>
                        </motion.div>

                        {/* Dots */}
                        <div className="flex justify-center gap-2 mt-6">
                            {testimonials.map((_, i) => (
                                <button
                                    key={i}
                                    onClick={() => setIndex(i)}
                                    aria-label={`Go to testimonial ${i + 1}`}
                                    className={`h-2 rounded-full transition-all duration-300 ${i === index
                                        ? "w-8 bg-frost-accent shadow-lg shadow-frost-accent/50"
                                        : "w-2 bg-muted hover:bg-frost-accent/50"
                                        }`}
                                />
                            ))}
                        </div>
                    </motion.div>

                    {/* RIGHT — HEADING & RATING */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                        viewport={{ once: true, amount: 0.3 }}
                        className="text-center lg:text-left w-full lg:w-1/2"
                    >
                        <motion.h2
                            className="mb-4 sm:mb-6 text-3xl sm:text-4xl lg:text-5xl text-foreground uppercase leading-tight"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
                            viewport={{ once: true }}
                        >
                            Crafted with{" "}
                            <br />
                            <span className="text-2xl sm:text-3xl lg:text-4xl text-frost-fg/80">
                                Delicacy and Passion
                            </span>
                        </motion.h2>

                        <motion.p
                            className="text-frost-fg/70 mb-6 sm:mb-8 text-sm sm:text-base lg:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0 text-muted-foreground"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
                            viewport={{ once: true }}
                        >
                            Read verified guest experiences and discover why diners keep coming back for more
                        </motion.p>

                        <motion.div
                            className="flex flex-col items-center lg:items-start gap-4"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
                            viewport={{ once: true }}
                        >
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-frost-accent/10 to-frost-accent-soft/10 border border-frost-accent/30 text-sm sm:text-base font-medium text-frost-fg">
                                <span>Loved by over 2,300 happy guests</span>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}