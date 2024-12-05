"use client"
import Script from "next/script"
import { useEffect } from "react"

const Scripts = () => {
  useEffect(() => {
    // Load Tawk.to chat script
    const timer = setTimeout(() => {
      const tawkScript = document.createElement("script")
      tawkScript.async = true
      tawkScript.src =
        "https://embed.tawk.to/66d1ff6150c10f7a00a22440/1i6i4r5nd"
      tawkScript.charset = "UTF-8"
      tawkScript.setAttribute("crossorigin", "*")
      document.body.appendChild(tawkScript)
    }, 5000)
    //======== Google Tag Manager ========//
    const gtmConfigScript1 = document.createElement("script")
    gtmConfigScript1.id = "google-tag-manager-one"
    gtmConfigScript1.src =
      "https://www.googletagmanager.com/gtag/js?id=AW-10860906782"
    gtmConfigScript1.text = `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-FJ46LGNLW0');
        `
    document.head.appendChild(gtmConfigScript1)
    //======== Google Tag Manager ========//
    const gtmConfigScript2 = document.createElement("script")
    gtmConfigScript2.id = "google-tag-manager-two"
    gtmConfigScript2.src =
      "https://www.googletagmanager.com/gtag/js?id=G-FJ46LGNLW0"
    gtmConfigScript2.text = `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-FJ46LGNLW0');
        `
    document.head.appendChild(gtmConfigScript2)
  }, [])

  return (
    <>
      <Script id="one">
        {`gtag('event', 'conversion', {'send_to': 'AW-10860906782/B05OCOOZ2aUDEJ6S8boo'});`}
      </Script>
      <Script id="two">
        {`gtag('event', 'conversion', {'send_to': 'AW-10860906782/-cBLCMe7q54ZEJ6S8boo'});`}
      </Script>
    </>
  )
}

export default Scripts
