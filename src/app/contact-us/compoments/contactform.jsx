import { Col, Container, Row } from 'react-bootstrap'
import styles from "@/styles/contact-us/contactform.module.scss"
import ContactPageFrom from '@/src/app/contact-us/compoments/contactfrom'

const ContactForm = () => {
    return (
        <section className={`${styles.contactFormSection} p-100`}>
            <Container>
                <Row>
                    <Col xl={10} lg={12} md={12} className='m-auto'>
                        <ContactPageFrom />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default ContactForm