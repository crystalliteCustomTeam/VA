import styles from '@/styles/thanks.module.scss'
import Link from 'next/link'
import { Col, Container, Row } from 'react-bootstrap'
import { ArrowBtn } from '@/src/app/app-constants'
import Testimonials from '@/src/app/home/testimonials'
import { ClientsReview } from '@/src/app/home/data/data'


export default function page() {
  return (
    <>
      <section className={styles.thanksSection}>
        <Container className="h-100">
          <Row className="h-100">
            <Col md={10} lg={8} className="m-auto">
              <div className={styles.bannerContentBox}>
                <div className={styles.bannerHeading}>
                  <h1>Thank You</h1>
                  <p>Our team is reviewing your details and will get back to you shortly. If you want to explore more about what we do or just want to know a bit more, feel free to take a look around!</p>
                  <Link href="/" className="readMoreBtn"><span className="thanks">Back to Home </span><ArrowBtn /></Link>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <Testimonials slides={ClientsReview} />
    </>
  )
}
