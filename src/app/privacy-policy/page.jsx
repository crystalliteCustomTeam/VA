import { Container, Row, Col } from "react-bootstrap"
import styles from "@/styles/commonpages.module.scss"

export default function PrivacyPolicy() {
  return (
    <>
      <section className={` ${styles.mainContainer}`}>
        <Container>
          <Row>
            <Col>
              <h1>Privacy Policies</h1>

              <h3>What information do we gather?</h3>
              <p>
                Video Animations LLC has set this privacy plan to explain our
                policies regarding customer’s personal data that is collected
                for our use. When you place a query online, you will only need
                to give some basic information to us by filling out a simple
                query form so that we could contact you to discuss the need. You
                will only need to enter your name, e-mail address, phone number
                or country.
              </p>
              <h3>What do we use your information for?</h3>
              <p>
                Video Animations LLC uses the personal data for handling orders.
                Video Animations LLC and its members also use your personal data
                and other personally non-identifiable information that will help
                us in handling your orders properly and to better respond to
                your complexity. Furthermore, your information may be used for
                the following ways:
              </p>
              <ul className={styles.list}>
                <li>
                  1. To improve our website features (by the feedbacks we
                  receive from you)
                </li>
                <li>
                  2. To keep you updated with our latest offers and happening
                </li>
                <li>3. To improve customer services</li>
              </ul>
              <h3>How do we protect your information?</h3>
              <p>
                Video Animations LLC uses a secure server for the purpose of
                securing your private information. All your private/credit
                information sends out via Secure Socket Layer (SSL) technology
                that is used to keep the information confidential when you place
                your order online.
              </p>
              <h3>Do we use Cookie?</h3>
              <p>
                We may use ‘cookies’ for specific purposes which cookies are
                designed for. A cookie is a piece of information that the
                computer that hosts our Site gives to your computer when you
                access a website. Our cookies help provide additional
                functionality to the Site and help us analyze Site usage more
                accurately.
              </p>
              <h3>Do we disclose any information to outside parties?</h3>
              <p>
                We do not sell, trade, or otherwise transfer to outside parties
                your personally identifiable information. This does not include
                our subsidiaries and trusted third parties who assist us in
                operating our website, conducting our business, or servicing
                you, so long as those parties agree to keep this information
                confidential. However, non-personally identifiable visitor
                information may be provided to other parties for marketing,
                advertising, or other uses.
              </p>
              <h3>The General Data Protection Regulation Imply</h3>
              <p>
                We do not transfer data to other parties that gives out your
                personally identifiable information. An individual’s data that
                you will give will be kept confidential and you will have
                complete know of it. This does not include our subsidiaries and
                trusted third parties who assist us in operating our website,
                conducting our business, or servicing you, so long as those
                parties agree to keep this information confidential.
              </p>
              <h3>Consent</h3>
              <p>
                By consenting to this privacy notice you are giving us
                permission to process your personal data specifically for the
                purpose identified. Consent is required for Video Animations LLC
                to process both types of personal data, but it must be
                explicitly given. Where we are asking for your sensitive
                personal data we will always tell you why and how the
                information will be used. You may withdraw consent at any time
                by Call or Via Email as per the standard Withdrawal of Consent
                Procedure [ GDPR DOC 2.7A].
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Product Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org/",
            "@type": "Product",
            name: "Video Animation Company",
            image: "",
            brand: {
              "@type": "Brand",
              name: "Video Animation Studio USA",
            },
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.9",
              bestRating: "5",
              worstRating: "1",
              ratingCount: "2091",
            },
          }),
        }}
      />
    </>
  )
}
