"use client"
import { Col, Container, Row } from "react-bootstrap"
import styles from "@/styles/home/industries.module.scss"
import useEmblaCarousel from 'embla-carousel-react'
import AutoScroll from 'embla-carousel-auto-scroll';
import Link from "next/link"
import { ArrowBtn } from "@/src/app/app-constants"
import CTA from "@/src/components/CTA/CTA";



const Industries = ({ slides }) => {
    const [emblaRef] = useEmblaCarousel(
        { loop: true, align: 'start', dragFree: true, skipSnaps: true, containScroll: "keepSnaps" },
        [
            AutoScroll({
                delay: 0,
                speed: 2,
                playOnInit: true,
                stopOnMouseEnter: false,
                stopOnInteraction: false,
                restartDelay: 0,
            })
        ]);

    return (
        <section className={`${styles.industriesSection} p-100`}>
            <Container>
                <Row className="headingROw align-items-center">
                    <Col lg={7} md={7}>
                        <h2>Industries</h2>
                        <p>By combining creativity with purpose, we help brands communicate their message effectively and connect with their audience in a memorable way.</p>
                    </Col>
                    <Col md="5">
                    <CTA css="justify-content-md-end mt-0" color={true}/>
                    </Col>
                </Row>
            </Container>
            <div className={styles.embla}>
                <div className={styles.embla__viewport} ref={emblaRef}>
                    <div className={styles.embla__container}>
                        {slides.map((item, index) => (
                            <div className={`${styles.embla__slide}`} key={index}>
                                <div className={styles.industriesBox}>
                                    <h3>
                                        {item.title}
                                    </h3>
                                    <p>{item.txt}</p>
                                    <Link href={item.url}><ArrowBtn /></Link>
                                    <video
                                        autoPlay
                                        muted
                                        loop
                                        preload="auto"
                                        aria-label="Background video"
                                        loading="eager"
                                    >
                                        <source src={item.videoUrl} type="video/mp4" />
                                        Your browser does not support the video tag.
                                    </video>

                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Industries
