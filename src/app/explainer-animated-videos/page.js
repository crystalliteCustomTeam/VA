import { CallToAction } from "@/src/components/explainer-animated-videos/CallToAction"
import { Footer } from "@/src/components/explainer-animated-videos/Footer"
import Header from "@/src/components/explainer-animated-videos/Header"
import { Hero } from "@/src/components/explainer-animated-videos/Hero"
import { Portfolio } from "@/src/components/explainer-animated-videos/Portfolio"
import { Pricing } from "@/src/components/explainer-animated-videos/Pricing"
import { Process } from "@/src/components/explainer-animated-videos/Process"
import TabSection from "@/src/components/explainer-animated-videos/TabSection"
import { Testimonial } from "@/src/components/explainer-animated-videos/Testimonial"

import "@/styles/lp/explainer-animated-videos/build.css"

const ExplainerAnimatedVideos = () => {
  return (
    <div className='tw-bg-[url("../../public/explainer-animated-videos/full-banner.jpg")] tw-bg-cover tw-bg-no-repeat tw-w-full tw-h-full tw-relative tw-text-white tw-font-sfMono tw-z-0'>
      <Header />
      <Hero />
      <TabSection />
      <Portfolio />
      <Pricing />
      <Process />
      <Testimonial />
      <CallToAction />
      <Footer />
    </div>
  )
}

export default ExplainerAnimatedVideos
