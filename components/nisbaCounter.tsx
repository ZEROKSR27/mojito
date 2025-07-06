"use client";
import { useRef, useState } from "react";
import { gsap } from "@/lib/gsap";
import { useGSAP } from "@gsap/react";

type Props = {
    target: number;
    duration?: number;
    triggerId: string; // <-- يمكنك تمرير ID اختياري لتحديد العنصر الذي يبدأ عنده العد
    start: boolean;
};

export default function NisbaCounter({
    target,
    duration = 2,
    start,
    triggerId,
}: Props) {
    const [value, setValue] = useState(0);
    const obj = useRef({ value: 0 });
    const lastValue = useRef(0);

    useGSAP(() => {
        if (!start) return;
        gsap.to(obj.current, {
            value: target,
            duration: 1.5,
            ease: "power1.out",

            onUpdate: () => {
                const current = Number(obj.current.value.toFixed(1));
                if (current !== lastValue.current) {
                    lastValue.current = current;
                    setValue(current);
                }
            },
        });
    }, [target, duration, triggerId, start]);

    return <span>{value}</span>;
}
