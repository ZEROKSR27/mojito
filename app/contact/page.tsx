"use client";

import { useGSAP } from "@gsap/react";
import { gsap, SplitText } from "@/lib/gsap";
import Link from "next/link";

export default function Page() {
    useGSAP(() => {
        const heroSplit = new SplitText(".title", {
            type: "chars, words",
        });

        const paragraphSplit = new SplitText(".subtitle", {
            type: "lines",
        });

        // heroAnimation
        // Apply text-gradient class once before animating

        gsap.from(heroSplit.chars, {
            xPercent: 100,
            opacity: 0.3,
            rotate: 360,
            duration: 1.8,
            ease: "expo.out",
            stagger: 0.32,
        });
        // pAnimation
        gsap.from(paragraphSplit.lines, {
            opacity: 0,
            yPercent: 100,
            duration: 1.8,
            ease: "expo.out",
            stagger: 0.06,
            delay: 1,
        });
    });

    return (
        <section className="bg-white-100 text-lime-300">
            <section id="hero">
                <h1 className="title tracking-tighter">MOJITO</h1>

                <div className="body">
                    {/* <img src="/images/arrow.png" alt="arrow" className="arrow" /> */}

                    <div className="content">
                        <div className="space-y-5 hidden md:block">
                            <p>Cool. Crisp. Classic.</p>
                            <p className="subtitle">
                                Sip the Spirit <br /> of Summer
                            </p>
                        </div>

                        <div className="view-cocktails">
                            <p className="subtitle">
                                Every cocktail on our menu is a blend of premium
                                ingredients, creative flair, and timeless
                                recipes — designed to delight your senses.
                            </p>
                            <a href="#cocktails">View cocktails</a>
                        </div>
                    </div>
                </div>
            </section>

            <div className="bg-amber-500 h-screen flex items-center justify-center">
                <Link href={"/"}>
                    <span>G</span>
                    <span>o</span>
                    <span>b</span>
                    <span>a</span>
                    <span>c</span>
                    <span>k</span>
                </Link>
            </div>
        </section>
    );
}
