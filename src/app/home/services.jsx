"use client";
import { useEffect, useRef, useState } from 'react';
import styles from "@/styles/home/services.module.scss";
import { Col, Container, Row } from "react-bootstrap";
import { ArrowBtn, Polygon } from "@/src/app/app-constants";
import Link from "next/link";

const services = [
    { title: '3D Animation', description: 'Take your visuals to the next level with our 3D animations that create a truly immersive experience for your viewers.', url: 'https://player.vimeo.com/progressive_redirect/playback/1022023406/rendition/1080p/file.mp4?loc=external&signature=01ab571dd3266c76e65141c995e11cea92b2d77db4a5bfb6d3d6daf6544ec385', videoId: "1022023406" },
    { title: 'Hybrid Animation', description: 'Mix the charm of hand-drawn animation with modern techniques to create something truly unique and emotionally engaging for your brand.', url: 'https://player.vimeo.com/progressive_redirect/playback/1022023731/rendition/1080p/file.mp4?loc=external&signature=c3232b91ee2ece397f163f6bd1b81ae8c7ed468ed8d41d9790d767e07aa276f7', videoId: "1022023731" },
    { title: '2D Animation', description: 'Transform your ideas into lively 2D animations that engage, entertain, and resonate with your target audience.', url: 'https://player.vimeo.com/progressive_redirect/playback/1025443442/rendition/1080p/file.mp4?loc=external&signature=e0c207671c377c1abecfff87bfdd1c4211d201cfdc35c2e8eed3d67dd60dfe89', videoId: "1025443442" },
    { title: 'Cel Animation', description: 'Mix the charm of hand-drawn animation with modern techniques to create something truly unique and emotionally engaging for your brand.', url: 'https://player.vimeo.com/progressive_redirect/playback/1022023605/rendition/1080p/file.mp4?loc=external&signature=608c68c99f6b66e42aa661b73e7a14bcf26b2ea7ae5b52b1ae625ecc3965246c', videoId: "1022023605" },
    { title: 'Motion Graphics', description: 'Make your message pop with motion graphics that are visually striking, easy to follow, and crafted to grab attention.', url: 'https://player.vimeo.com/progressive_redirect/playback/1025461460/rendition/1080p/file.mp4?loc=external&signature=1dbc42f701da9c501cbf64da338144608356a627458a4795f9cdaed99b16a298', videoId: "1025461460" },
    { title: 'Whiteboard Animation', description: 'We simplify your complex ideas with whiteboard animations that tell your story in a way that’s clear, creative, and memorable.', url: 'https://player.vimeo.com/progressive_redirect/playback/1022024033/rendition/1080p/file.mp4?loc=external&signature=3941c10b9a4cba87801ae0d4fa97710743fcb098bd244177e3ba6a1912a22da8', videoId: "1022024033" },
];

const Services = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const videoRef = useRef(null);
    const observerRef = useRef(null);

    const handleClick = (index) => {
        setActiveIndex(index);
    };

    useEffect(() => {
        const videoElement = videoRef.current;

        const handleIntersection = (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    videoElement.play();
                } else {
                    videoElement.pause();
                }
            });
        };

        if (!observerRef.current) {
            observerRef.current = new IntersectionObserver(handleIntersection, {
                threshold: 0.5,
            });
        }
        if (videoElement) {
            observerRef.current.observe(videoElement);
        }

        return () => {
            if (videoElement) {
                observerRef.current.unobserve(videoElement);
            }
        };
    }, [activeIndex]);

    useEffect(() => {
        const videoElement = videoRef.current;
        if (videoElement) {
            videoElement.load();
            videoElement.play();
        }
    }, [activeIndex]);

    return (
        <section className={styles.serviceSection}>
            <Container>
                <Row>
                    <Col md={12}>
                        <div className={styles.serviceBox}>
                            <h2>Services</h2>
                            <ul className={styles.serviceItemBox}>
                                {services.map((service, index) => (
                                    <li
                                        key={index}
                                        className={`${styles.serviceItem} ${activeIndex === index ? styles.active : ''}`}
                                        onClick={() => handleClick(index)}
                                    >
                                        <h4><Polygon />{service.title}</h4>
                                        <p>{service.description}</p>
                                        <Link href="javascript:parent.LC_API.open_chat_window();">
                                            Let’s Discuss <ArrowBtn />
                                        </Link>
                                    </li>
                                ))}
                            </ul>
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
                poster={`https://vumbnail.com/${services[activeIndex].videoId}.jpg`}
            >
                <source src={services[activeIndex].url} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </section>
    );
};

export default Services;
