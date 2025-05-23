import {
  BannerData,
  ProcessContent,
  ProcessList,
  ImageCtaContent,
  FaqList,
} from "@/src/app/3d-animation/data/data"
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
            name: "3D Animation Services - Video Animation Company USA",
            url: "https://videoanimation.us/3d-animation",
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
            name: "3D Animation Services - Video Animation Company USA",
            alternateName: "3D Video Animation Studio",
            url: "https://videoanimation.us/3d-animation",
            logo: "",
            sameAs: [
              "https://www.facebook.com/videoanimationus",
              "https://www.x.com/vid_animationus",
              "https://www.instagram.com/videoanimationus",
              "https://www.linkedin.com/company/video-animation-us",
              "https://www.youtube.com/@VideoAnimationStudio",
              "https://videoanimation.us/3d-animation",
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
            name: "3D Animation Services - Video Animation Company USA",
            image: "",
            "@id": "",
            url: "https://videoanimation.us/3d-animation",
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
              "https://videoanimation.us/3d-animation",
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
            name: "3D Animation Services - Video Animation",
            image: "https://videoanimation.us/3d-animation",
            description:
              "Video Animation Studio is your one-stop shop for professional 3D animation services. Get premium 3D Animation Services that bring your imagination to life We craft stunning visuals, immersive environments, and dynamic characters.",
            brand: {
              "@type": "Brand",
              name: "Video Animation Studio USA",
            },
          }),
        }}
      />
    </>
  )
}
