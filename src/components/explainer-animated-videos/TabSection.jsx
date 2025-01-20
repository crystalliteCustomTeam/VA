"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import animation1 from "media/explainer-animated-videos/2D-Animation.webp";
import animation2 from "media/explainer-animated-videos/3d-animation.webp";
import animation3 from "media/explainer-animated-videos/Motion-Graphics.webp";
import animation4 from "media/explainer-animated-videos/Whiteboard.webp";
import animation5 from "media/explainer-animated-videos/Logo-Animation.webp";
import animation6 from "media/explainer-animated-videos/Video-Editing.webp";
import CTA from "./CTA";
const tabInfo = [
  { label: "2D Animations", index: 0 },
  { label: "3D Animation", index: 1 },
  { label: "Motion Graphics", index: 2 },
  { label: "Whiteboard", index: 3 },
  { label: "Logo Animation", index: 4 },
  { label: "Video Animation", index: 5 },
];
const tabContents = [
  [
    {
      img: animation1,
      text: "Easy on the eye and pocket, get the best of both world’s through top notch 2D Animations ",
    },
  ],
  [
    {
      img: animation2,
      text: "The future is now. Immerse yourself into the life-like stylings of spectacular 3D Animations",
    },
  ],
  [
    {
      img: animation3,
      text: "Why stay static, animate. Add a little life to your products and witness the magic of Motion Graphics. ",
    },
  ],
  [
    {
      img: animation4,
      text: "Cut the clutter and keep things simple. Expert Whiteboard animators are ready to help you out. ",
    },
  ],
  [
    {
      img: animation5,
      text: "Put some groove into your brand and see it stand out and garner far more recognition. ",
    },
  ],
  [
    {
      img: animation6,
      text: "This is the make or break for most digital artistic endeavors. Let experts handle it. ",
    },
  ],
];

export default function TabSection({
  subtitle = "What We Do",
  title = "OUR DIVERSE RANGE OF <br/> VIDEO ANIMATION SERVICES!",
}) {
  //Tabs
  const [activeTab, setActiveTab] = useState(0);
  const handleTabClick = (index) => {
    setActiveTab(index);
  };
  const [transformStyle, setTransformStyle] = useState({
    transform:
      "perspective(600px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)",
  });
  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const { left, top, width, height } = e.target.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;

    const deltaX = clientX - centerX;
    const deltaY = clientY - centerY;

    // Calculate rotation angles based on mouse position
    const rotateX = (deltaY / height) * 20;
    const rotateY = (deltaX / width) * -20;

    // Update the transform style
    setTransformStyle({
      transform: `perspective(600px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1, 1, 1)`,
    });
  };

  // Reset transformation on mouse leave
  const handleMouseLeave = () => {
    setTransformStyle({
      transform:
        "perspective(600px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)",
    });
  };
  return (
    <section>
      <div className="tw-pt-[80px] tw-pb-[50px]">
        <div className="tw-container tw-font-rubik">
          <div className="tw-flex tw-item-center tw-flex-col tw-justify-center tw-mx-auto xl:tw-w-[70%] md:tw-w-[90%] tw-w-full tw-text-center">
            <span
              className="relative overflow-hidden border-left-right tw-text-[17px] tw-font-light tw-leading-normal tw-px-[60px] tw-capitalize tw-relative before:tw-absolute before:tw-content-[''] before:tw-bg-gradient-to-tl before:tw-from-pink-600 before:tw-via-purple-700 before:tw-to-indigo-800 before:tw-h-[2px] before:tw-w-[42px] before:tw-left-0 before:tw-bottom-0 before:tw-top-[10px] before:tw-mx-auto tw-inline-block tw-w-max tw-mx-auto  after:tw-absolute after:tw-content-[''] after:tw-bg-gradient-to-tl after:tw-from-pink-600 after:tw-via-purple-700 after:tw-to-indigo-800 after:tw-h-[2px] after:tw-w-[42px] after:tw-right-0 after:tw-bottom-0 after:tw-top-[10px] after:tw-mx-auto"
              dangerouslySetInnerHTML={{ __html: subtitle }}
            />
            <h2
              className="tw-py-[30px] xl:tw-text-[45px] xl:tw-leading-[60px] md:tw-text-[40px] tw-text-[30px] tw-leading-[40px] tw-uppercase tw-font-semibold"
              dangerouslySetInnerHTML={{ __html: title }}
            />
          </div>

          <div>
            <ul className="tw-flex tw-flex-wrap tw-justify-center tw-text-sm tw-font-medium tw-text-center tw-gap-1 xl:tw-gap-5 md:tw-gap-1 md:tw-mx-auto">
              {tabInfo.map((tab, index) => (
                <li
                  key={index}
                  className={`tw-relative tw-overflow-hidden tw-inline-block lg:tw-w-[180px] tw-w-[150px] xl:tw-w-[180px] xl:tw-py-4 tw-py-2 xl:tw-text-[16px] lg:tw-text-[15px] tw-text-[13px] tw-font-normal tw-font-rubik tw-text-white tw-border-[2px] tw-rounded-[50px] tw-cursor-pointer before:tw-content-[''] before:tw-absolute before:tw-left-[-20px] before:tw-top-0 before:tw-w-[30px] before:tw-h-[100px] before:tw-mt-[-20px] before:tw-bg-white before:tw-opacity-60 before:tw-filter before:tw-blur-[30px] before:tw-transform before:tw-origin-top before:tw-animate-login_blur xl:tw-my-[50px] tw-my-[10px] hover:tw-shadow-[-1px_6px_9vmin_0vmin_#d605a4] ${
                    activeTab === index
                      ? "tw-border-transparent tw-bg-[linear-gradient(100deg,_rgb(236,_1,_166)_0%,_rgb(181,_13,_162)_49%,_rgb(126,_24,_158)_100%)] tw-shadow-[-1px_6px_9vmin_0vmin_#d605a4]"
                      : "tw-border-fuchsia-700"
                  }`}
                  onClick={() => handleTabClick(index)}
                >
                  {tab.label}
                </li>
              ))}
            </ul>
          </div>
          <div className="tabs-content tw-pt-7 md:tw-pt-12">
            {tabContents[activeTab] && (
              <div className="tw-text-center">
                {tabContents[activeTab].map(({ img, text }, index) => (
                  <Link
                    key={index}
                    href={``}
                    data-fancybox="gallery"
                    className={`tw-w-full tw-h-full`}
                  >
                    <Image
                      src={img} // Ensure img is a valid path or URL
                      alt="Explainer Videos LLC"
                      width={468}
                      height={263}
                      onMouseMove={handleMouseMove}
                      onMouseLeave={handleMouseLeave}
                      style={{ willChange: "tw-transform", ...transformStyle }}
                      className="tw-min-h-[300px] tw-mx-auto"
                    />

                    <h4 className="md:tw-text-[20px] tw-text-[14px] tw-leading-normal tw-font-rubik tw-font-semibold tw-my-5">
                      {text}
                    </h4>
                  </Link>
                ))}
                <div className="tw-flex md:tw-flex-row tw-flex-col tw-items-center tw-justify-center tw-gap-5 tw-mb-5 md:tw-w-max tw-mx-auto">
                  <CTA icon={true} text="Live Chat" css="tw-bg-gradient-custom" />
                  <CTA icon={true} />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
