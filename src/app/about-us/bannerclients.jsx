"use client";
import { Col, Container, Row } from "react-bootstrap";
import Logo1 from "media/home/clientslogo/logo1.webp";
import Logo2 from "media/home/clientslogo/logo2.webp";
import Logo3 from "media/home/clientslogo/logo3.webp";
import Logo4 from "media/home/clientslogo/logo4.webp";
import Logo5 from "media/home/clientslogo/logo5.webp";
import Logo6 from "media/home/clientslogo/logo6.webp";
import Logo7 from "media/home/clientslogo/logo7.webp";
import Logo8 from "media/home/clientslogo/logo8.webp";
import Logo9 from "media/home/clientslogo/logo9.webp";
import Logo10 from "media/home/clientslogo/logo10.webp";
import Logo11 from "media/home/clientslogo/logo11.webp";
import Logo12 from "media/home/clientslogo/logo12.webp";
import Logo13 from "media/home/clientslogo/logo13.webp";
import Logo14 from "media/home/clientslogo/logo14.webp";
import Logo15 from "media/home/clientslogo/logo15.webp";
import Logo16 from "media/home/clientslogo/logo16.webp";
import Logo17 from "media/home/clientslogo/logo17.webp";
import Logo18 from "media/home/clientslogo/logo18.webp";
import Logo19 from "media/home/clientslogo/logo19.webp";
import Logo20 from "media/home/clientslogo/logo20.webp";

import Image from "next/image";
import styles from "@/styles/about-us/bannerclients.module.scss";
import useEmblaCarousel from 'embla-carousel-react';
import AutoScroll from 'embla-carousel-auto-scroll';

const ClientsLogos = [
    { logo: Logo1.src },
    { logo: Logo2.src },
    { logo: Logo3.src },
    { logo: Logo4.src },
    { logo: Logo5.src },
    { logo: Logo6.src },
    { logo: Logo7.src },
    { logo: Logo8.src },
    { logo: Logo9.src },
    { logo: Logo10.src },
    { logo: Logo11.src },
    { logo: Logo12.src },
    { logo: Logo13.src },
    { logo: Logo14.src },
    { logo: Logo15.src },
    { logo: Logo16.src },
    { logo: Logo17.src },
    { logo: Logo18.src },
    { logo: Logo19.src },
    { logo: Logo20.src },
];

const BannerClients = () => {
    const [emblaRefClients] = useEmblaCarousel(
        { loop: true },
        [
            AutoScroll({
                delay: 3000,
                speed: 1,
                playOnInit: true,
            })
        ]
    );

    const [emblaRefFramework] = useEmblaCarousel(
        { loop: true, direction: 'rtl' },
        [
            AutoScroll({
                delay: 3000,
                speed: 1,
                playOnInit: true,
            })
        ]
    );

    return (
        <section className={`${styles.bannerClients} pb-100`}>
            <Container>
                <Row>
                    <Col md={12} className="m-auto">
                        <div className={styles.embla}>
                            <div className={styles.embla__viewport} ref={emblaRefClients}>
                                <div className={styles.embla__container}>
                                    {ClientsLogos.map((item, index) => (
                                        <div className={styles.embla__slide} key={`client-${index}`}>
                                            <div className={styles.imgBox}>
                                                <Image src={item.logo} alt={`Client Logo ${index + 1}`} width={316} height={165} />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className={styles.embla} dir="rtl">
                            <div className={styles.embla__viewport} ref={emblaRefFramework}>
                                <div className={styles.embla__container}>
                                    {ClientsLogos.map((item, index) => (
                                        <div className={styles.embla__slide} key={`framework-${index}`}>
                                            <div className={styles.imgBox}>
                                                <Image src={item.logo} alt={`Framework Logo ${index + 1}`} width={316} height={165} />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default BannerClients;
