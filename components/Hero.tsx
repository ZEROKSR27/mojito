"use client";
import Image from "next/image";
import React from "react";
import left from "@/public/images/hero-left-leaf.png";
import right from "@/public/images/hero-right-leaf.png";
import Link from "next/link";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap";
import { SplitText } from "gsap/SplitText";

export default function Hero() {
    useGSAP(() => {
        const HeroSplit = new SplitText(".title", { type: "chars, words" });
        const paragraphSplit = new SplitText(".subtitle", {
            type: "lines",
        });

        HeroSplit.chars.forEach((char) => char.classList.add("text-gradient"));

        gsap.from(HeroSplit.chars, {
            yPercent: 50,
            duration: 1.8,
            ease: "expo.out",
            stagger: 0.06,
            opacity: 0,
        });

        gsap.from(paragraphSplit.lines, {
            yPercent: 100,
            duration: 1.8,
            ease: "expo.out",
            stagger: 0.06,
            opacity: 0,
            delay: 1,
        });

        const leafsTL = gsap.timeline({
            scrollTrigger: {
                trigger: "#hero",
                start: "top top",
                end: "bottom top",
                scrub: true,
            },
        });

        leafsTL
            .to(".right-leaf", { y: 500 }, 0)
            .to(".left-leaf", { y: 200 }, 0);

        // gsap.to(".left-leaf", {
        //     y: -200,
        //     scrollTrigger: {
        //         trigger: "#hero",
        //         start: "top top",
        //         end: "bottom top",
        //         scrub: true,
        //     },
        // });
    });

    return (
        <>
            <section id="hero" className="noisy">
                <h1 className="title tracking-tighter">MOJITO</h1>
                <Image src={left} alt="left leaf" className="left-leaf" />
                <Image src={right} alt="right leaf" className="right-leaf" />

                <div className="body">
                    <div className="content">
                        <div className=" space-y-5 hidden  md:block">
                            <p className="alsoAnimated">
                                Coll. Crisp. Classic.
                            </p>
                            <p className="subtitle">
                                Sip The Spirit <br /> OF Summer
                            </p>
                        </div>

                        <div className="view-cocktails">
                            <p className="subtitle">
                                Every cocktail on our menu is a blend of premium
                                ingredients, creative flair, and timeless
                                recipes — designed to delight your senses.
                            </p>
                            <Link href={"#cocktails"}>View Cocktails</Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
