import { slides, options, ClientsReview, ClientsLogos } from "@/src/app/home/data/data";
import Clients from "@/src/app/home/clients";
import Faqs from "@/src/app/home/faq";
import Industries from "@/src/app/home/industries";
import Testimonials from "@/src/app/home/testimonials";
import Banner from "@/src/app/portfolio/components/Banner";
import PortfolioTabs from "@/src/app/portfolio/components/PortfolioTabs";

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
        </div>
    )
}
