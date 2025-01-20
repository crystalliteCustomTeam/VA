"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

// Media
import Workshops from "media/explainer-animated-videos/process-icon-1.webp";
import Planning from "media/explainer-animated-videos/process-icon-2.webp";
import testing from "media/explainer-animated-videos/process-icon-3.webp";
import execution from "media/explainer-animated-videos/process-icon-4.webp";
import implementation from "media/explainer-animated-videos/process-icon-5.webp";

// Card Data
const data = [
  {
    cardImg: Workshops,
    title: "Workshops",
    desc: "To understand the unique demands of your business, we run multiple workshops for running an extensive business analysis, comprehending campaign objectives, preparing proposals, and deciding deliverables.",
    icon: true,
  },
  {
    cardImg: Planning,
    title: "Planning",
    desc: "A lot goes into the planning stage, such as industry research, competitor research, selecting marketing channels, and strategy development. We recommend the best course of action for digitalization. ",
    icon: true,
  },
  {
    cardImg: testing,
    title: "A/B Testing",
    desc: "From experimenting with content to testing advertisements and marketing techniques, we do all it takes to analyze the audience’s behavior and make alterations accordingly for maximum outreach. ",
    icon: true,
  },
  {
    cardImg: execution,
    title: "Execution",
    desc: "Moving forth with execution, we analyze processes, create campaigns, optimize strategies, and produce content to secure a better ranking. We aim for quality, results, and business growth. ",
    icon: true,
  },
  {
    cardImg: implementation,
    title: "Implementation",
    desc: "Now, for the exciting part, we get our hands dirty with launching your project and incorporating changes as your business changes. Are you ready to get started?",
    icon: false,
  },
];

export const Process = ({
  subtitle = "Process",
  title = "Matching Your Business <br class='xl:tw-block tw-hidden'/> Needs Effectively ",
  desc = "We’re determined to explore more than what may be just a quick fix for your business. Together, we can tailor our <strong class='font-bold'>animated corporate video production</strong> for continual growth.",
  cardData = data,
}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  useEffect(() => {
    if (!cardData.length) return;
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % cardData.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [cardData.length]);
  return (
    <section>
      <div className="tw-pt-[80px] tw-pb-[50px]">
        <div className="tw-container tw-font-rubik">
          <div className="tw-flex tw-item-center tw-flex-col tw-justify-center tw-mx-auto xl:tw-w-[70%] md:tw-w-[90%] tw-w-full tw-text-center">
            <span
              className="tw-text-[17px] tw-font-light tw-leading-normal tw-px-[60px] tw-capitalize tw-relative before:tw-absolute before:tw-content-[''] before:tw-bg-gradient-to-tl before:tw-from-pink-600 before:tw-via-purple-700 before:tw-to-indigo-800 before:tw-h-[2px] before:tw-w-[42px] before:tw-left-0 before:tw-bottom-0 before:tw-top-[10px] before:tw-mx-auto before:animate-border_draw_right tw-inline-block tw-w-max tw-mx-auto after:tw-animate-run after:tw-absolute after:tw-content-[''] after:tw-bg-gradient-to-tl after:tw-from-pink-600 after:tw-via-purple-700 after:tw-to-indigo-800 after:tw-h-[2px] after:tw-w-[42px] after:tw-right-0 after:tw-bottom-0 after:tw-top-[10px] after:tw-mx-auto"
              dangerouslySetInnerHTML={{ __html: subtitle }}
            />
            <h2
              className="tw-pt-[30px] xl:tw-text-[60px] xl:tw-leading-[85px] md:tw-text-[45px] tw-text-[30px] md:tw-leading-[60px] tw-leading-tight tw-uppercase tw-font-semibold"
              dangerouslySetInnerHTML={{ __html: title }}
            />
            <p
              className="tw-text-[16px] tw-font-light tw-w-[80%] tw-mx-auto"
              dangerouslySetInnerHTML={{ __html: desc }}
            />
          </div>

          <div className="tw-py-10">
            <ul className="tw-grid lg:tw-grid-cols-5 md:tw-grid-cols-3 tw-grid-cols-1 tw-justify-center  tw-gap-5 xl:tw-w-[90%] tw-w-full tw-mx-auto">
              {cardData.map((e, i) => (
                <li
                  key={i}
                  className={`tw-flex tw-flex-col tw-gap-3 tw-items-center tw-justify-center tw-text-center tw-h-full tw-transition-opacity tw-duration-500 ${
                    i === activeIndex ? "tw-opacity-100" : "tw-opacity-60"
                  }`}
                >
                  <div className="tw-bg-[linear-gradient(100deg,rgb(236,1,166)_0%,rgb(181,13,162)_49%,rgb(126,24,158)_100%)] tw-rounded-full tw-w-[140px] tw-h-[140px] tw-flex tw-justify-center tw-items-center">
                    <Image
                      src={e.cardImg}
                      alt="process"
                      className="tw-w-[80px] tw-h-[80px] tw-invert tw-brightness-0 tw-p-4"
                    />
                  </div>
                  <h4 className="tw-flex tw-justify-center tw-items-center tw-gap-5 tw-mt-[20px] tw-mb-[20px] xl:tw-text-[24px] tw-text-[22px] tw-leading-[35px] tw-font-light">
                    {e.title}

                    {e.icon && (
                      <span
                        className={`${
                          i === activeIndex ? "tw-animate-run" : "tw-animate-none"
                        }`}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          class="size-6"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5"
                          />
                        </svg>
                      </span>
                    )}
                  </h4>
                  <p className="tw-text-[14px] tw-w-[90%] tw-mx-auto lg:tw-min-h-[210px] tw-min-h-fit">
                    {e.desc}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
