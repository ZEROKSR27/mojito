"use client";
import { featureLists, goodLists } from "@/constants";
import Image from "next/image";
import React from "react";
import checkImg from "@/public/images/check.png";
import maskedImg from "@/public/images/under-img.jpg";
import { useGSAP } from "@gsap/react";
import { useMediaQuery } from "react-responsive";
import { gsap } from "@/lib/gsap";

export default function Art() {
    const isMobile = useMediaQuery({ maxWidth: 767 });

    useGSAP(() => {
        const start = isMobile ? "top top" : "top top";

        const maskTimeline = gsap.timeline({
            scrollTrigger: {
                trigger: "#art",
                start,
                end: "bottom center",
                scrub: 0.1,
                pin: true,
            },
        });

        maskTimeline
            .to(".will-fade", {
                opacity: 0,
                stagger: 0.2,
                ease: "power1.inOut",
            })
            .add(
                isMobile
                    ? gsap.to(".will-fade", {
                          width: 0,
                          height: 0,
                          ease: "power1.out",
                      })
                    : (undefined as unknown as gsap.core.Tween)
            )
            .to(".masked-img", {
                scale: 1.3,
                maskPosition: "center",
                maskSize: "400%",
                duration: 1,
                ease: "power1.inOut ",
            })
            .to("#masked-content", {
                opacity: 1,
                duration: 1,
                ease: "power1.inOut",
            });
    });

    return (
        <section id="art">
            <div className="container  mx-auto pt-20 h-full">
                <h2 className="will-fade">The Art</h2>
                <div className="content xl:px-20 ">
                    <ul className="space-y-4 will-fade ">
                        {goodLists.map((feature, i) => (
                            <li key={i} className="flex items-center gap-2">
                                <Image src={checkImg} alt="checkmark" />
                                <p>{feature}</p>
                            </li>
                        ))}
                    </ul>
                    <div className="cocktail-img">
                        <Image
                            alt="cocktail Image"
                            src={maskedImg}
                            className="abs-center size-full  masked-img object-contain"
                        />
                    </div>
                    <ul className="space-y-4 will-fade">
                        {featureLists.map((feature, i) => (
                            <li
                                key={i}
                                className="flex items-center justify-start gap-2"
                            >
                                <Image src={checkImg} alt="checkmark" />
                                <p className="md:w-full w-[60%]">{feature}</p>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="masked-container">
                    <h2 className="will-fade">Sip-Worthy Perfection</h2>

                    <div id="masked-content">
                        <h3>Made with Craft, Poured with Passion</h3>
                        <p>
                            This isn&apos;t just a drink. It&apos;s a carefully
                            crafted moment made just for you.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
