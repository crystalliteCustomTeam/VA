"use client"
import React, { useEffect, useState } from "react"
import { usePathname } from "next/navigation"

import styles from "@/styles/home/components/contactfrom.module.scss"
import { ArrowBtn } from "@/src/app/app-constants"
import { Form } from "react-bootstrap"
import axios from "axios"

const ContactFrom = ({ contact, popup }) => {
  const [ip, setIP] = useState("")
  const [pagenewurl, setPagenewurl] = useState("")
  const [isDisabled, setIsDisabled] = useState(false)
  const [formStatus, setFormStatus] = useState("Let’s Discuss")
  const [errors, setErrors] = useState({})
  const [data, setData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  })

  // Load IP address from the API
  const getIPData = async () => {
    try {
      const res = await axios.get("https://ipwho.is/")
      setIP(res.data)
    } catch (error) {
      console.error("Error fetching IP data:", error)
    }
  }

  useEffect(() => {
    getIPData()
    setPagenewurl(window.location.href)
  }, [])
  const router = usePathname()
  const currentRoute = router
  const handleDataChange = (e) => {
    setData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const formValidateHandle = () => {
    let errors = {}
    if (!data.name.trim()) {
      errors.name = "Name is required"
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!data.email.match(emailRegex)) {
      errors.email = "Valid email is required"
    }
    const phoneRegex = /^[0-9]+$/
    if (!data.phone.match(phoneRegex)) {
      errors.phone = "Valid phone number is required"
    }
    return errors
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    setFormStatus("Processing...")
    setIsDisabled(true)

    const errors = formValidateHandle()
    setErrors(errors)
    if (Object.keys(errors).length === 0) {
      const currentdate = new Date().toLocaleString()
      const dataToSend = {
        ...data,
        pageUrl: pagenewurl,
        IP: `${ip.ip} - ${ip.country} - ${ip.city}`,
        currentdate: currentdate,
      }
      const JSONdata = JSON.stringify(dataToSend)

      try {
        await fetch("api/leads", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSONdata,
        })
        let headersList = {
          Accept: "*/*",
          "User-Agent": "Thunder Client (https://www.thunderclient.com)",
          Authorization: "Bearer ke2br2ubssi4l8mxswjjxohtd37nzexy042l2eer",
          "Content-Type": "application/json",
        }
        let bodyContent = JSON.stringify({
          IP: `${ip.ip} - ${ip.city || ""} - ${ip.country || ""}`,
          Brand: "Video Animation",
          Page: `${currentRoute}`,
          Date: currentdate,
          Time: currentdate,
          JSON: JSONdata,
        })

        await fetch("https://sheetdb.io/api/v1/orh55uv03rvh4", {
          method: "POST",
          body: bodyContent,
          headers: headersList,
        })
        const myHeaders = new Headers()
        myHeaders.append("Content-Type", "application/json")
        const raw = JSON.stringify({
          fields: [
            {
              objectTypeId: "0-1",
              name: "email",
              value: data.email,
            },
            {
              objectTypeId: "0-1",
              name: "firstname",
              value: data.name,
            },
            {
              objectTypeId: "0-1",
              name: "phone",
              value: data.phone,
            },
            {
              objectTypeId: "0-1",
              name: "message",
              value: data.message,
            },
          ],
          context: {
            ipAddress: ip.ip,
            pageUri: pagenewurl,
            pageName: currentRoute,
          },
          legalConsentOptions: {
            consent: {
              consentToProcess: true,
              text: "I agree to allow Example Company to store and process my personal data.",
              communications: [
                {
                  value: true,
                  subscriptionTypeId: 999,
                  text: "I agree to receive marketing communications from Example Company.",
                },
              ],
            },
          },
        })
        const requestOptions = {
          method: "POST",
          headers: myHeaders,
          body: raw,
          redirect: "follow",
        }
        await fetch(
          "https://api.hsforms.com/submissions/v3/integration/submit/47083847/011ef447-7771-4b56-8014-8004c3cdcc51",
          requestOptions
        )
          .then((response) => response.text())
          .then((result) => console.log(result))
          .catch((error) => console.error(error))
        setFormStatus("Success...")
        setTimeout(() => {
          window.location.href = "/thank-you"
        }, 2000)
      } catch (error) {
        console.error("Error during form submission:", error)
        setFormStatus("Failed...")
        setIsDisabled(false)
      }
    } else {
      setFormStatus("Failed...")
      setIsDisabled(false)
    }
  }

  return (
    <Form onSubmit={handleSubmit}>
      <div
        className={`${styles.contactFrom} ${popup ? styles.popupstyle : ""} ${
          contact ? styles.contactPage : ""
        }`}
      >
        <div className={styles.inputsFiled}>
          <input
            type="text"
            name="name"
            onChange={handleDataChange}
            placeholder="Full Name"
            required
          />
          {errors.name && <span>{errors.name}</span>}
        </div>
        <div className={styles.inputsFiled}>
          <input
            type="email"
            name="email"
            onChange={handleDataChange}
            placeholder="Email"
            required
          />
          {errors.email && <span>{errors.email}</span>}
        </div>
        <div className={styles.inputsFiled}>
          <input
            type="tel"
            name="phone"
            onChange={handleDataChange}
            placeholder="Phone"
            required
          />
          {errors.phone && <span>{errors.phone}</span>}
        </div>
        <div className={styles.inputsFiled}>
          <textarea
            name="message"
            onChange={handleDataChange}
            placeholder="Description"
          ></textarea>
        </div>
        <div className={styles.inputsButton}>
          <button type="submit" disabled={isDisabled}>
            {formStatus} <ArrowBtn />
          </button>
        </div>
      </div>
    </Form>
  )
}

export default ContactFrom
