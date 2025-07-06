"use client";

import Image from "next/image";
import gridImg1 from "@/public/images/abt1.png";
import gridImg2 from "@/public/images/abt2.png";
import gridImg3 from "@/public/images/abt3.png";
import gridImg4 from "@/public/images/abt4.png";
import gridImg5 from "@/public/images/abt5.png";
import { useGSAP } from "@gsap/react";
import { SplitText, gsap } from "@/lib/gsap";
// import { useState } from "react";
import NisbaCounter from "./nisbaCounter";
import { useState } from "react";

export default function About() {
    const [start, setStart] = useState(false);

    useGSAP(() => {
        const titleSplit = new SplitText("#about h2", { type: "words" });

        const scrollTimeline = gsap.timeline({
            scrollTrigger: {
                trigger: "#about",
                start: "top top",
            },
        });

        scrollTimeline
            .from(titleSplit.words, {
                opacity: 0,
                duration: 3,
                yPercent: 100,
                ease: "expo.out",
                stagger: 0.2,
            })
            .addLabel("start", "-=2")
            .from(
                ".top-grid div",
                {
                    opacity: 0,
                    duration: 1,
                    ease: "power1.inOut",
                    xPercent: -20,
                    stagger: 0.01,
                },
                "start"
            )
            .from("#P1", {
                yPercent: 30,
                opacity: 0,
                duration: 0.5,
                onComplete: () => {
                    setStart(true);
                },
            })
            .from("#P2", {
                yPercent: -30,
                opacity: 0,
                duration: 0.5,
                delay: 2,
            })

            .from(".bottom-grid div", {
                opacity: 0,
                duration: 1,
                ease: "power1.inOut",
                stagger: 0.01,
                xPercent: 20,
            });
    });

    return (
        <section id="about">
            <div className="mb-16  px-5">
                <div className="content mb-12">
                    <div className="md:col-span-8">
                        <p className="badge">Best Cocktails</p>
                        <h2>
                            Where every detail matters{" "}
                            <span className="text-white">-</span>
                            from muddle to garnish
                        </h2>
                    </div>

                    <div className="sub-content">
                        <p>
                            Every cocktail we serve is a reflection of our
                            obsession with detail — from the first muddle to the
                            final garnish. That care is what turns a simple
                            drink into something truly memorable.
                        </p>

                        <div>
                            <p
                                id="P1"
                                className="md:text-3xl text-xl font-bold"
                            >
                                <NisbaCounter
                                    target={4.5}
                                    start={start}
                                    triggerId="#P1"
                                />
                                /5
                            </p>

                            <p id="P2" className="text-sm text-white-100">
                                More than +12000 customers
                            </p>
                        </div>
                    </div>
                </div>
                <div className="top-grid">
                    <div className="md:col-span-3" id="img1">
                        <div className="noisy" />
                        <Image src={gridImg1} alt="grid-Image-1" />
                    </div>

                    <div className="md:col-span-6" id="img2">
                        <div className="noisy" />
                        <Image src={gridImg2} alt="grid-Image-2" />
                    </div>

                    <div className="md:col-span-3" id="img3">
                        <div className="noisy" />
                        <Image src={gridImg3} alt="grid-Image-5" />
                    </div>
                </div>

                <div className="bottom-grid" id="img5">
                    <div className="md:col-span-8">
                        <div className="noisy" />
                        <Image src={gridImg4} alt="grid-Image-3" />
                    </div>

                    <div className="md:col-span-4" id="img4">
                        <div className="noisy" />
                        <Image src={gridImg5} alt="grid-Image-4" />
                    </div>
                </div>
            </div>
        </section>
    );
}
