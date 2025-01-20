import { Col, Container, Row } from "react-bootstrap"
import styles from "@/styles/about-us/banner.module.scss"
import CommonButton from "@/src/app/home/components/commonbutton"
import IMG from "media/about-us/banner.png"
import Image from "next/image"
import Head from "next/head"
import CTA from "@/src/components/CTA/CTA"

const Banner = ({ BannerData }) => {
  return (
    <>
      <Head>
        <link
          rel="preload"
          href={BannerData.video}
          as="video"
          type="video/mp4"
        />
      </Head>
      <section className={styles.mainBanner}>
        <Container className="h-100">
          <Row className="h-100">
            <Col md={7} className="my-auto">
              <div className={styles.bannerContentBox}>
                <h1>{BannerData?.title}</h1>
                {BannerData?.desc}
                <CTA />
              </div>
            </Col>
            <Col md={5} className="my-auto">
              <div className={styles.bannerContentBox}>
                <Image
                  src={IMG.src}
                  alt="Video Animation"
                  width={612}
                  height={400}
                />
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
