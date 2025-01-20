import { Col, Container, Row } from 'react-bootstrap'
import styles from "@/styles/services/banner.module.scss"
import CommonButton from "@/src/app/home/components/commonbutton"
import RoundBtn from "@/src/app/home/components/roundbtn"
import Head from 'next/head'
import CTA from '@/src/components/CTA/CTA'

const Banner = ({ video, BannerData }) => {
    return (
        <>
            <Head>
                <link rel="preload" href={BannerData.video} as="video" type="video/mp4" />
            </Head>
            <section className={`${styles.mainBanner} ${video ? styles.pricingPage : ''}`}>
                <Container className="h-100">
                    <Row className="h-100">
                        <Col md={7} className='mt-auto'>
                            <div className={styles.bannerContent}>
                                <h1>{BannerData?.title}</h1>
                                <p>{BannerData?.desc}</p>
                                <CTA />
                            </div>
                        </Col>
                        <Col md={5} className='mt-md-auto mt-sm-0 ms-auto text-right'>
                            <div className={styles.servicesButton}>
                                <RoundBtn />
                            </div>
                        </Col>
                    </Row>
                </Container>
                <video
                    autoPlay
                    muted
                    loop
                    preload="auto"
                    aria-label="Background video"
                    className={styles.bannerVideo}
                    loading="eager"
                    poster={`https://vumbnail.com/${BannerData.videoId}.jpg`}
                >
                    <source src={BannerData.video} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </section >
        </>


    )
}
export default Banner