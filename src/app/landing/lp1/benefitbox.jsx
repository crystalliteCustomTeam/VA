import { Col, Container, Row } from "react-bootstrap"
import styles from "@/styles/landing/lp/benefit.module.scss"
import IMG from "media/landing/lp/Image03.webp"
import Image from "next/image"
const data = [
    {
        title: "Increases Engagement and Retention",
        txt: "Animation videos are visually stimulating and can capture attention more effectively than static content or plain text. They combine vibrant visuals, motion, and storytelling to keep viewers engaged. Research shows that people retain more information when it is presented in a visually appealing and dynamic format, making animation an excellent tool for boosting brand recall."
    },
    {
        title: "Simplifies Complex Concepts",
        txt: "Animation videos can break down complicated ideas, products, or processes into simple and digestible visuals. Through motion graphics, infographics, or character-driven narratives, businesses can convey technical or abstract concepts in a way that’s easy for audiences to understand, regardless of their background."
    },
    {
        title: "Enhances Brand Identity",
        txt: "Custom animation provides a unique way to showcase your brand’s personality and values. By incorporating branded elements such as logos, colors, and characters, businesses can create a distinctive identity that resonates with their target audience. This personalized approach can foster stronger emotional connections with customers."
    },
    {
        title: "Boosts Conversion Rates",
        txt: "Well-crafted animation videos are highly effective at persuading viewers to take action. Whether it’s to click a link, purchase a product, or subscribe to a service, animated videos can guide users through a compelling story while emphasizing a clear call-to-action. This combination of entertainment and information makes animation a powerful tool for driving conversions and sales."
    }
]


const BenefitBox = () => {
    return (
        <section className={`${styles.benefitSection} pt-100`}>
            <Container className="h-100">
                <Row className="h-100">
                    <Col md={12} lg={8}>
                        <h2>Benefits of using an <span>animation video for your business:</span></h2>
                        <div className={styles.benefitBox}>
                            {data.map((item, index) => (
                                <div key={index} className={styles.benefitItem}>
                                    <h4> <span>0{index + 1}</span>{item.title}</h4>
                                    <p>{item.txt}</p>
                                </div>
                            ))}
                        </div>
                    </Col>
                    <Col md={10} lg={4} className="my-auto d-md-none d-lg-block">
                        <Image src={IMG.src} alt="Image" width={650} height={500} />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default BenefitBox