import React from 'react'
import styles from "@/styles/pricing/package.module.scss";
import { Col, Container, Row } from 'react-bootstrap';
import { PackageTick } from '@/src/app/app-constants';

const data = {
    subtitle: "Animation Cost",
    title: "Pricing Plans",
    content: "We have something in store for everyone, and that something is affordable services",
}

export default function Packages() {
    return (
        <section className={`${styles.PrincingSec} p-100`}>
            <Container >
                <Row className={styles.PrincingContent}>
                    <Col xl={6} lg={6} md={6} >
                        <div className={styles.PrincingContentLeft}>
                            <div className="tagTitle">{data?.subtitle}</div>
                            <h2>{data?.title}</h2>
                            <p>{data?.content}</p>
                        </div>
                    </Col>
                    {/* <Col xl={6} lg={6} md={6} >
                        <div className={styles.PrincingContentRight}>
                            <span>Select Service</span>
                            <select name="menu" id="meun-items" className={styles.PrincingSelect}>
                                <option disabled selected>2D Animation</option>
                                <option value="3D Animation">3D Animation</option>
                                <option value="Whiteboard Animation">Whiteboard Animation</option>
                                <option value="Motion Graphics">Motion Graphics</option>
                                <option value="Video Editing">Video Editing</option>
                                <option value="Logo Animation">Logo Animation</option>
                                <option value="Architectural Visualization">Architectural Visualization</option>
                                <option value="CGI-VFX">CGI-VFX</option>
                                <option value="Infographics">Infographics</option>
                                <option value="Hybrid & Cel">Hybrid & Cel</option>
                            </select>
                        </div>
                    </Col> */}
                </Row>

                <div className={styles.pricing}>
                    <div className={styles.pricingBox}>
                        <div className={styles.box}>
                            <h4 className='textGradient'>Silver<span> Packages</span></h4>
                            <p>We have something in store for everyone, and that something is affordable services</p>
                            <div className={styles.buttonCta}>Get Started</div>
                        </div>
                        <ul className={styles.pricingList}>
                            <li><PackageTick /> 30 Seconds Duration</li>
                            <li><PackageTick /> Script Writing</li>
                            <li><PackageTick /> Custom Artwork</li>
                            <li><PackageTick /> Background Music</li>
                            <li><PackageTick /> HD Format Video</li>
                            <li><PackageTick /> Dedicated Support</li>
                        </ul>
                    </div>

                    <div className={styles.pricingBox}>
                        <div className={styles.box}>
                            <h4 className='textGradient'>Gold<span> Packages</span></h4>
                            <p>We have something in store for everyone, and that something is affordable services</p>
                            <div className={styles.buttonCta}>Get Started</div>
                        </div>

                        <ul className={styles.pricingList}>
                            <li><PackageTick /> 30 Seconds Duration</li>
                            <li><PackageTick /> Script Writing</li>
                            <li><PackageTick /> Professional Voice-over & SFX</li>
                            <li><PackageTick /> Hand-drawn Illustrations</li>
                            <li><PackageTick /> Unlimited Revisions</li>
                            <li><PackageTick /> HD Format Video</li>
                            <li><PackageTick /> Dedicated Support</li>
                        </ul>
                    </div>

                    <div className={styles.pricingBox}>
                        <div className={styles.box}>
                            <h4 className='textGradient'>Platinum<span> Packages</span></h4>
                            <p>We have something in store for everyone, and that something is affordable services</p>
                            <div className={styles.buttonCta}>Get Started</div>
                        </div>

                        <ul className={styles.pricingList}>
                            <li><PackageTick /> 30 Seconds Duration</li>
                            <li><PackageTick /> Script Writing</li>
                            <li><PackageTick /> Professional Voice-over & SFX</li>
                            <li><PackageTick /> Custom 2D Character Illustration</li>
                            <li><PackageTick /> Unlimited Revisions</li>
                            <li><PackageTick /> HD Format Video</li>
                            <li><PackageTick /> Dedicated Support</li>
                        </ul>
                    </div>

                </div>
            </Container>
        </section >
    )
}
