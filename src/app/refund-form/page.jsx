"use client";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Container, Row, Col, Form } from "react-bootstrap";
import styles from "@/styles/commonpages.module.scss";

export default function RefundFrom() {
  const [ip, setIP] = useState("");
  const [pagenewurl, setPagenewurl] = useState("");
  const [isDisabled, setIsDisabled] = useState(false);
  const [formStatus, setFormStatus] = useState("Submit");
  const [error, setError] = useState("");

  // Load IP address from the API
  const getIPData = async () => {
    try {
      const response = await fetch("https://ipinfo.io/?token=229b1c3fa2e54c");
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      setIP(data);
    } catch (error) {
      console.error("Error fetching IP data:", error);
    }
  };

  useEffect(() => {
    getIPData();
    setPagenewurl(window.location.href);
  }, []);

  const router = usePathname();
  const currentRoute = router;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setFormStatus("Processing...");
    setIsDisabled(true);

    // Validate fields
    const name = e.target.name.value.trim();
    const email = e.target.email.value.trim();
    const phone = e.target.phone.value.trim();
    const message = e.target.message.value.trim();
    const payment_method = e.target.payment_method.value.trim();
    const invoice_num = e.target.invoice_num.value.trim();
    const card_digits = e.target.card_digits.value.trim();
    const order_date = e.target.order_date.value.trim();
    const refund_reason = e.target.refund_reason.value.trim();

    if (!name || !email || !phone) {
      setError("Please fill in all required fields.");
      setFormStatus("Submit");
      setIsDisabled(false);
      return;
    }

    const currentdate = new Date().toLocaleString();
    const data = {
      page_url: pagenewurl,
      user_ip: ip.ip || "",
      lead_data: {
        name,
        email,
        phone,
        message,
        payment_method,
        invoice_num,
        card_digits,
        order_date,
        refund_reason,
      },
    };
    const JSONdata = JSON.stringify(data);

    try {
      let headersList = {
        Accept: "*/*",
        "User-Agent": "Thunder Client (https://www.thunderclient.com)",
        Authorization: "Bearer ke2br2ubssi4l8mxswjjxohtd37nzexy042l2eer",
        "Content-Type": "application/json",
      };
      let bodyContent = JSON.stringify({
        IP: `${ip.ip} - ${ip.city || ""} - ${ip.country || ""}`, // Only include necessary IP details
        Brand: "Video Animation",
        Page: currentRoute,
        Date: currentdate,
        Time: currentdate,
        JSON: JSONdata,
      });

      await fetch("https://sheetdb.io/api/v1/wszr7rrbz3wsj", {
        method: "POST",
        body: bodyContent,
        headers: headersList,
      });
      window.location.href = "/thank-you";
    } catch (error) {
      console.error("Error during form submission:", error);
      setFormStatus("Failed...");
      setIsDisabled(false);
    }
  };
  return (
    <>
      <section className={` ${styles.refundFrom} ${styles.mainContainer}`}>
        <Container>
          <Row>
            <Col md={6}>
              <h1>Refund Policy for Video Animation Studio</h1>
              <p>
                Video Animation Studio, aims to provide excellent service and ensure
                customer satisfaction. Our refund and cancellation policies are
                designed to protect both our clients and our company. Please
                read through the following policy to understand how refund
                requests are handled.
              </p>
              <h4>General Refund Policy:</h4>
              <p>
                <strong>Cancellation:</strong> You are eligible for a full
                refund (less a 10% processing fee) if the order is canceled
                within 24 hours of order placement. Refunds are not applicable
                if initial content or designs are delivered or revisions are
                requested within this timeframe.
              </p>
              <p>
                <strong>Order Inactivity:</strong> No refund will be issued if
                there is no activity on the order for 30 days after the order is
                placed. To reactivate the project, you will need to pay a fee
                depending on the project scope.
              </p>
              <p>
                <strong>Final Deliverables:</strong> Refund requests will not be
                entertained after final files have been delivered.
              </p>
              <p>
                <strong>Refund Reasons:</strong> Refund requests must be based
                on valid reasons, such as non-compliance with the brief or
                inadequate revisions. No refunds will be issued for change of
                mind or if the content meets the agreed-upon requirements.
              </p>
              <p>
                <strong>Good Faith:</strong> If you have placed the same content
                order with multiple agencies to claim a refund, this will be
                considered a breach of good faith, and the refund request may be
                denied.
              </p>
              <p>
                <strong>Customer Feedback:</strong> Clients are expected to
                provide timely feedback to ensure the completion of the project.
                Lack of feedback may affect the project delivery and refund
                eligibility.
              </p>
              <p>
                <i>
                  *** Fill out the refund form or email it to{" "}
                  <a href="mailto:finance@infinitimediainc.com">
                    finance@infinitimediainc.com.
                  </a>{" "}
                  ***
                </i>
              </p>
            </Col>
            <Col md={6}>
              <Form onSubmit={handleSubmit}>
                <div className={styles.refundBox}>
                  <div className={styles.inputdiv}>
                    <input
                      type="text"
                      name="name"
                      placeholder="Name"
                      required
                    />
                  </div>
                  <div className={styles.inputdiv}>
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      required
                    />
                  </div>
                  <div className={styles.inputdiv}>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Phone"
                      required
                    />
                  </div>
                  <div className={styles.inputdiv}>
                    <select name="payment_method">
                      <option value="" disabled="" selected="">
                        Payment Method
                      </option>
                      <option value="Card">Card</option>
                      <option value="Cheque">Cheque</option>
                      <option value="Wire">Wire</option>
                    </select>
                  </div>
                  <div className={styles.inputdiv}>
                    <input
                      type="text"
                      name="card_digits"
                      placeholder="Last 4 Card Digits"
                    />
                  </div>
                  <div className={styles.inputdiv}>
                    <input
                      type="text"
                      name="invoice_num"
                      placeholder="Invoice Number"
                    />
                  </div>
                  <div className={styles.inputdiv}>
                    <input
                      type="date"
                      name="order_date"
                      placeholder="Order Date"
                      className="custom-date"
                    />
                  </div>
                  <div className={styles.inputdiv}>
                    <select name="refund_reason">
                      <option value="" disabled="" selected="">
                        Refund Reason
                      </option>
                      <option value="Pre-delivery refund">
                        Pre-delivery refund
                      </option>
                      <option value="Post-delivery refund">
                        Post-delivery refund
                      </option>
                      <option value="Inactivity">Inactivity</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  <div className={styles.messagediv}>
                    <textarea name="message" placeholder="Message"></textarea>
                  </div>
                  <p>
                    By submitting this form, you acknowledge that you have read
                    and understood our Refund Policy and agree to the terms
                    stated above.
                  </p>
                  <div className={styles.btnSubmit}>
                    <button type="submit" disabled={isDisabled}>
                      {formStatus}
                    </button>
                  </div>
                </div>
              </Form>
            </Col>
          </Row>
          <Row>
            <Col md={8} className="m-auto pt-100">
              <div className="text-center">
                <h2>Contact Us</h2>
                <p>
                  For any inquiries or concerns regarding the Refund Policy,
                  please feel free to reach out to our customer support team. We
                  are here to assist you and ensure your satisfaction with our
                  services.
                </p>
                <p>
                  <strong>Email: </strong>{" "}
                  <a href="mailto:finance@infinitimediainc.com">
                    finance@infinitimediainc.com
                  </a>
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}
