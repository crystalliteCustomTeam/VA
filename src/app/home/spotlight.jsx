"use client"; // Add this if you're using Next.js with React hooks
import { useEffect, useRef } from "react";
import { Row, Col, Container } from "react-bootstrap";
import styles from "@/styles/home/spotlight.module.scss";
import CommonButton from "@/src/app/home/components/commonbutton"

const images = [
    { url: "https://player.vimeo.com/progressive_redirect/playback/1011155230/rendition/1080p/file.mp4?loc=external&signature=82e441ce71bd966775154f6d4e16d3a52a00588c3ba71d2a0e605880245ba736" },
    { url: "https://player.vimeo.com/progressive_redirect/playback/1011145316/rendition/1080p/file.mp4?loc=external&signature=bc5f3dfbff71e4d2f75da5b6457e70c44e14057b96bcfae09e6e798651ba1ae0" },
    { url: "https://player.vimeo.com/progressive_redirect/playback/1011148581/rendition/1080p/file.mp4?loc=external&signature=ff5b2a045041581b99ea745e4fc350f55ec2e16bef7d09b19d79a2338f2ddb86" },
];

const SpotLight = () => {
    const videoRefs = useRef([]);

    useEffect(() => {
        const options = {
            threshold: 0.5,
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                const index = Number(entry.target.getAttribute("data-index"));
                const video = videoRefs.current[index];

                if (entry.isIntersecting) {
                    video?.play();
                } else {
                    video?.pause();
                }
            });
        }, options);

        videoRefs.current.forEach((video) => {
            if (video) {
                observer.observe(video);
            }
        });

        return () => {
            videoRefs.current.forEach((video) => {
                if (video) {
                    observer.unobserve(video);
                }
            });
        };
    }, []);

    return (
        <section className={`${styles.spotlightSection}`}>
            <Container className="h-100">
                <Row className="h-100">
                    <Col xs={12} className="my-auto">
                        <div className={styles.sportlightContent}>
                            <div className={styles.leftText}>
                                <h4>
                                    Step
                                    <br />
                                    into the
                                </h4>
                            </div>
                            <div className={styles.rightText}>
                                <h4>Spotlight</h4>
                            </div>
                        </div>
                        <div className={styles.iamgeContainer}>
                            {images.map((item, index) => (
                                <div key={index} className={styles.imageBox}>
                                    <video
                                        ref={(el) => (videoRefs.current[index] = el)}
                                        data-index={index}
                                        autoPlay
                                        muted
                                        loop
                                        preload="auto"
                                        aria-label="Background video"
                                        className={styles.bannerVideo}
                                    >
                                        <source src={item.url} type="video/mp4" />
                                        Your browser does not support the video tag.
                                    </video>
                                </div>
                            ))}
                            <div className={styles.sportlightCTA}>
                                <CommonButton color={true} />
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default SpotLight;