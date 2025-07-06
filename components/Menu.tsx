/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { useState, useMemo } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";

import { allCocktails } from "@/constants";
import leafLeft from "@/public/images/slider-left-leaf.png";
import leafRight from "@/public/images/slider-right-leaf.png";
import arrow from "@/public/images/right-arrow.png";

const Menu = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const total = allCocktails.length;

    const getIndex = (offset: number) =>
        (currentIndex + offset + total) % total;

    const { currentCocktail, prevCocktail, nextCocktail } = useMemo(() => {
        return {
            currentCocktail: allCocktails[getIndex(0)],
            prevCocktail: allCocktails[getIndex(-1)],
            nextCocktail: allCocktails[getIndex(1)],
        };
    }, [currentIndex]);

    useGSAP(() => {
        const tl = gsap.timeline({
            defaults: { ease: "power1.out", duration: 1 },
        });

        tl.fromTo("#title", { opacity: 0 }, { opacity: 1 })
            .fromTo(
                ".cocktail img",
                { xPercent: -100, opacity: 0 },
                { xPercent: 0, opacity: 1 },
                "<"
            )
            .fromTo(
                ".details h2",
                { yPercent: 100, opacity: 0 },
                { yPercent: 0, opacity: 1 },
                "<"
            )
            .fromTo(
                ".details p",
                { yPercent: 100, opacity: 0 },
                { yPercent: 0, opacity: 1 },
                "<"
            );
    }, [currentIndex]);

    return (
        <section id="menu" aria-labelledby="menu-heading">
            <Image
                src={leafLeft}
                alt="left-leaf"
                id="m-left-leaf"
                className="pointer-events-none select-none"
                priority
            />
            <Image
                src={leafRight}
                alt="right-leaf"
                id="m-right-leaf"
                className="pointer-events-none select-none"
                priority
            />

            <h2 id="menu-heading" className="sr-only">
                Cocktail Menu
            </h2>

            <nav className="cocktail-tabs" aria-label="Cocktail Navigation">
                {allCocktails.map((cocktail, index) => {
                    const isActive = index === currentIndex;

                    return (
                        <button
                            key={cocktail.id}
                            className={`${
                                isActive
                                    ? "text-white border-white"
                                    : "text-white/50 border-white/50"
                            }`}
                            onClick={() => setCurrentIndex(index)}
                            aria-current={isActive ? "true" : undefined}
                        >
                            {cocktail.name}
                        </button>
                    );
                })}
            </nav>

            <div className="content">
                <div className="arrows">
                    <button
                        className="text-left"
                        onClick={() => setCurrentIndex(getIndex(-1))}
                        aria-label={`السابق: ${prevCocktail.name}`}
                    >
                        <span>{prevCocktail.name}</span>
                        <Image
                            src={arrow}
                            alt="left-arrow"
                            aria-hidden="true"
                        />
                    </button>

                    <button
                        className="text-left"
                        onClick={() => setCurrentIndex(getIndex(1))}
                        aria-label={`التالي: ${nextCocktail.name}`}
                    >
                        <span>{nextCocktail.name}</span>
                        <Image
                            src={arrow}
                            alt="right-arrow"
                            aria-hidden="true"
                            className="rotate-180"
                        />
                    </button>
                </div>

                <div className="cocktail relative w-[500px] h-[500px] mx-auto">
                    <Image
                        src={currentCocktail.image}
                        alt={currentCocktail.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 500px"
                        className="object-contain"
                        priority
                    />
                </div>

                <div className="recipe">
                    <div className="info">
                        <p>Recipe for:</p>
                        <p id="title">{currentCocktail.name}</p>
                    </div>

                    <div className="details">
                        <h2>{currentCocktail.title}</h2>
                        <p>{currentCocktail.description}</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Menu;
