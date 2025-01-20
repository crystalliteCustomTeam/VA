"use client"
import { useEffect, useState } from "react"
import Image from "next/image"
import phone from "media/explainer-animated-videos/phone-calling.svg"
import Link from "next/link"
import CTA from "./CTA"
import { DefaultLogo } from "@/src/app/app-constants"

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10
      setScrolled(isScrolled)
    }
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])
  return (
    <header>
      <div
        className={`tw-py-[15px] tw-fixed tw-z-50 tw-w-full ${
          scrolled
            ? "tw-bg-[#1a0830f7] tw-shadow-[0_4px_24px_0_rgba(103,_151,_255,_.1),_0_12px_64px_0_rgba(103,_151,_255,_.1)] "
            : ""
        }`}
      >
        <div className="tw-container">
          <div className="tw-flex md:tw-flex-row tw-flex-col tw-justify-between tw-items-center">
            <DefaultLogo />
            <div className="tw-flex md:tw-flex-row tw-flex-col tw-items-center tw-justify-center tw-gap-5">
              <Link
                href="javascript:;"
                className="tw-flex tw-gap-2 tw-items-center hover:tw-text-[#d605a4] tw-w-full"
              >
                <span>
                  <Image
                    src={phone}
                    alt="phone"
                    width={25}
                    height={25}
                    className="tw-rotate-12 tw-fill-red-600"
                  />
                </span>

                <span className="tw-font-rubik xl:tw-text-[20px] lg:tw-text-[16px] tw-text-[14px] tw-leading-tight ">
                  1-833-666-6684
                </span>
              </Link>
              <CTA
                icon={true}
                css="tw-text-[12px] tw-xl:text-[15px] md:tw-text-[12px]"
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
