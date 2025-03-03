import {
  BannerData,
  ProcessContent,
  ProcessList,
  ImageCtaContent,
  FaqList,
} from "@/src/app/cgi-and-vfx-services/data/data"
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
            name: "CGI and VFX Services - Video Animation Company USA",
            url: "https://videoanimation.us/cgi-and-vfx-services",
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
            name: "CGI and VFX Services - Video Animation Company USA",
            alternateName: "CGI and VFX Animation Studio",
            url: "https://videoanimation.us/cgi-and-vfx-services",
            logo: "",
            sameAs: [
              "https://www.facebook.com/videoanimationus",
              "https://www.x.com/vid_animationus",
              "https://www.instagram.com/videoanimationus",
              "https://www.linkedin.com/company/video-animation-us",
              "https://www.youtube.com/@VideoAnimationStudio",
              "https://videoanimation.us/cgi-and-vfx-services",
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
            name: "CGI and VFX Services - Video Animation Company USA",
            image: "",
            "@id": "",
            url: "https://videoanimation.us/cgi-and-vfx-services",
            telephone: "+1 (716) 300-1135",
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
              "https://videoanimation.us/cgi-and-vfx-services",
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
            name: "CGI & VFX Services - Video Animation",
            image: "https://videoanimation.us/cgi-and-vfx-services",
            description:
              "Enhance your visual storytelling with our CGI and VFX services. We deliver high-quality animations and effects that captivate and engage your audience.",
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
