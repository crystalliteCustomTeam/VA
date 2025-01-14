import Banner from "@/src/app/contact-us/compoments/banner";
import ContactForm from "@/src/app/contact-us/compoments/contactform";
import Testimonials from "@/src/app/home/testimonials";
import Faqs from "@/src/app/home/faq";

import { list, BannerData } from "@/src/app/contact-us/data/data";

import { ClientsReview } from "@/src/app/home/data/data";

export default function Page() {
  return (
    <>
      <Banner contact={true} BannerData={BannerData} />
      <ContactForm />
      <Testimonials slides={ClientsReview} />
      <Faqs data={list} />
    </>
  );
}
