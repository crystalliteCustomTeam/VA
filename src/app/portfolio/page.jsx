import {
  slides,
  options,
  ClientsReview,
  ClientsLogos,
} from "@/src/app/home/data/data"
import Clients from "@/src/app/home/clients"
import Faqs from "@/src/app/home/faq"
import Industries from "@/src/app/home/industries"
import Testimonials from "@/src/app/home/testimonials"
import Banner from "@/src/app/portfolio/components/Banner"
import PortfolioTabs from "@/src/app/portfolio/components/PortfolioTabs"

import { BannerData, list } from "@/src/app/portfolio/data/data"

export default function page() {
  return (
    <div>
      <Banner BannerData={BannerData} />
      <PortfolioTabs />
      <Clients ClientsLogos={ClientsLogos} />
      <Testimonials slides={ClientsReview} />
      <Industries slides={slides} options={options} />
      <Faqs data={list} />
      <fetchVimeoVideos />

      {/* Website Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org/",
            "@type": "WebSite",
            name: "Our Work - Video Animation Portfolio",
            url: "https://videoanimation.us/portfolio",
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
            name: "Our Work - Video Animation Portfolio",
            alternateName: "Video Animation Company Portfolio",
            url: "https://videoanimation.us/portfolio",
            logo: "",
            sameAs: [
              "https://www.facebook.com/videoanimationus",
              "https://www.x.com/vid_animationus",
              "https://www.instagram.com/videoanimationus",
              "https://www.linkedin.com/company/video-animation-us",
              "https://www.youtube.com/@VideoAnimationStudio",
              "https://videoanimation.us/portfolio",
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
            name: "Our Work - Video Animation Portfolio",
            image: "",
            "@id": "",
            url: "https://videoanimation.us/portfolio",
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
              "https://videoanimation.us/portfolio",
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
            name: "Video Animation Company",
            image: "https://videoanimation.us/portfolio",
            description:
              "Video Animation Studio is your one-stop shop for professional 3D animation services. Get premium 3D Animation Services that bring your imagination to life We craft stunning visuals, immersive environments, and dynamic characters.",
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
    </div>
  )
}
