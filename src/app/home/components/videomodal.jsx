import { Col, Modal, Row } from "react-bootstrap"
import styles from "@/styles/home/components/videomodal.module.scss"
import { ClosedBtn } from "@/src/app/app-constants"
import ContactFrom from "./contactfrom"
import Head from "next/head"

const VideoModal = (props) => {
    const { iframeUrl, onHide } = props
    return (

        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            className="videoModal"
            centered
        >
            {iframeUrl ? (<div className={styles.iframePopup}>
                <iframe
                    src={`https://player.vimeo.com/video/${iframeUrl}?autoplay=1&controls=0&loop=1`}
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    allow="autoplay; fullscreen"
                    allowFullScreen>
                </iframe>
                <div className={styles.closedBtn} onClick={onHide}><ClosedBtn /></div>
            </div>
            ) : (
                <>
                    <Head>
                        <link rel="preload" href="https://player.vimeo.com/progressive_redirect/playback/1025562046/rendition/540p/file.mp4?loc=external&signature=2b1f66327223317b633d13487ab29b223334cb06b19e65fcc8b6b7a1522f6fe7" as="video" type="video/mp4" />
                    </Head>
                    <div className={styles.popupContact}>
                        <div className={styles.closedBtn} onClick={onHide}>
                            <ClosedBtn />
                        </div>
                        <Row>

                            <Col md={6} className="m-auto">
                                <div className={styles.popupForm}>
                                    <h3 className="textGradient">Amazing Discounts</h3>
                                    <p>On Video Animation Services</p>

                                    <ContactFrom popup={true} />
                                </div>
                            </Col>
                            <Col md={6} className="m-auto d-none d-md-block ">
                                {/* <div className={`${styles.popupImg} text-center`}>
                                <ContactRoundBtn popup={true} />
                            </div> */}
                                <div className={`${styles.popupImg} text-center`}>
                                    <video
                                        autoPlay
                                        muted
                                        loop
                                        preload="auto"
                                        aria-label="Background video"
                                        loading="eager"
                                    >
                                        <source src="https://player.vimeo.com/progressive_redirect/playback/1025562046/rendition/540p/file.mp4?loc=external&signature=2b1f66327223317b633d13487ab29b223334cb06b19e65fcc8b6b7a1522f6fe7" type="video/mp4" />
                                        Your browser does not support the video tag.
                                    </video>
                                </div>
                            </Col>
                        </Row>

                    </div>
                </>
            )}
        </Modal>

    )
}

export default VideoModal