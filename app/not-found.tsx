// app/not-found.tsx
"use client";
import Link from "next/link";

export default function NotFound() {
    return (
        <div className="fixed inset-0 bg-black text-white flex flex-col items-center justify-center z-50 px-4">
            {/* الرقم */}
            <h1 className="text-[120px] font-black tracking-wider glitch leading-none select-none">
                404
            </h1>

            {/* النص */}
            <p className="text-xl text-gray-400 mt-4">Page deos not exist</p>

            {/* زر العودة */}
            <Link
                href={"/"}
                className="mt-8 px-6 py-3 bg-white text-black font-semibold rounded-sm hover:bg-red-400 transition"
            >
                Go Back
            </Link>

            <style jsx>{`
                .glitch {
                    position: relative;
                    animation: glitch 1.2s infinite;
                }

                .glitch::before,
                .glitch::after {
                    content: "404";
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    color: white;
                    overflow: hidden;
                }

                .glitch::before {
                    left: 2px;
                    text-shadow: -2px 0 red;
                    animation: glitchTop 1.2s infinite;
                }

                .glitch::after {
                    left: -2px;
                    text-shadow: -2px 0 blue;
                    animation: glitchBottom 1.2s infinite;
                }

                @keyframes glitch {
                    0% {
                        transform: none;
                    }
                    20% {
                        transform: translate(1px, -1px);
                        scale: 1.2;
                        color: #f6339a;
                    }
                    40% {
                        transform: translate(-2px, 2px);
                    }
                    60% {
                        transform: translate(1px, 1px);
                    }
                    80% {
                        transform: translate(-1px, -2px);
                    }
                    100% {
                        transform: none;
                    }
                }

                @keyframes glitchTop {
                    0% {
                        clip: rect(0, 9999px, 0, 0);
                    }
                    10% {
                        clip: rect(0, 9999px, 20px, 0);
                    }
                    20% {
                        clip: rect(0, 9999px, 0, 0);
                    }
                    30% {
                        clip: rect(5px, 9999px, 25px, 0);
                    }
                    40% {
                        clip: rect(0, 9999px, 0, 0);
                    }
                    50% {
                        clip: rect(10px, 9999px, 30px, 0);
                    }
                    100% {
                        clip: rect(0, 9999px, 0, 0);
                    }
                }

                @keyframes glitchBottom {
                    0% {
                        clip: rect(0, 9999px, 0, 0);
                    }
                    10% {
                        clip: rect(10px, 9999px, 30px, 0);
                    }
                    20% {
                        clip: rect(0, 9999px, 0, 0);
                    }
                    30% {
                        clip: rect(15px, 9999px, 40px, 0);
                    }
                    40% {
                        clip: rect(0, 9999px, 0, 0);
                    }
                    50% {
                        clip: rect(20px, 9999px, 50px, 0);
                    }
                    100% {
                        clip: rect(0, 9999px, 0, 0);
                    }
                }
            `}</style>
        </div>
    );
}
