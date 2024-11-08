import React from 'react'
import styles from "@/styles/services/process.module.scss";
import { Col, Container, Row } from 'react-bootstrap';

export default function Process({ data, list }) {
    return (
        <section className={`${styles.processSection} p-100`}>
            <Container>
                <Row>
                    <Col md={6} className={styles.processCard}>
                        <h2>{data.title}</h2>
                        <p>{data.text}</p>
                    </Col>
                </Row>
                <Row className={styles.processCardBox}>
                    {list.map((item, index) => (
                        <Col md={6} key={index}>
                            <div className={styles.processCard}>
                                <span>0{index + 1}</span>
                                <h4>{item.title}</h4>
                                <p>{item.text}</p>
                            </div>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    )
}