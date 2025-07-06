"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function LoadingOverlay() {
    const [loading, setLoading] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        setLoading(true);

        const timeout = setTimeout(() => {
            setLoading(false);
        }, 400); // يمكنك تقليل/زيادة المدة حسب وقت تحميل الصفحات لديك

        return () => clearTimeout(timeout);
    }, [pathname]);

    return loading ? (
        <div className="fixed inset-0 z-50 bg-black/80 text-white flex items-center justify-center transition-opacity duration-300">
            <div className="text-xl animate-pulse">جاري التحميل...</div>
        </div>
    ) : null;
}
