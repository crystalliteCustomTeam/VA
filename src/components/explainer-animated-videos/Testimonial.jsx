import React from "react";
import CTA from "./CTA";
import Image from "next/image";

// Media
import img1 from "media/explainer-animated-videos/testimonial/david.jpg";
import img2 from "media/explainer-animated-videos/testimonial/emma.jpg";
import img3 from "media/explainer-animated-videos/testimonial/grace.png";
import img4 from "media/explainer-animated-videos/testimonial/michael.jpg";
import img5 from "media/explainer-animated-videos/testimonial/olivia.png";
import img6 from "media/explainer-animated-videos/testimonial/sarah.png";
import img7 from "media/explainer-animated-videos/testimonial/alex.png";
import img8 from "media/explainer-animated-videos/testimonial/02.webp";
import img9 from "media/explainer-animated-videos/testimonial/03.webp";


const testimonials = [
  {
    id: 1,
    imgSrc: img1,
    name: "David",
    role: "President & Founder",
    testimonial:
      "Explainer Videos LLC never disappoints. Whether it's a simple video or complex character animation, they always hit the deadline and make sure everything is on point.",
  },
  {
    id: 2,
    imgSrc: img2,
    name: "Emma ",
    role: "Co-Founder",
    testimonial:
      "Explainer Videos LLC worked with us and helped us create a great video. It portrayed our product in an easily understandable and visually attractive way.",
  },
  {
    id: 3,
    imgSrc: img3,
    name: "Grace Leonard ",
    role: "Chief Marketing Officer",
    testimonial:
      "They are a team of highly skilled and professional app developers. I hired them for my latest project, and they did it perfectly! We plan to have them develop more apps for us in the future.",
  },
  {
    id: 4,
    imgSrc: img4,
    name: "Michael Nelson ",
    role: "Project Manager",
    testimonial:
      "They helped us develop a useful and great-looking application in a short period of time and on budget. In addition, the team is talented, efficient, and easy to work with.",
  },
];
const testimonials2 = [
  {
    id: 1,
    imgSrc: img7,
    name: "Alex Smith",
    role: "President & Founder",
    testimonial:
      "Explainer Videos LLC never disappoints. Whether it's a simple video or complex character animation, they always hit the deadline and make sure everything is on point.",
  },
  {
    id: 2,
    imgSrc: img8,
    name: "Ronald Taylor",
    role: "President & Founder",
    testimonial:
      "Explainer Videos LLC never disappoints. Whether it's a simple video or complex character animation, they always hit the deadline and make sure everything is on point.",
  },
  {
    id: 3,
    imgSrc: img9,
    name: "Sarah Ethan",
    role: "President & Founder",
    testimonial:
      "Explainer Videos LLC never disappoints. Whether it's a simple video or complex character animation, they always hit the deadline and make sure everything is on point.",
  },
  {
    id: 4,
    imgSrc: img5,
    name: "Olivia Smith",
    role: "President & Founder",
    testimonial:
      "Explainer Videos LLC never disappoints. Whether it's a simple video or complex character animation, they always hit the deadline and make sure everything is on point.",
  },
  {
    id: 5,
    imgSrc: img6,
    name: "Sarah Johnson",
    role: "President & Founder",
    testimonial:
      "Explainer Videos LLC never disappoints. Whether it's a simple video or complex character animation, they always hit the deadline and make sure everything is on point.",
  },
];

