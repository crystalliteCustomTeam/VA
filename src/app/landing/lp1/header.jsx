"use client"
import { Col, Container, Row } from "react-bootstrap"
import styles from "@/styles/landing/lp/header.module.scss"
import { ChatIcon, DefaultLogo, PhoneIcon, VariantLogo } from "@/src/app/app-constants"
import { useState, useEffect } from 'react';


const HeaderLp = () => {
    const [showDefault, setShowDefault] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setShowDefault((prev) => !prev);
        }, 2000);

        return () => clearInterval(interval);
    }, []);
    return (
        <section className={`${styles.headerSection}`}>
            <Container>
                <Row>
                    <Col xs={4} sm={4} md={6}>
                        <div className={styles.mainLogoBox}>
                            <div className={`${styles.mainLogo} ${showDefault ? styles.show : styles.hide}`}>
                                <DefaultLogo />
                            </div>
                            <div className={`${styles.mainLogo} ${showDefault ? styles.hide : styles.show}`}>
                                <VariantLogo />
                            </div>
                        </div>
                    </Col>
                    <Col xs={8} sm={8} md={6}>
                        <div className={styles.flexBtn}>
                            <div className={styles.phoneNumber}>
                                <a href="tel:7163001135" ><PhoneIcon />(833) 666-6684</a>
                            </div>
                            <div className={styles.chatNow}>
                                <a href="javascript:parent.LC_API.open_chat_window();"><ChatIcon />Chat Now</a>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>

    )
}

export default HeaderLp