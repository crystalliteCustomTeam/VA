"use client"
import React, { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'

import styles from "@/styles/home/components/contactfrom.module.scss"
import { ArrowBtn } from "@/src/app/app-constants"
import { Form } from "react-bootstrap"

const ContactFrom = ({ contact, popup }) => {

    const [ip, setIP] = useState('');
    const [pagenewurl, setPagenewurl] = useState('');
    const [isDisabled, setIsDisabled] = useState(false);
    const [formStatus, setFormStatus] = useState('Let’s Discuss');
    const [error, setError] = useState('');

    // Load IP address from the API
    const getIPData = async () => {
        try {
            const response = await fetch('https://ipinfo.io/?token=229b1c3fa2e54c');
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const data = await response.json();
            setIP(data);
        } catch (error) {
            console.error('Error fetching IP data:', error);
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
        setError('');
        setFormStatus("Processing...");
        setIsDisabled(true);

        // Validate fields
        const name = e.target.name.value.trim();
        const email = e.target.email.value.trim();
        const phone = e.target.phone.value.trim();
        const message = e.target.comment.value.trim();

        if (!name || !email || !phone) {
            setError('Please fill in all required fields.');
            setFormStatus("Let’s Discuss");
            setIsDisabled(false);
            return;
        }

        const currentdate = new Date().toLocaleString();
        const data = {
            page_url: pagenewurl,
            user_ip: ip.ip || '', // Extract only the IP string
            lead_data: {
                name,
                email,
                phone,
                message
            }
        };

        const JSONdata = JSON.stringify(data);

        try {
            // Prepare and send the fetch request as you have done
            let headersList = {
                "Accept": "*/*",
                "User-Agent": "Thunder Client (https://www.thunderclient.com)",
                "Authorization": "Bearer ke2br2ubssi4l8mxswjjxohtd37nzexy042l2eer",
                "Content-Type": "application/json"
            };
            let bodyContent = JSON.stringify({
                "IP": `${ip.ip} - ${ip.city || ''} - ${ip.country || ''}`, // Only include necessary IP details
                "Brand": "Video Animation",
                "Page": currentRoute,
                "Date": currentdate,
                "Time": currentdate,
                "JSON": JSONdata,
            });

            await fetch("https://sheetdb.io/api/v1/orh55uv03rvh4", {
                method: "POST",
                body: bodyContent,
                headers: headersList
            });
            window.location.href = '/thank-you';

        } catch (error) {
            console.error('Error during form submission:', error);
            setFormStatus("Failed...");
            setIsDisabled(false);
        }
    };

    return (
        <Form onSubmit={handleSubmit}>
            <div className={`${styles.contactFrom} ${popup ? styles.popupstyle : ''} ${contact ? styles.contactPage : ''}`}>
                <div className={styles.inputsFiled}>
                    <input type="text" name="name" placeholder="Full Name" required />
                </div>
                <div className={styles.inputsFiled}>
                    <input type="email" name="email" placeholder="Email" required />
                </div>
                <div className={styles.inputsFiled}>
                    <input type="tel" name="phone" placeholder="Phone" required />
                </div>
                <div className={styles.inputsFiled}>
                    <textarea name="comment" placeholder="Description"></textarea>
                </div>
                <div className={styles.inputsButton}>
                    <button type="submit" disabled={isDisabled}>{formStatus} <ArrowBtn /></button>
                </div>
            </div>
        </Form>
    )
}

export default ContactFrom