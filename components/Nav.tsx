"use client";
import { navLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import img from "@/public/images/logo.png";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap";

export default function Nav() {
    useGSAP(() => {
        const navTween = gsap.timeline({
            scrollTrigger: {
                trigger: "nav",
                start: "bottom top",
            },
        });

        navTween.fromTo(
            "nav",
            {
                backgroundColor: "tranparent",
            },
            {
                backgroundColor: "#00000050",

                backdropFilter: "blur(5px)",

                duration: 1,
                ease: "power1.inOut",
            }
        );
    });

    return (
        <nav>
            <div>
                <a href="#home" className=" flex items-center gap-2">
                    <Image src={img} alt="logo" />
                    <p>Velvet Pour</p>
                </a>

                <ul>
                    {navLinks.map((link) => (
                        <li key={link.id}>
                            <Link href={"#" + link.id}>{link.title}</Link>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
}
