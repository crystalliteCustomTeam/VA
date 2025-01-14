import { Col, Container, Row } from 'react-bootstrap'
import styles from "@/styles/about-us/banner.module.scss"
import Head from 'next/head'

const Banner = ({ contact, BannerData }) => {
    return (
        <>
            <Head>
                <link rel="preload" href={BannerData.video} as="video" type="video/mp4" />
            </Head>
            <section className={`${styles.mainBanner} ${contact ? styles.contactpage : ''}`}>
                <Container className="h-100">
                    <Row className="h-100">
                        <Col lg={8} className="m-auto text-center">
                            <div className={styles.bannerContentBox}>
                                <h1>{BannerData?.title}</h1>
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