import { ClientsLogos, ClientsReview } from "@/src/app/home/data/data";
import { BannerData, list } from "@/src/app/pricing/data/data";

import Banner from "@/src/app/pricing/banner";
import Clients from "@/src/app/home/clients";
import Faqs from "@/src/app/home/faq";
import Testimonials from "@/src/app/home/testimonials";
import Contentsection from "@/src/app/pricing/contentsection";
import Packages from "@/src/app/pricing/packages";

// Testimonial Image

export default function Pricing() {
  return (
    <>
      <Banner video={true} BannerData={BannerData} />
      <Packages />
      <Clients ClientsLogos={ClientsLogos} />
      <Contentsection />
      <Testimonials slides={ClientsReview} />
      <Faqs data={list} />
    </>
  );
}
