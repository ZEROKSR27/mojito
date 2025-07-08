import dynamic from "next/dynamic";

import Hero from "@/components/Hero";
import Nav from "@/components/Nav";

// Dynamically import components
const Cocktails = dynamic(() => import("@/components/Cocktails"));
const About = dynamic(() => import("@/components/About"));
const Art = dynamic(() => import("@/components/Art"));
const Menu = dynamic(() => import("@/components/Menu"));
const Contact = dynamic(() => import("@/components/footer"));

export default function Home() {
    return (
        <main>
            <Nav />
            <Hero />
            <Cocktails />
            <About />
            <Art />
            <Menu />
            <Contact />
        </main>
    );
}
