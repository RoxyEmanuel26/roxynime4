"use client";

import { useEffect, useRef } from "react";

interface NativeAdProps {
    /** "A" untuk Set A, "B" untuk Set B */
    set?: "A" | "B";
    className?: string;
}

/**
 * NativeAd (Adsterra Native Banner)
 */
export function NativeAd({ set = "A", className = "" }: NativeAdProps) {
    const isLoaded = useRef(false);

    useEffect(() => {
        if (!isLoaded.current) {
            const script = document.createElement("script");
            script.async = true;
            script.setAttribute("data-cfasync", "false");
            script.src = "//latherachelesscatastrophe.com/95f362271c609b484476a2dec1bef63a/invoke.js";
            
            // To ensure the script executes in the context where the div exists, we can append it directly into the container or head
            const container = document.getElementById("container-95f362271c609b484476a2dec1bef63a");
            if (container) {
                container.appendChild(script);
            } else {
                document.head.appendChild(script);
            }

            isLoaded.current = true;
        }
    }, []);

    return (
        <div className={`native-ad-wrapper my-4 flex justify-center ${className}`}>
            <div id="container-95f362271c609b484476a2dec1bef63a"></div>
        </div>
    );
}
