import { slides, options, ClientsReview, WhyItems, WhyOption } from "@/src/app/home/data/data";
import { BannerData, list } from "@/src/app/about-us/data/data";

import WhyChooes from "@/src/app/home/whychoose";
import Banner from "@/src/app/about-us/compoments/banner";
import BannerClients from "@/src/app/about-us/compoments/bannerclients";
import KeyPoints from "@/src/app/home/keypoints";
import Portfolio from "@/src/app/home/portfolio";
import Industries from "@/src/app/home/industries";
import Faqs from "@/src/app/home/faq";
import Testimonials from "@/src/app/home/testimonials";

import portfolioImg1 from "media/home/portfolio/portfolio-img-1.webp"
import portfolioImg2 from "media/home/portfolio/portfolio-img-2.webp"
import portfolioImg3 from "media/home/portfolio/portfolio-img-3.webp"


const OPTIONS = { align: 'center', loop: true }

const caseStudiesList = [
  {
    title: "2D Animation",
    slides: [
      { image: portfolioImg1 },
      { image: portfolioImg2 },
      { image: portfolioImg3 },
      { image: portfolioImg2 },
    ]
  },
  {
    title: "3D Animation",
    slides: [
      { image: portfolioImg3 },
      { image: portfolioImg1 },
      { image: portfolioImg3 },
      { image: portfolioImg1 },
    ]
  },
  {
    title: "Hybrid & Cel",
    slides: [
      { image: portfolioImg2 },
      { image: portfolioImg3 },
      { image: portfolioImg2 },
      { image: portfolioImg3 },
    ]
  },
  {
    title: "Motion Graphics",
    slides: [
      { image: portfolioImg1 },
      { image: portfolioImg2 },
      { image: portfolioImg1 },
      { image: portfolioImg2 },
    ]
  },
  {
    title: "Whiteboard Animation",
    slides: [
      { image: portfolioImg3 },
      { image: portfolioImg1 },
      { image: portfolioImg3 },
      { image: portfolioImg1 },
    ]
  },
  {
    title: "CGI-VFX",
    slides: [
      { image: portfolioImg2 },
      { image: portfolioImg3 },
      { image: portfolioImg2 },
      { image: portfolioImg3 },
    ]
  }
];


export default function Page() {
  return (
    <>
      <Banner BannerData={BannerData} />
      <BannerClients />
      <KeyPoints />
      <WhyChooes slides={WhyItems} options={WhyOption} />
      <Portfolio slides={caseStudiesList} options={OPTIONS} caseStudies={caseStudiesList} />
      <Testimonials slides={ClientsReview} />
      <Industries slides={slides} options={options} />
      <Faqs data={list} />
    </>
  );
}
