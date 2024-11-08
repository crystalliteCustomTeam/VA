"use client";
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { Row, Col, Container } from "react-bootstrap";
import styles from "@/styles/home/portfolio.module.scss";
import useEmblaCarousel from 'embla-carousel-react';
import { FavIcon } from '@/src/app/app-constants';
import axios from 'axios';
import VideoModal from '@/src/app/home/components/videomodal';
import Autoplay from 'embla-carousel-autoplay'

const OPTIONS = { align: 'center', loop: true };
const autoplayOptions = { delay: 2000 };
const caseStudiesList = [
    { title: "3D Animation", tag: 'videoAnimation3D' },
    { title: "Hybrid Animation", tag: 'videoAnimationHB' },
    { title: "2D Animation", tag: 'videoAnimation2d' },
    { title: "Cel Animation", tag: 'videoAnimationCEL' },
    { title: "Motion Graphics", tag: 'videoAnimationMG' },
    { title: "Whiteboard Animation", tag: 'videoAnimationWB' },
    // { title: "Architectural Visualization", tag: 'videoAnimationAV' },
    // { title: "Typography Animation", tag: 'videoAnimationTA' }
];

const VIMEO_ACCESS_TOKEN = '487ce35bb2408d9ea6ebad7c234cc57b';

const Portfolio = () => {
    const [emblaRef, emblaApi] = useEmblaCarousel(OPTIONS, [Autoplay(autoplayOptions)]);
    const [activeTab, setActiveTab] = useState(0);
    const [videos, setVideos] = useState([]);
    const [videoID, setVideoID] = useState("");
    const [loading, setLoading] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [scrollSnaps, setScrollSnaps] = useState([]);
    const [modalShow, setModalShow] = useState(false);


    useEffect(() => {
        if (emblaApi) {
            setScrollSnaps(emblaApi.scrollSnapList());
            emblaApi.on('select', () => setSelectedIndex(emblaApi.selectedScrollSnap()));
        }
    }, [emblaApi]);

    const fetchVimeoVideos = async (tag) => {
        setLoading(true);
        setVideos([]);
        try {
            const response = await axios.get(`https://api.vimeo.com/videos`, {
                params: {
                    query: tag,
                },
                headers: {
                    Authorization: `Bearer ${VIMEO_ACCESS_TOKEN}`
                }
            });
            setVideos(response.data.data);
        } catch (error) {
            console.error("Error fetching videos: ", error);
        } finally {
            setLoading(false);
            if (emblaApi) emblaApi.reInit();
        }

    };

    useEffect(() => {
        const selectedTag = caseStudiesList[activeTab].tag;
        fetchVimeoVideos(selectedTag);
    }, [activeTab]);

    const handleTabChange = (index) => {
        setActiveTab(index);
    };

    const handlePlayClick = (id) => {
        setModalShow(true);
        setVideoID(id);
    };

    return (
        <section className={`${styles.portfolioSection} p-150`}>
            <Container>
                <Row>
                    <Col>
                        <h2>Portfolio</h2>
                        <ul className={styles.tabsBox}>
                            {caseStudiesList.map((study, index) => (
                                <li
                                    key={index}
                                    className={`${styles.tabsItem} ${activeTab === index ? styles.active : ''}`}
                                    onClick={() => handleTabChange(index)}
                                >
                                    {study.title}
                                </li>
                            ))}
                        </ul>
                    </Col>
                </Row>
            </Container>

            <Container fluid>
                <Row>
                    <Col md={12} className='p-0'>
                        {loading ? (
                            <div className={styles.videoLoader}>
                                <div className="buttonCommon loaderCommon">
                                    <div className="loading">
                                        <FavIcon />
                                    </div>
                                </div>
                            </div>

                        ) : (
                            <>
                                {videos.length === 0 ? (
                                    <p className={styles.messageLoader}>No videos found for this category.</p>
                                ) : (
                                    <div className={styles.embla}>
                                        <div className={styles.embla__viewport} ref={emblaRef}>
                                            <div className={styles.embla__container}>
                                                {videos.map((video, index) => (

                                                    <div className={styles.embla__slide} key={video.uri}>
                                                        <div className={styles.slideBox}>
                                                            <Image
                                                                src={video.pictures.sizes[video.pictures.sizes.length - 1].link}
                                                                alt={`Video Thumbnail ${index + 1}`}
                                                                fill
                                                            />
                                                            <div className={styles.videoButton} onClick={() => handlePlayClick(video.uri.split('/').pop())}>
                                                                <div className="buttonCommon">
                                                                    <div>
                                                                        <FavIcon />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                        {videos.length > 0 && (
                                            <div className={styles.embla__controls}>
                                                <div className={styles.embla__dots}>
                                                    <span className={styles.left}>
                                                        {selectedIndex + 1 > 9 ? selectedIndex + 1 : `0${selectedIndex + 1}`}
                                                    </span>
                                                    {scrollSnaps.map((_, index) => (
                                                        <div
                                                            key={index}
                                                            className={`${styles.emblaPoints} ${index === selectedIndex ? styles.active : ""}`}
                                                            onClick={() => emblaApi.scrollTo(index)}
                                                        />
                                                    ))}
                                                    <span className={styles.right}>
                                                        {videos.length > 9 ? videos.length : `0${videos.length}`}
                                                    </span>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                )}
                            </>
                        )}
                    </Col>
                </Row>
            </Container>
            <VideoModal show={modalShow} iframeUrl={videoID} onHide={() => setModalShow(false)} />
        </section>
    );
};

export default Portfolio;
