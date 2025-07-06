import React from "react";

export default function Not_found() {
    return (
        <section id="hero">
            <h1 className="title tracking-tighter">MOJITO</h1>

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
                            ingredients, creative flair, and timeless recipes —
                            designed to delight your senses.
                        </p>
                        <a href="#cocktails">View cocktails</a>
                    </div>
                </div>
            </div>
        </section>
    );
}
