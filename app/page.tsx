import Hero from "@/components/Hero";
import Nav from "@/components/Nav";

export default function Home() {
    return (
        <main>
            <Nav />
            <Hero />
            <div className="w-full h-screen"></div>
        </main>
    );
}
