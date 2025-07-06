import About from "@/components/About";
import Art from "@/components/Art";
import Cocktails from "@/components/Cocktails";
import Hero from "@/components/Hero";
import Nav from "@/components/Nav";

export default function Home() {
    return (
        <main>
            <Nav />
            <Hero />
            <Cocktails />
            <About />
            <Art />
        </main>
    );
}
