import Image from "next/image";
import React from "react";
import Cart1 from "media/explainer-animated-videos/cart1.png";
import Cart2 from "media/explainer-animated-videos/cart2.png";
import Cart3 from "media/explainer-animated-videos/cart3.png";
import Cart4 from "media/explainer-animated-videos/cart4.webp";
import Cart5 from "media/explainer-animated-videos/cart5.webp";
import Cart6 from "media/explainer-animated-videos/cart6.webp";
import Link from "next/link";

const packageData = [
  {
    title: "Startup Package",
    amount: "$179",
    desc: "Text & Image Compilation",
    packageImg: Cart1,
    list: [
      "60 Seconds Duration",
      "Script Writing",
      "Custom Artwork",
      "Background Music",
      "HD Format Video",
      "Dedicated Support",
    ],
  },
  {
    title: "Classic Package",
    amount: "$499",
    desc: "Whiteboard or Motion Graphic Animation",
    packageImg: Cart2,
    list: [
      "60 Seconds Duration",
      "Script Writing",
      "Professional Voice-over & SFX",
      "Hand-drawn Illustrations",
      "Unlimited Revisions",
      "HD Format Video",
      "Dedicated Support",
    ],
  },
  {
    title: "Premium Package",
    amount: "$799",
    desc: "Ultimate 2D Character Animation",
    packageImg: Cart3,
    list: [
      "60 Seconds Duration",
      "Script Writing",
      "Professional Voice-over & SFX",
      "Custom 2D Character Illustration",
      "Unlimited Revisions",
      "HD Format Video",
      "Dedicated Support",
    ],
  },
  {
    title: "Premium Package",
    amount: "$799",
    desc: "Ultimate 2D Character Animation",
    packageImg: Cart4,
    list: [
      "60 Seconds Duration",
      "Script Writing",
      "Professional Voice-over & SFX",
      "Custom 2D Character Illustration",
      "Unlimited Revisions",
      "HD Format Video",
      "Dedicated Support",
    ],
  },
  {
    title: "Premium Package",
    amount: "$799",
    desc: "Ultimate 2D Character Animation",
    packageImg: Cart5,
    list: [
      "60 Seconds Duration",
      "Script Writing",
      "Professional Voice-over & SFX",
      "Custom 2D Character Illustration",
      "Unlimited Revisions",
      "HD Format Video",
      "Dedicated Support",
    ],
  },
  {
    title: "Premium Package",
    amount: "$799",
    desc: "Ultimate 2D Character Animation",
    packageImg: Cart6,
    list: [
      "60 Seconds Duration",
      "Script Writing",
      "Professional Voice-over & SFX",
      "Custom 2D Character Illustration",
      "Unlimited Revisions",
      "HD Format Video",
      "Dedicated Support",
    ],
  },
];

export const Pricing = ({}) => {
  return (
    <section>
      <div className="lg:tw-py-[70px] tw-py-[50px]">
        <div className="tw-container">
          <div className="tw-flex tw-items-start tw-justify-start tw-border-b-[1px] tw-border-b-[#3d354b]">
            <h2 className="xl:tw-text-[90px] tw-text-[60px] tw-uppercase tw-mb-0 tw-font-rubik tw-font-semibold">
              Pricing
            </h2>
          </div>

          <div className="lg:tw-py-[30px] tw-py-[10px] lg:tw-px-[25px] tw-px-[10px] tw-my-[45px] tw-mx-[20px] tw-grid lg:tw-grid-cols-3 md:tw-grid-cols-2 tw-grid-cols-1 tw-items-center xl:tw-gap-10 tw-gap-5">
            {packageData.map((e, i) => (
              <div
                key={i}
                className=" tw-bg-white tw-text-black tw-rounded-[30px] tw-font-rubik tw-group"
              >
                <div className="group-hover:tw-bg-[linear-gradient(100deg,rgb(236,1,166)_0%,rgb(181,13,162)_49%,rgb(126,24,158)_100%)] xl:tw-p-8 md:tw-p-4 tw-p-6 tw-rounded-[30px] tw-min-h-[540px] tw-transition-all tw-delay-300 tw-ease-in">
                  <div className="tw-flex tw-flex-col tw-gap-3 tw-items-start tw-justify-start tw-relative">
                    <div className="tw-text-left">
                      <h2
                        className="xl:tw-text-[20px] tw-text-[16px] tw-font-semibold tw-uppercase group-hover:tw-text-white"
                        dangerouslySetInnerHTML={{ __html: e.title }}
                      />
                      <h3
                        className="xl:tw-text-[60px] lg:tw-text-[50px] tw-text-[60px] tw-my-1 tw-font-semibold tw-uppercase tw-bg-gradient-to-r tw-from-pink-600 tw-to-fuchsia-700 tw-bg-clip-text tw-text-transparent group-hover:tw-text-white"
                        dangerouslySetInnerHTML={{ __html: e.amount }}
                      />
                      <p
                        className="xl:tw-text-[14px] tw-text-[12px] tw-font-semibold group-hover:tw-text-white xl:tw-mt-6 tw-mt-10"
                        dangerouslySetInnerHTML={{ __html: e.desc }}
                      />
                      <div className="tw-absolute xl:-tw-right-[0%] -tw-right-[5%] tw-top-0">
                        <Image
                          src={e.packageImg}
                          alt="Packages"
                          className=""
                          width={120}
                          height={140}
                        />
                      </div>
                    </div>
                    {/* Listing */}
                    <ul class="tw-bg-[#00000012] tw-w-full tw-p-[16px] tw-rounded-[10px] tw-h-[215px] tw-transition-all ticklist2 tw-list-scroll tw-overflow-auto tw-list-disc group-hover:tw-text-white">
                      {e.list &&
                        e.list.map((e, i) => (
                          <li
                            key={i}
                            className="lg:tw-text-[16px] tw-leading-[2rem] xl:tw-ml-[30px] tw-ml-[20px]"
                          >
                            {e}
                          </li>
                        ))}
                    </ul>
                    <div className="tw-block tw-justify-center tw-w-full tw-bg-[linear-gradient(100deg,rgb(236,1,166)_0%,rgb(181,13,162)_49%,rgb(126,24,158)_100%)] tw-text-center tw-rounded-full tw-p-[10px] tw-text-white tw-font-rubik tw-font-semibold group-hover:tw-bg-[linear-gradient(100deg,rgb(236,1,166,0)_0%,rgb(181,13,162,0)_49%,rgb(126,24,158,0)_100%)] group-hover:tw-bg-white group-hover:tw-text-[#e502a5] tw-mt-5">
                      <Link href="/" className=" tw-text-[19px] tw-uppercase">
                        Order Now
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
