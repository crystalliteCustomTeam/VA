import { Col, Container, Row } from 'react-bootstrap'
import styles from "@/styles/contact/contactform.module.scss"
import ContactPageFrom from '@/src/app/contact/compoments/contactfrom'

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