import { Col, Container, Row } from "react-bootstrap"
import styles from "@/styles/landing/lp/contactbox1.module.scss"
import { CheckIcon } from "@/src/app/app-constants"
import CTA from "@/src/components/CTA/CTA"

const ContactBox1 = () => {
    return (
        <section className={`${styles.contentBox} pt-100`}>
            <Container className="h-100">
                <Row className="h-100">
                    <Col md={6} lg={5} className="my-auto">
                        <div className="tagTitle">Best Video Animation Company</div>
                        <h2>In New York With Diverse Services</h2>
                        <p>With diverse video animation and production services, we are leading the market with quality work, and great customer services. Here are the animated video production services in New York you can get from Video Animation:</p>
                        <CTA color={true} />
                    </Col>
                    <Col md={6} lg={7} className="my-auto">
                        <ul className={styles.ulDesign}>
                            <li><CheckIcon />Motion Graphics Services</li>
                            <li><CheckIcon />Custom-Made Graphics & Illustrations</li>
                            <li><CheckIcon />Training Video Production</li>
                            <li><CheckIcon />Explainer Videos</li>
                            <li><CheckIcon />2D Animation Service</li>
                            <li><CheckIcon /> Video Marketing</li>
                            <li><CheckIcon />Professional Video Editing Services</li>
                            <li><CheckIcon />Video Editing Services</li>
                            <li><CheckIcon />Educational Videos</li>
                            <li><CheckIcon />Promotional Video Production</li>
                            <li><CheckIcon />3D Animation Service</li>
                            <li><CheckIcon />Corporate Video Production</li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </section>

    )
}

export default ContactBox1