export const Testimonial = ({
  subtitle = "Testimonials",
  title = "Sharing Our <br class='lg:tw-block tw-hidden'/> Client’s Success <br class='lg:block hidden'/> Stories",
  desc = "We revolutionize the way your audience perceives your brand’s online presence. These are stories of <br class='lg:block hidden'/> people whose lives have been inspired by Explainer Videos LLC Inc and its diverse range of services.",
}) => {
  return (
    <section className="tw-relative tw-overflow-hidden">
      <div className="tw-relative 2xl:tw-pt-[110px] 2xl:tw-pb-[50px] tw-pt-[100px] tw-pb-[50px] tw-font-rubik">
        <div className="tw-container">
          <div className="tw-grid md:tw-grid-cols-12 tw-grid-cols-1 tw-font-rubik tw-items-center">
            <div className="lg:tw-col-span-7 md:tw-col-span-6">
              <span
                className="tw-text-[17px] tw-font-light tw-leading-normal tw-px-[60px] tw-capitalize tw-relative before:tw-absolute before:tw-content-[''] before:tw-bg-gradient-to-tl before:tw-from-pink-600 before:tw-via-purple-700 before:tw-to-indigo-800 before:tw-h-[2px] before:tw-w-[42px] before:tw-left-0 before:tw-bottom-0 before:tw-top-[10px] before:tw-mx-auto tw-inline-block tw-w-max tw-mx-auto  after:tw-absolute after:tw-content-[''] after:tw-bg-gradient-to-tl after:tw-from-pink-600 after:tw-via-purple-700 after:tw-to-indigo-800 after:tw-h-[2px] after:tw-w-[42px] after:tw-right-0 after:tw-bottom-0 after:tw-top-[10px] after:tw-mx-auto"
                dangerouslySetInnerHTML={{ __html: subtitle }}
              />
              <h2
                className="tw-pt-[5px] xl:tw-pt-[30px] xl:tw-text-[70px] xl:tw-leading-[90px] md:tw-text-[34px] tw-text-[30px] tw-leading-[40px] tw-uppercase tw-font-semibold"
                dangerouslySetInnerHTML={{ __html: title }}
              />
              <p
                className="tw-text-[12px] xl:tw-text-[16px] tw-leading-normal tw-font-light"
                dangerouslySetInnerHTML={{ __html: desc }}
              />

              <div className="xl:tw-mt-8 tw-mt-3">
                <CTA icon={true} />
              </div>
            </div>
            <ul className="lg:tw-col-span-4 md:tw-col-span-7 tw-grid md:tw-grid-cols-2 tw-grid-cols-2 md:tw-absolute tw-right-0 lg:tw-w-[40%] md:tw-w-[50%] tw-w-[100%] tw-mt-[10%]">
              {testimonials.map((testimonial) => (
                <li key={testimonial.id}>
                  <div className="tw-h-full tw-relative tw-group tw-bg-[#110220] tw-overflow-hidden hover:tw-overflow-visible">
                    <Image
                      src={testimonial.imgSrc}
                      alt="testimonial"
                      className="tw-opacity-20 tw-w-full tw-h-[323px] group-hover:tw-opacity-100 tw-object-cover"
                    />
                    <div className="-tw-translate-y-full group-hover:tw-translate-y-full tw-transition-all tw-ease-in-out tw-duration-300 tw-absolute tw-w-full tw-h-full tw-top-0 tw-bottom-0 tw-z-10 tw-text-left group-hover:tw-opacity-100">
                      <span className="tw-w-full tw-h-full tw-flex tw-flex-col tw-items-start tw-justify-center tw-bg-[linear-gradient(124deg,rgb(236,1,166)_0%,rgb(181,13,162)_49%,rgb(126,24,158)_100%)] tw-text-white xl:tw-p-5 tw-p-3 tw-z-10">
                        <h4 className="tw-text-[18px] lg:tw-text-[25px] xl:tw-text-[30px] 2xl:tw-text-[36px] tw-font-medium">
                          {testimonial.name}
                        </h4>
                        <h6 className="tw-text-[14px] xl:tw-text-[16px] 2xl:tw-text-[18px] tw-leading-tight tw-font-light tw-py-[20px]">
                          {testimonial.role}
                        </h6>
                        <p className="tw-text-[12px] tw-text-white tw-leading-[26px] tw-text-left xl:tw-line-clamp-none tw-line-clamp-2">
                          {testimonial.testimonial}
                        </p>
                      </span>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <ul className="tw-grid tw-grid-cols-2 md:tw-flex 2xl:tw-mt-[10%] tw-mt-[10%] tw-items-center md:tw-px-0 tw-px-4">
          {testimonials2.map((testimonial2) => (
            <li key={testimonial2.id} className="tw-w-full tw-h-full">
              <div className="tw-h-full tw-relative tw-group tw-bg-[#110220] tw-overflow-hidden hover:tw-overflow-visible">
                <Image
                  src={testimonial2.imgSrc}
                  alt="testimonial"
                  className="tw-opacity-20 tw-w-full tw-h-[323px] group-hover:tw-opacity-100 tw-object-cover"
                />
                <div className="-tw-translate-x-full group-hover:tw-translate-x-full tw-transition-all tw-ease-in-out tw-duration-300 tw-absolute tw-w-full tw-h-full tw-top-0 tw-bottom-0 tw-z-10 tw-text-left group-hover:tw-opacity-100">
                  <span className="tw-w-full tw-h-full tw-flex tw-flex-col tw-items-start tw-justify-center tw-bg-[linear-gradient(124deg,rgb(236,1,166)_0%,rgb(181,13,162)_49%,rgb(126,24,158)_100%)] tw-text-white xl:tw-p-5 tw-p-3 tw-z-10">
                    <h4 className="tw-text-[18px] lg:tw-text-[25px] xl:tw-text-[30px] 2xl:tw-text-[36px] tw-font-medium">
                      {testimonial2.name}
                    </h4>
                    <h6 className="tw-text-[14px] xl:tw-text-[16px] 2xl:tw-text-[18px] tw-leading-tight tw-font-light tw-py-[10px]">
                      {testimonial2.role}
                    </h6>
                    <p className="tw-text-[12px] tw-text-white tw-leading-tight tw-text-left xl:tw-line-clamp-none tw-line-clamp-2">
                      {testimonial2.testimonial}
                    </p>
                  </span>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
