import HeaderLp from '@/src/app/landing/lp1/header'
import FooterLP from '@/src/app/landing/lp1/footer'
import Banner from '@/src/app/landing/lp1/banner'
import { BannerData, ClientsLogos, ContentBox1, ContentBox2, ContentBox3, ContentBox4, ProcessContent, ProcessList, ContentBox01, ContentBox02, ContentBox03 } from '@/src/app/landing/lp1/data/data'
import LogoSec from '@/src/app/landing/lp1/logo'
import ContactBox1 from '@/src/app/landing/lp1/contactbox1'
import ContactBox from '@/src/app/landing/lp1/contactbox'
import Portfolio from "@/src/app/home/portfolio"
import BenefitBox from '@/src/app/landing/lp1/benefitbox'
import Services from "@/src/app/home/services"
import VideoCta from "@/src/app/home/videocta"
import Process from "@/src/app/services/process"
import ContentBoxCenter from '@/src/app/landing/lp1/contentboxcenter'
import Testimonials from "@/src/app/home/testimonials"
import WhyChooes from "@/src/app/home/whychoose"
import Faqs from "@/src/app/home/faq"
import { ClientsReview, WhyItems, WhyOption, list } from '@/src/app/home/data/data'

const Page = () => {
    return (
        <>
            <HeaderLp />
            <Banner BannerData={BannerData} />
            <LogoSec data={ClientsLogos} />
            <ContactBox1 />
            <ContactBox data={ContentBox1} samebox={true} />
            <Portfolio />
            <ContactBox alternatesame={true} data={ContentBox2} />
            <BenefitBox />
            <ContactBox alternatesame={true} data={ContentBox3} />
            <Services />
            <ContactBox data={ContentBox4} samebox={true} />
            <VideoCta />
            <Process data={ProcessContent} list={ProcessList} />
            <ContentBoxCenter />
            <ContactBox data={ContentBox01} alternatesame={true} />
            <ContactBox data={ContentBox02} samebox={true} />
            <ContactBox data={ContentBox03} alternatesame={true} />
            <Testimonials slides={ClientsReview} />
            <WhyChooes slides={WhyItems} options={WhyOption} />
            <Faqs data={list} />
            <FooterLP />
        </>
    )
}

export default Page