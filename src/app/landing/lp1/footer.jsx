"use client"
import { Col, Container, Row } from "react-bootstrap"
import styles from "@/styles/layout/footer.module.scss"
import PaymentImg from "media/home/paymentImg.webp"
import Image from "next/image"
import { useEffect, useState } from "react"

const FooterLP = () => {
    const [activeClass, setActiveClass] = useState(false)

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveClass((prev) => !prev)
        }, 1000)
        return () => clearInterval(interval)
    }, [])
    return (
        <>
            <section className={styles.copyRightSection}>
                <Container className="h-100">
                    <Row className={`${styles.borderStyle} h-100`}>
                        <Col sm={6} md={6} className="m-auto ">
                            <div className={`${styles.CopyRightBox} ${styles.centerTxt}`}>
                                <div className={styles.txtCopyRight} >
                                    © Copyright 2024 - Video Animation
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section
                className={`${styles.animationsection} ${activeClass ? styles.active : ""
                    }`}
            >
                <Container className="h-100">
                    <Row className="h-100">
                        <Col className="mt-auto">
                            <div className={styles.animatedTxt}>
                                Animati<span className={styles.animatedO}>o</span>n
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default FooterLP