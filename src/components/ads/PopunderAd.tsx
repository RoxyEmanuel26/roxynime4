"use client";

import Script from "next/script";

/**
 * PopunderAd (Adsterra & Monetag)
 */
export function PopunderAd() {
    return (
        <>
            {/* Adsterra Popunder */}
            <Script 
                src="https://latherachelesscatastrophe.com/6d/1d/0b/6d1d0bbadbc34a4765692a5c1166aa20.js"
                strategy="afterInteractive"
            />
            {/* Monetag Popunder */}
            <Script 
                src="https://5gvci.com/act/files/tag.min.js?z=10749090"
                strategy="afterInteractive"
                data-cfasync="false"
            />
        </>
    );
}
