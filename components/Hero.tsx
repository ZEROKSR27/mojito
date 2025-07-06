"use client";
import { useGSAP } from "@gsap/react";
import { gsap, SplitText } from "@/lib/gsap";
import { useRef } from "react";
import { useMediaQuery } from "react-responsive";
import Image from "next/image";
import leftLeaf from "@/public/images/hero-left-leaf.png";
import rightLeaf from "@/public/images/hero-right-leaf.png";

const Hero = () => {
    const videoRef: React.RefObject<HTMLVideoElement | null> = useRef(null);

    const isMobile = useMediaQuery({ maxWidth: 767 });

    useGSAP(() => {
        const heroSplit = new SplitText(".title", {
            type: "chars, words",
        });

        const paragraphSplit = new SplitText(".subtitle", {
            type: "lines",
        });

        // heroAnimation
        // Apply text-gradient class once before animating
        heroSplit.chars.forEach((char) => char.classList.add("text-gradient"));
        gsap.from(heroSplit.chars, {
            yPercent: 100,
            duration: 1.8,
            ease: "expo.out",
            stagger: 0.07,
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
        // leafAnimation
        gsap.timeline({
            scrollTrigger: {
                trigger: "#hero",
                start: "top top",
                end: "bottom top",
                scrub: true,
            },
        })
            .to(".right-leaf", { y: 700 }, 0)
            .to(".left-leaf", { y: -200 }, 0);
        // videoAnimation
        const startValue = isMobile ? "top 50%" : "center 60%";
        const endValue = isMobile ? "120% top" : "bottom top";

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: "video",
                start: startValue,
                end: endValue,
                scrub: true,
                pin: true,
            },
        });

        if (!videoRef.current) {
            console.log("video is not there", videoRef.current);
            return;
        } else {
            videoRef.current.onloadedmetadata = () => {
                tl.to(videoRef.current, {
                    currentTime: videoRef.current!.duration,
                });
            };
        }
    }, []);

    return (
        <>
            <section id="hero" className="noisy">
                <h1 className="title tracking-tighter">MOJITO</h1>

                <Image src={leftLeaf} alt="left-leaf" className="left-leaf" />
                <Image
                    src={rightLeaf}
                    alt="right-leaf"
                    className="right-leaf"
                />

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

            <div className="video absolute inset-0">
                <video
                    autoPlay
                    ref={videoRef}
                    muted
                    playsInline
                    preload="auto"
                    src="/videos/output.mp4"
                />
            </div>
        </>
    );
};

export default Hero;
