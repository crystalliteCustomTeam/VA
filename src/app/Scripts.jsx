"use client"
import Script from 'next/script';
import { useEffect } from 'react'

const Scripts = () => {
    useEffect(() => {
        //======== Live Chat ========//
        window.__lc = window.__lc || {};
        window.__lc.license = 18818250;
        window.__lc.integration_name = "manual_onboarding";
        window.__lc.product_name = "livechat";

        const livechat = document.createElement("script");
        livechat.async = true;
        livechat.src = "https://cdn.livechatinc.com/tracking.js";
        document.body.appendChild(livechat);
        //======== Google Tag Manager ========//
        const gtmConfigScript1 = document.createElement("script");
        gtmConfigScript1.id = "google-tag-manager-one";
        gtmConfigScript1.src = "https://www.googletagmanager.com/gtag/js?id=AW-10860906782";
        gtmConfigScript1.text = `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-FJ46LGNLW0');
        `;
        document.head.appendChild(gtmConfigScript1);
        //======== Google Tag Manager ========//
        const gtmConfigScript2 = document.createElement("script");
        gtmConfigScript2.id = "google-tag-manager-two";
        gtmConfigScript2.src = "https://www.googletagmanager.com/gtag/js?id=G-FJ46LGNLW0";
        gtmConfigScript2.text = `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-FJ46LGNLW0');
        `;
        document.head.appendChild(gtmConfigScript2);
    }, []);

    return (
        <>
            <Script>
                {`gtag('event', 'conversion', {'send_to': 'AW-10860906782/B05OCOOZ2aUDEJ6S8boo'});`}
            </Script>
            <Script>
                {`gtag('event', 'conversion', {'send_to': 'AW-10860906782/-cBLCMe7q54ZEJ6S8boo'});`}
            </Script>
        </>
    );
}

export default Scripts