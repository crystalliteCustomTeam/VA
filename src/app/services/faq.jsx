"use client"
import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import styles from "@/styles/home/faqs.module.scss";
import { MinusFaqIcon, PlusFaqIcon } from "@/src/app/app-constants";

const Faq = ({ faqList }) => {
    const [activeIndex, setActiveIndex] = useState(0);

    const toggleFaq = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section className={`${styles.faqsSection} p-100`}>
            <Container>
                <Row>
                    <Col xl={12} lg={12} md={12}>
                        <h2>Frequently Asked Question?</h2>
                    </Col>
                    <Col xl={12} lg={12} md={12} >
                        {faqList.map((items, index) => (
                            <div className={`${styles.faqsBox} ${activeIndex === index ? styles.active : ""}`} key={index}>
                                <div
                                    className={styles.faqsTitle}
                                    onClick={() => toggleFaq(index)}
                                >
                                    {items.title}
                                    <div className={`${styles.iconBox} ${activeIndex === index ? styles.active : ""}`}>
                                        <PlusFaqIcon />
                                    </div>
                                </div>
                                <div className={styles.faqscontent}>
                                    {items.txt}
                                </div>
                            </div>
                        ))}
                    </Col>
                </Row>
            </Container>
        </section >
    );
};

export default Faq;