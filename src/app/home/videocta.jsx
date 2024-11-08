
"use client";
import { useEffect, useRef, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import styles from "@/styles/home/videocta.module.scss";
import CommonButton from "@/src/app/home/components/commonbutton"


const VideoCta = () => {
    const videoRef = useRef(null);
    const sectionRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);

    useEffect(() => {
        const videoElement = videoRef.current;
        const sectionElement = sectionRef.current;

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    videoElement.play().catch(error => console.log("Error playing video:", error));
                    setIsPlaying(true);
                } else {
                    videoElement.pause();
                    setIsPlaying(false);
                }
            });
        }, { threshold: 0.5 });

        if (sectionElement) {
            observer.observe(sectionElement);
        }

        return () => {
            observer.disconnect();
        };
    }, []);

    return (
        <section ref={sectionRef} className={styles.videoctaSection}>
            <Container className='h-100'>
                <Row className='h-100'>
                    <Col lg={10} className='m-auto text-center'>
                        <div className={styles.videoContent}>
                            <h2>Make Your Brand Stand Out</h2>
                            <CommonButton />

                        </div>
                    </Col>
                </Row>
            </Container>
            <video
                ref={videoRef}
                muted
                loop
                preload="auto"
                aria-label="Background video"
                className={styles.bannerVideo}
                poster="https://vumbnail.com/1025457379.jpg"
            >
                <source src='https://player.vimeo.com/progressive_redirect/playback/1025457379/rendition/1080p/file.mp4?loc=external&signature=397f7a59dff74cb2be9faf71d1d3357ac050b51a5bb456a46dcefdb9dc97c2ea' type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </section>
    );
}

export default VideoCta;
