import Link from "next/link";
import React from "react";
import Image from "next/image";

import facebook from "media/explainer-animated-videos/fb.webp";
import Linkedin from "media/explainer-animated-videos/link.webp";
import Insta from "media/explainer-animated-videos/insta.webp";
import Youtube from "media/explainer-animated-videos/youtube.webp";

const socialLinks = [
  { src: facebook, alt: "Facebook", href: "/" },
  { src: Linkedin, alt: "LinkedIn", href: "/" },
  { src: Insta, alt: "Instagram", href: "/" },
  { src: Youtube, alt: "YouTube", href: "/" },
];

export const Footer = () => {
  return (
    <footer>
      <div className="tw-pt-16 tw-pb-4">
        <div className="tw-container tw-font-rubik">
          <div className="tw-flex tw-flex-col tw-gap-5 tw-items-center tw-justify-center">
            <h1 className="lg:tw-text-[70px] tw-text-[40px] tw-leading-normal tw-uppercase tw-border-b-solid tw-border-b-[1px] tw-pb-0">
              <Link href="/" className="blink">
                Lets Connect
              </Link>
            </h1>

            <ul className="tw-flex tw-items-center tw-justify-center">
              {socialLinks.map((link, index) => (
                <li key={index}>
                  <Link href={link.href}>
                    <Image
                      src={link.src}
                      alt={link.alt}
                      className="beat tw-w-full"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="tw-flex lg:tw-flex-row tw-flex-col tw-items-center tw-justify-between tw-gap-5 tw-border-t-[1px] tw-border-t-[#291a37] tw-pt-[30px] tw-uppercase tw-font-rubik md:tw-text-[16px] tw-text-[12px] tw-leading-tight">
            <div>
              <p>
                All Rights Reserved <span id="copyright-year">2025</span> -
                Video Animation.
              </p>
            </div>
            <ul class="footer-menu tw-flex tw-justify-content-end tw-align-items-center">
              <li>
                <Link href="/">Privacy Policy</Link>
              </li>
              <li>&nbsp;|&nbsp;</li>
              <li>
                <Link href="/">Terms &amp; Conditions</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};
