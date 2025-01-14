import {
  BannerData,
  list,
  slides,
  ClientsReview,
  WhyItems,
  WhyOption,
  ClientsLogos,
} from "@/src/app/home/data/data"

import Banner from "@/src/app/home/banner"
import KeyPoints from "@/src/app/home/keypoints"
import Services from "@/src/app/home/services"
import Portfolio from "@/src/app/home/portfolio"
import Testimonials from "@/src/app/home/testimonials"
import WhyChooes from "@/src/app/home/whychoose"
import VideoCta from "@/src/app/home/videocta"
import Clients from "@/src/app/home/clients"
import SpotLight from "@/src/app/home/spotlight"
import Faqs from "@/src/app/home/faq"
import Industries from "@/src/app/home/industries"

export default function Home() {
  return (
    <>
      <Banner BannerData={BannerData} />
      <KeyPoints />
      <Portfolio />
      <Services />
      <SpotLight />
      <Testimonials slides={ClientsReview} />
      <WhyChooes slides={WhyItems} options={WhyOption} />
      <VideoCta />
      <Clients ClientsLogos={ClientsLogos} />
      <Industries slides={slides} />
      <Faqs data={list} />

      {/* Website Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org/",
            "@type": "WebSite",
            name: "Video Animation Studio - Official Site",
            url: "https://videoanimation.us/",
            potentialAction: {
              "@type": "SearchAction",
              target: "{search_term_string}",
              "query-input": "required name=search_term_string",
            },
          }),
        }}
      />

      {/* Corporation Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org/",
            "@type": "Corporation",
            name: "Video Animation Studio - Official Site",
            alternateName: "Video Animation Company",
            url: "https://videoanimation.us/",
            logo: "",
            sameAs: [
              "https://www.facebook.com/videoanimationus",
              "https://www.x.com/vid_animationus",
              "https://www.instagram.com/videoanimationus",
              "https://www.linkedin.com/company/video-animation-us",
              "https://www.youtube.com/@VideoAnimationStudio",
              "https://videoanimation.us/",
              "https://www.pinterest.com/animationvideous/",
            ],
          }),
        }}
      />
    </>
  )
}
