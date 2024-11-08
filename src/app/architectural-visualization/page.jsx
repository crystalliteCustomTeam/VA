
import { BannerData, ProcessContent, ProcessList, ImageCtaContent, FaqList } from "@/src/app/architectural-visualization/data/data";
import { slides, options, ClientsReview, WhyItems, WhyOption } from "@/src/app/home/data/data";

import BannerClients from "@/src/app/about/bannerclients";
import Banner from "@/src/app/services/banner";
import Portfolio from "@/src/app/home/portfolio";
import KeyPoints from "@/src/app/home/keypoints";
import Packages from "@/src/app/pricing/packages";
import WhyChooes from "@/src/app/home/whychoose";
import Testimonials from "@/src/app/home/testimonials";
import Industries from "@/src/app/home/industries";
import Faq from "@/src/app/services/faq";
import Process from "@/src/app/services/process";
import ImageCta from "../services/imagecta";




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

        </>
    );
}
