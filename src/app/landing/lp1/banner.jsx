"use client"
import { Col, Container, Row } from "react-bootstrap"
import styles from "@/styles/home/banner.module.scss"
import Head from "next/head"
import RoundBtn from "@/src/app/home/components/roundbtn"
import CTA from "@/src/components/CTA/CTA"


const Banner = ({ BannerData }) => {

    return (
        <>
            <Head>
                <link rel="preload" href={BannerData.video} as="video" type="video/mp4" />
            </Head>
            <section className={styles.bannerSection}>
                <Container className="h-100">
                    <Row className="h-100">
                        <Col md={12} className="mt-auto">
                            <div className={styles.bannerContentBox}>
                                <div className={styles.bannerHeading}>
                                    <h1>{BannerData?.title}</h1>
                                    <CTA />

                                </div>
                                <div className={styles.bannerButton}>
                                    <RoundBtn />
                                </div>
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

            </section>
        </>
    )
}

export default Banner