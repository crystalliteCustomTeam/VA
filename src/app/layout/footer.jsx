"use client"
import { Col, Container, Row } from "react-bootstrap"
import styles from "@/styles/layout/footer.module.scss"
import ContactFrom from "@/src/app/home/components/contactfrom"
import Image from "next/image"
import IMG from "media/home/rotateImg.webp"
import { FavLogo, FooterPhone, FooterEmail, FooterPin } from "@/src/app/app-constants"
import Link from "next/link"
import { useEffect, useState } from "react";
import { SocailLinks, subMenuItems } from "./data/data"
import PaymentImg from "media/home/paymentImg.webp"
import Head from "next/head"

const QuickLinks = [
    {
        name: "Home",
        url: "/"
    },
    {
        name: "Portfolio",
        url: "/portfolio"
    },
    {
        name: "Pricing",
        url: "/pricing"
    },
    {
        name: "Contact Us",
        url: "/contact"
    },
]



const Footer = () => {
    const [activeClass, setActiveClass] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveClass((prev) => !prev);
        }, 1000);
        return () => clearInterval(interval);
    }, []);
    return (
        <>
            <Head>
                <link rel="preload" href="https://player.vimeo.com/progressive_redirect/playback/1025562046/rendition/540p/file.mp4?loc=external&signature=2b1f66327223317b633d13487ab29b223334cb06b19e65fcc8b6b7a1522f6fe7" as="video" type="video/mp4" />
            </Head>
            <section className={styles.topFooterSection}>
                <Container className={styles.footerBox}>
                    <Row>
                        <Col lg={12}>
                            <div className={styles.footerBG}>
                                <div className={styles.footerContent}>
                                    <h3>Unlock Your Story’s Potential</h3>
                                    <p>Let’s Animate Your Dreams!</p>
                                    <div className={styles.rotateImg}>
                                        <Image src={IMG.src} alt="rotateImg" width={190} height={190} />
                                    </div>
                                </div>
                                <div className={styles.footerFrom}>
                                    <ContactFrom />
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className={styles.FooterSection}>
                <Container >
                    <Row>
                        <Col md={12}>
                            <div className={styles.footerMenuSec}>
                                <div className={`${styles.menuItem} ${styles.FooterLogo}`}>
                                    {/* <ContactRoundBtn footerIcn={true} />*/}
                                    {/* <FavLogo /> */}
                                    <video
                                        autoPlay
                                        muted
                                        loop
                                        preload="auto"
                                        aria-label="Background video"
                                        loading="eager"
                                    >
                                        <source src="https://player.vimeo.com/progressive_redirect/playback/1025562046/rendition/540p/file.mp4?loc=external&signature=2b1f66327223317b633d13487ab29b223334cb06b19e65fcc8b6b7a1522f6fe7" type="video/mp4" />
                                        Your browser does not support the video tag.
                                    </video>

                                </div>

                                <div className={styles.menuItem}>
                                    <div className={styles.mainlinks}>
                                        <h6>Quick Links</h6>
                                        <ul>
                                            {QuickLinks.map((item, index) => (
                                                <li key={index}>
                                                    <Link href={item.url}>{item.name}</Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>


                                <div className={styles.menuItem}>
                                    <div className={styles.mainlinks}>
                                        <h6>Services Links</h6>
                                        <ul className={styles.serviceslinks}>
                                            {subMenuItems.map((item, index) => (
                                                <li key={index}>
                                                    <Link href={item.path}>{item.label}</Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>


                                <div className={styles.menuItem}>
                                    <div className={`${styles.footerContent} ${styles.mainlinks}`}>
                                        <h6>Contact Info</h6>
                                        <div className={styles.contactInfo} target="_blank">
                                            <a href="tel:7163001135">
                                                <FooterPhone />
                                                (716) 300-1135</a>
                                        </div>
                                        <div className={styles.contactInfo}>
                                            <a href="mailto:queries@videoanimation.us" target="_blank">
                                                <FooterEmail />
                                                queries@videoanimation.us</a>
                                        </div>
                                        <div className={styles.contactAddress}>
                                            <div>
                                                <FooterPin />
                                            </div>
                                            <div>
                                                <a href="https://maps.app.goo.gl/VaY5M98abVx6qsfB6" target="_blank">
                                                    418 Broadway ste R Albany NY 12207
                                                </a>
                                            </div>
                                        </div>
                                        <div className={styles.contactAddress}>
                                            <div>
                                                <FooterPin />
                                            </div>
                                            <div>
                                                <a href="https://maps.app.goo.gl/CuRNM42yybePhmG2A" target="_blank">
                                                    900 Balcones Drive, S TE100 Austin, T exas, 78731
                                                </a>
                                            </div>
                                        </div>
                                        <div className={styles.linksItem}>
                                            <ul>
                                                {SocailLinks.map((item, index) => (
                                                    <li key={index}>
                                                        <Link href={item.url} target="_blank">{item.icon}</Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className={styles.copyRightSection}>
                <Container className="h-100">
                    <Row className={`${styles.borderStyle} h-100`} >
                        <Col sm={6} md={6} className="my-auto">
                            <div className={styles.CopyRightBox}>
                                <div className={styles.txtCopyRight}>© Copyright 2024 - Video Animation </div>
                                <div className={styles.CopyRightLinks}>
                                    <ul>
                                        <li><Link href="/terms-and-conditions">Terms of Use</Link></li>
                                        <li><Link href="/privacy-policy"> Privacy Policy</Link></li>
                                    </ul>
                                </div>
                            </div>

                        </Col>
                        <Col sm={6} md={6} className="my-auto text-end">
                            <Image src={PaymentImg.src} alt="Payment Image" width={550} height={40} />
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className={`${styles.animationsection} ${activeClass ? styles.active : ""}`}>
                <Container className="h-100">
                    <Row className="h-100">
                        <Col className="mt-auto">
                            <div className={styles.animatedTxt}>Animati<span className={styles.animatedO}>o</span>n</div>
                        </Col>
                    </Row>
                </Container>
            </section>

        </>
    )
}

export default Footer