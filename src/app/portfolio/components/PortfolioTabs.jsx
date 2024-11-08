'use client'
import { useEffect, useState } from "react";
import styles from "@/styles/portfolio/portfolioTabs.module.scss";
import { Container, Row, Col } from "react-bootstrap";
import Image from "next/image";
import { FavIcon } from "@/src/app/app-constants";
import VideoModal from '@/src/app/home/components/videomodal';
import axios from "axios";


const tabs = [
    { label: "3D Animation", tag: 'videoAnimation3D' },
    { label: "Hybrid Animation", tag: 'videoAnimationHB' },
    { label: "2D Animation", tag: 'videoAnimation2D' },
    { label: "Cel Animation", tag: 'videoAnimationCEL' },
    { label: "Motion Graphics", tag: 'videoAnimationMG' },
    { label: "Whiteboard Animation", tag: 'videoAnimationWB' },
    // { label: "Architectural Visualization", tag: 'videoAnimationAV' },
    // { label: "Typography Animation", tag: 'videoAnimationTA' }
];

const VIMEO_ACCESS_TOKEN = '487ce35bb2408d9ea6ebad7c234cc57b';

function limitWords(text, wordLimit) {
    if (typeof text !== "string" || !text.trim()) return "";
    const words = text.split(" ");
    return words.length > wordLimit
        ? words.slice(0, wordLimit).join(" ") + "..."
        : text;
}

const PortfolioTabs = () => {
    const [activeTab, setActiveTab] = useState(0);
    const [modalShow, setModalShow] = useState(false);
    const [videos, setVideos] = useState([]);
    const [videoID, setVideoID] = useState("");
    const [loading, setLoading] = useState(false);


    const fetchVimeoVideos = async (tag) => {
        setLoading(true);
        setVideos([]);
        try {
            const response = await axios.get(`https://api.vimeo.com/videos`, {
                params: {
                    query: tag,
                    per_page: 19
                },
                headers: {
                    Authorization: `Bearer ${VIMEO_ACCESS_TOKEN}`
                }
            });
            let videoList = response.data.data
            if (response.data.data.length < 10) {
                videoList = response.data.data.slice(0, 10);
            }

            setVideos(videoList);
        } catch (error) {
            console.error("Error fetching videos: ", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        const selectedTag = tabs[activeTab].tag;
        fetchVimeoVideos(selectedTag);
    }, [activeTab]);

    // Handle tab switching
    const handleTabChange = (index) => {
        setActiveTab(index);
    };

    const handlePlayClick = (id) => {
        setModalShow(true);
        setVideoID(id);
    };

    const getVideoCountToRender = (count) => {
        if (count >= 2 && count <= 4) return 2;
        if (count >= 5 && count <= 6) return 5;
        if (count === 7) return 7;
        if (count >= 8 && count <= 10) return 8;
        if (count >= 11 && count <= 12) return 11;
        if (count === 13) return 13;
        if (count >= 14 && count <= 16) return 14;
        if (count >= 17 && count <= 18) return 17;
        if (count > 18) return 19;
        return 0; // Default case (no videos)
    };

    const videosToRender = getVideoCountToRender(videos.length);
    const videosToDisplay = videos.slice(0, videosToRender); // Get the correct number of videos to display

    return (
        <section className={`${styles.portfolioSection} pt-100 `}>
            <Container>
                <Row>
                    <Col>
                        <ul className={styles.tabHeaders}>
                            {/* <li>Filter By</li> */}
                            {tabs.map((tab, index) => (
                                <li
                                    key={index}
                                    className={activeTab === index ? styles.active : ''}
                                    onClick={() => handleTabChange(index)}
                                >
                                    {tab.label}
                                </li>
                            ))}
                        </ul>
                    </Col>
                </Row>
            </Container>
            <Container fluid>
                <Row>
                    <Col className="p-0 ">
                        {loading ? (
                            <div className={styles.videoLoader}>
                                <div className="buttonCommon loaderCommon">
                                    <div className="loading">
                                        <FavIcon />
                                    </div>
                                </div>
                            </div>

                        ) : (
                            <div className={styles.tabContent}>
                                <div className={`${styles.portfolio}`}>
                                    <div className={`${styles.gridContainer}`}>

                                        {/* {videos.map((video, index) => (
                                            <div key={index} className={`${styles.imageBox} ${styles[`image${index + 1}`]} `}
                                            >
                                                <Image
                                                    src={video.pictures.sizes[video.pictures.sizes.length - 1].link}
                                                    alt={`Video Thumbnail ${index + 1}`}
                                                    fill
                                                />
                                                <div className={styles.bannerContentBox}>
                                                    <div className={styles.bannerHeading}>
                                                        <div className={styles.title}>{video.name}</div>
                                                        <p>{limitWords(video.description, 15)}</p>
                                                    </div>
                                                    <div className={styles.bannerButton} onClick={() => handlePlayClick(video.uri.split('/').pop())}>
                                                        <div className={`${styles.buttonSmall} buttonCommon`}>
                                                            <div>
                                                                <FavIcon />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))} */}

                                        {videosToDisplay.length > 0 ? (
                                            videosToDisplay.map((video, index) => (
                                                <div key={index} className={`${styles.imageBox} ${styles[`image${index + 1}`]}`}>
                                                    <Image
                                                        src={video.pictures.sizes[video.pictures.sizes.length - 1].link}
                                                        alt={`Video Thumbnail ${index + 1}`}
                                                        fill
                                                    />
                                                    <div className={styles.bannerContentBox}>
                                                        <div className={styles.bannerHeading}>
                                                            <div className={styles.title}>{video.name}</div>
                                                            <p>{limitWords(video.description, 15)}</p>
                                                        </div>
                                                        <div className={styles.bannerButton} onClick={() => handlePlayClick(video.uri.split('/').pop())}>
                                                            <div className={`${styles.buttonSmall} buttonCommon`}>
                                                                <div>
                                                                    <FavIcon />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))
                                        ) : (
                                            <p>No videos to display.</p>
                                        )}


                                    </div>
                                </div>
                            </div>
                        )}
                    </Col>
                </Row>
            </Container>
            <VideoModal show={modalShow} iframeUrl={videoID} onHide={() => setModalShow(false)} />
        </section>
    );
};

export default PortfolioTabs;
