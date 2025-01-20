import { Container, Row, Col } from 'react-bootstrap'
import styles from "@/styles/services/imagecta.module.scss"
import CommonButton from "@/src/app/home/components/commonbutton"
import Image from 'next/image'
import CTA from '@/src/components/CTA/CTA'


const ImageCta = ({ data }) => {
    return (
        <section className={styles.imagectaSection}>
            <Container className='h-100'>
                <Row className='h-100'>
                    <Col lg-={10} className='m-auto text-center'>
                        <div className={styles.imageContent}>
                            <h2>{data.title}</h2>
                            <CTA css="justify-content-center mt-4" />
                        </div>
                    </Col>
                </Row>
            </Container>
            <Image src={data.bannerImg} fill alt='bg image' />

        </section>
    )
}

export default ImageCta