import { Col, Container, Row } from "react-bootstrap"
import styles from "@/styles/landing/lp/contentboxcenter.module.scss"

const ContentBoxCenter = () => {
    return (
        <section className={`${styles.contentboxcenterSection} pt-100`}>
            <Container>
                <Row>
                    <Col md={12} lg={12} className="text-center">
                        <h2><span>What are</span>animation videos, and why use them?</h2>
                        <p>Animation videos are dynamic visual presentations created using a series of drawn, designed, or digitally modeled images that are sequenced to create the illusion of movement. They can range from simple 2D graphics to complex 3D animations, often accompanied by sound, music, and narration to deliver a compelling and engaging story. Animation videos are widely used across various fields, including entertainment, education, marketing, and communication, as they allow creators to visualize abstract ideas, concepts, or processes in an easy-to-understand and visually appealing way. Their versatility makes them suitable for everything from storytelling to explaining intricate subjects, fostering a deeper connection with audiences.</p>
                        <p>Using animation videos offers several advantages. They capture attention more effectively than static images or text, making them an excellent tool for conveying messages in a crowded media landscape. Animation allows for unlimited creative possibilities, enabling the visualization of ideas and concepts that might be challenging or impossible to film in real life. Additionally, they can simplify complex topics, breaking them down into digestible segments, which is particularly valuable in education and training. Animation videos are also highly shareable, making them ideal for social media marketing campaigns to increase brand visibility and engagement. Their ability to evoke emotion and convey information simultaneously makes them a powerful medium for storytelling and communication.</p>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default ContentBoxCenter
