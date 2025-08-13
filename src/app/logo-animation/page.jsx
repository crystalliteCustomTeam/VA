import {
  BannerData,
  ProcessContent,
  ProcessList,
  ImageCtaContent,
  FaqList,
} from "@/src/app/logo-animation/data/data"

import {
  slides,
  options,
  ClientsReview,
  WhyItems,
  WhyOption,
} from "@/src/app/home/data/data"

import BannerClients from "@/src/app/about-us/bannerclients"
import Banner from "@/src/app/services/banner"
import Portfolio from "@/src/app/home/portfolio"
import KeyPoints from "@/src/app/home/keypoints"
import Packages from "@/src/app/pricing/packages"
import WhyChooes from "@/src/app/home/whychoose"
import Testimonials from "@/src/app/home/testimonials"
import Industries from "@/src/app/home/industries"
import Faq from "@/src/app/services/faq"
import Process from "@/src/app/services/process"
import ImageCta from "../services/imagecta"

export default function Page() {
  return (
    <>
      <Banner BannerData={BannerData} />
      <BannerClients />
      <Portfolio />
      <KeyPoints />
      <Process data={ProcessContent} list={ProcessList} />
      <Packages />
      <ImageCta data={ImageCtaContent} />
      <WhyChooes slides={WhyItems} options={WhyOption} />
      <Testimonials slides={ClientsReview} />
      <Industries slides={slides} options={options} />
      <Faq faqList={FaqList} />

      {/* Website Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org/",
            "@type": "WebSite",
            name: "Logo Animation Services - Video Animation Company USA",
            url: "https://videoanimation.us/logo-animation",
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
            name: "Logo Animation Services - Video Animation Company USA",
            alternateName: "Logo Animation Studio",
            url: "https://videoanimation.us/logo-animation",
            logo: "",
            sameAs: [
              "https://www.facebook.com/videoanimationus",
              "https://www.x.com/vid_animationus",
              "https://www.instagram.com/videoanimationus",
              "https://www.linkedin.com/company/video-animation-us",
              "https://www.youtube.com/@VideoAnimationStudio",
              "https://videoanimation.us/logo-animation",
              "https://www.pinterest.com/animationvideous/",
            ],
          }),
        }}
      />

      {/* Professional Service Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org/",
            "@type": "ProfessionalService",
            name: "Logo Animation Services - Video Animation Company USA",
            image: "",
            "@id": "",
            url: "https://videoanimation.us/logo-animation",
            telephone: "+1 (833) 666-6684",
            address: {
              "@type": "PostalAddress",
              streetAddress: "111 N Orange Ave Suite 800",
              addressLocality: "Orlando",
              addressRegion: "FL",
              postalCode: "32801",
              addressCountry: "US",
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: 28.5442702,
              longitude: -81.37963769999999,
            },
            openingHoursSpecification: {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
                "Sunday",
              ],
              opens: "00:00",
              closes: "23:59",
            },
            sameAs: [
              "https://www.facebook.com/videoanimationus",
              "https://www.x.com/vid_animationus",
              "https://www.instagram.com/videoanimationus",
              "https://www.youtube.com/@VideoAnimationStudio",
              "https://www.linkedin.com/company/video-animation-us",
              "https://www.pinterest.com/animationvideous/",
              "https://videoanimation.us/logo-animation",
            ],
          }),
        }}
      />

      {/* Product Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org/",
            "@type": "Product",
            name: "Logo Animation Services - Video Animation",
            image: "https://videoanimation.us/logo-animation",
            description:
              "Video Animation have professional logo animation services, we offer top-notch animations for your company with unlimited revisions to ensure your complete satisfaction.",
            brand: {
              "@type": "Brand",
              name: "Video Animation Studio USA",
            },
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.9",
              bestRating: "5",
              worstRating: "1",
              ratingCount: "2091",
            },
          }),
        }}
      />
    </>
  )
}
