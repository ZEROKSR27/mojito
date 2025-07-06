// app/components/Loading.tsx
"use client";

export default function Loading() {
    return (
        <div className="fixed inset-0 bg-black flex items-center justify-center z-50">
            <div className="flex gap-6">
                <div className="w-12 h-12 bg-lime-300 animate-bounce-1 rounded-[4px]" />
                <div className="w-12 h-12 bg-lime-300 animate-bounce-2 rounded-[4px]" />
                <div className="w-12 h-12 bg-lime-300 animate-bounce-3 rounded-[4px]" />
            </div>

            <style jsx>{`
                @keyframes bounce {
                    0%,
                    100% {
                        transform: translateY(0);
                    }
                    50% {
                        transform: translateY(-50%);
                    }
                }

                .animate-bounce-1 {
                    animation: bounce 0.8s ease-in-out infinite;
                }

                .animate-bounce-2 {
                    animation: bounce 0.8s ease-in-out 0.15s infinite;
                }

                .animate-bounce-3 {
                    animation: bounce 0.8s ease-in-out 0.3s infinite;
                }
            `}</style>
        </div>
    );
}
