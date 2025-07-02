"use client";
import Image from "next/image";
import React from "react";
import leftLeaf from "@/public/images/cocktail-left-leaf.png";
import rightLeaf from "@/public/images/cocktail-right-leaf.png";
import { cocktailLists, mockTailLists } from "@/constants";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap";

export default function Cocktails() {
    useGSAP(() => {
        gsap.from("#c-left-leaf", {
            xPercent: 200,

            scrollTrigger: {
                trigger: "#cocktails",
                start: "top 20%",
                end: "bottom bottom",
                scrub: true,
            },
        });
        gsap.from("#c-right-leaf", {
            xPercent: -200,
            scrollTrigger: {
                trigger: "#cocktails",
                start: "top 5%",
                end: "bottom bottom",
                scrub: true,
            },
        });
    });

    return (
        <section id="cocktails" className="noisy">
            <Image src={leftLeaf} alt="left leaf" id="c-left-leaf" />
            <Image src={rightLeaf} alt="right leaf" id="c-right-leaf" />

            <div className="list xl:px-7">
                <div className="popular">
                    <h2>Most Popular Cocktails:</h2>
                    <ul>
                        {cocktailLists.map((cocktail) => {
                            return (
                                <li key={cocktail.name}>
                                    <div className="md:me-28 ">
                                        <h3>{cocktail.name}</h3>
                                        <p>
                                            {cocktail.country} |{" "}
                                            {cocktail.detail}
                                        </p>
                                    </div>
                                    <span>- {cocktail.price}</span>
                                </li>
                            );
                        })}
                    </ul>
                </div>
                <div className="loved">
                    <h2>Most Popular Mocktails:</h2>
                    <ul>
                        {mockTailLists.map((mocktail) => {
                            return (
                                <li key={mocktail.name}>
                                    <div className="me-28 ">
                                        <h3>{mocktail.name}</h3>
                                        <p>
                                            {mocktail.country} |{" "}
                                            {mocktail.detail}
                                        </p>
                                    </div>
                                    <span>- {mocktail.price}</span>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>
        </section>
    );
}
