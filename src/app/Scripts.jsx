"use client"
import Script from "next/script"
import { useEffect } from "react"

const Scripts = () => {
  useEffect(() => {
    // Load Tawk.to chat script
    
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
        {`gtag("event", "conversion", {
          send_to: "AW-10860906782/B05OCOOZ2aUDEJ6S8boo",
        })`}
      </Script>
      <Script id="two">
        {`gtag("event", "conversion", {
          send_to: "AW-10860906782/-cBLCMe7q54ZEJ6S8boo",
        })`}
      </Script>
      <Script id="livechat-init" strategy="afterInteractive">
            {`
            window.__lc = window.__lc || {};
            window.__lc.license = 19220066;
            window.__lc.integration_name = "manual_onboarding";
            window.__lc.product_name = "livechat";
            (function(n,t,c){
              function i(n){return e._h ? e._h.apply(null,n) : e._q.push(n)}
              var e = {
                _q: [], _h: null, _v: "2.0",
                on: function(){i(["on", c.call(arguments)])},
                once: function(){i(["once", c.call(arguments)])},
                off: function(){i(["off", c.call(arguments)])},
                get: function(){
                  if (!e._h) throw new Error("[LiveChatWidget] You can't use getters before load.");
                  return i(["get", c.call(arguments)])
                },
                call: function(){i(["call", c.call(arguments)])},
                init: function(){
                  var n = t.createElement("script");
                  n.async = true;
                  n.type = "text/javascript";
                  n.src = "https://cdn.livechatinc.com/tracking.js";
                  t.head.appendChild(n);
                }
              };
              !n.__lc.asyncInit && e.init();
              n.LiveChatWidget = n.LiveChatWidget || e;
            })(window, document, [].slice);
          `}
          </Script>
    </>
  )
}

export default Scripts
