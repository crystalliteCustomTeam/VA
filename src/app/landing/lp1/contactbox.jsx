"use client"
import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import styles from "@/styles/landing/lp/contentbox.module.scss";
import CTA from "@/src/components/CTA/CTA";
import Image from "next/image";
import { FavIcon, Pause } from "@/src/app/app-constants";

const ContactBox = ({ data, alternatesame, samebox }) => {
    const [isVideoPlaying, setIsVideoPlaying] = useState(false);

    const toggleVideo = () => {
        setIsVideoPlaying((prev) => !prev);
    };

    return (
        <section className={`${styles.contentBox} pt-100`}>
            <Container className="h-100">
                <Row className="h-100">
                    <Col md={12} lg={6} className={`${alternatesame ? "order-lg-2 my-auto" : "my-auto"} `}>
                        <div className={[alternatesame ? styles.contentSameAlertnet : '', samebox ? styles.samebox : ''].join(' ')}>
                            <div className="tagTitle">{data?.subtitle}</div>
                            <h2>{data.title}</h2>
                            {data.txt}
                            <CTA color={true} />
                        </div>
                    </Col>
                    <Col md={12} lg={6} className={`${alternatesame ? "order-lg-1 my-auto " : "my-auto"}`}>
                        <div className={styles.videoBox}>
                            {isVideoPlaying ? (
                                <video
                                    autoPlay
                                    muted
                                    loop
                                    preload="auto"
                                    aria-label="Background video"
                                    className={styles.bannerVideo}
                                    loading="eager"
                                    poster={data.image}
                                >
                                    <source src={data.video} type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                            ) : (
                                <Image
                                    src={data.image}
                                    alt="Video Thumbnail"
                                    fill
                                />
                            )}

                            <div className={`${styles.centerBtn} ${isVideoPlaying ? styles.VideoPlaying : ""}`} onClick={toggleVideo}>
                                <div className="buttonCommon">
                                    <div>
                                        {isVideoPlaying ? <Pause /> : <FavIcon />}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default ContactBox;
