"use client"
import React, { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'

import styles from "@/styles/contact/contactform.module.scss"
import { ArrowBtn } from "@/src/app/app-constants"
import { Form } from "react-bootstrap"

const ContactPageFrom = () => {
    const [checkboxes, setCheckboxes] = useState([]);
    const [ip, setIP] = useState('');
    const [pagenewurl, setPagenewurl] = useState('');
    const [isDisabled, setIsDisabled] = useState(false);
    const [formStatus, setFormStatus] = useState('Submit');
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
        const checkboxes = e.target.animationType;

        // Get selected animations
        const selectedAnimations = Array.from(checkboxes)
            .filter(checkbox => checkbox.checked)
            .map(checkbox => checkbox.value);

        if (!name || !email || !phone) {
            setError('Please fill in all required fields.');
            setFormStatus("Submit");
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
                message,
                checkboxes: selectedAnimations // Use selectedAnimations instead of checkboxes
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

            await fetch("https://sheetdb.io/api/v1/wszr7rrbz3wsj", {
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
            <div className={styles.contactpageFrom}>
                <div className={styles.inputsFiled}>
                    <label htmlFor="name">Full Name </label>
                    <input type="text" name="name" placeholder="Enter your name" required id="name" />

                </div>
                <div className={styles.inputsFiled}>
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" placeholder="Enter your email" required id="email" />
                </div>
                <div className={styles.inputsFiled}>
                    <label htmlFor="phone">Phone Number</label>
                    <input type="tel" name="phone" placeholder="Enter your Phone No" required id="phone" />
                </div>
                <div className={styles.textFiled}>
                    <label htmlFor="msg">Description</label>
                    <textarea name="comment" placeholder="Type your message" id="msg"></textarea>
                </div>
                <div className={styles.checkTitle}>
                    What service you are looking for?
                </div>
                <div className={styles.checkBox}>

                    <div className={styles.checkBoxItem}>
                        <input type="checkbox" id="2dAnimation" name="animationType" value="2D Animation" />
                        <label htmlFor="2dAnimation" className={styles.checkboxlabel}>2D Animation</label>
                    </div>

                    <div className={styles.checkBoxItem}>
                        <input type="checkbox" id="3dAnimation" name="animationType" value="3D Animation" />
                        <label htmlFor="3dAnimation" className={styles.checkboxlabel}>3D Animation</label>
                    </div>

                    <div className={styles.checkBoxItem}>
                        <input type="checkbox" id="hybridAnimation" name="animationType" value="Hybrid Animation" />
                        <label htmlFor="hybridAnimation" className={styles.checkboxlabel}>Hybrid Animation</label>
                    </div>

                    <div className={styles.checkBoxItem}>
                        <input type="checkbox" id="celAnimation" name="animationType" value="Cel Animation" />
                        <label htmlFor="celAnimation" className={styles.checkboxlabel}>Cel Animation</label>
                    </div>

                    <div className={styles.checkBoxItem}>
                        <input type="checkbox" id="motionGraphics" name="animationType" value="Motion Graphics" />
                        <label htmlFor="motionGraphics" className={styles.checkboxlabel}>Motion Graphics</label>
                    </div>

                    <div className={styles.checkBoxItem}>
                        <input type="checkbox" id="whiteboardAnimation" name="animationType" value="Whiteboard Animation" />
                        <label htmlFor="whiteboardAnimation" className={styles.checkboxlabel}>Whiteboard Animation</label>
                    </div>

                    <div className={styles.checkBoxItem}>
                        <input type="checkbox" id="videoEditing" name="animationType" value="Video Editing" />
                        <label htmlFor="videoEditing" className={styles.checkboxlabel}>Video Editing</label>
                    </div>

                    <div className={styles.checkBoxItem}>
                        <input type="checkbox" id="cgiVFX" name="animationType" value="CGI-VFX" />
                        <label htmlFor="cgiVFX" className={styles.checkboxlabel}>CGI-VFX</label>
                    </div>

                    <div className={styles.checkBoxItem}>
                        <input type="checkbox" id="logoAnimation" name="animationType" value="Logo Animation" />
                        <label htmlFor="logoAnimation" className={styles.checkboxlabel}>Logo Animation</label>
                    </div>

                    <div className={styles.checkBoxItem}>
                        <input type="checkbox" id="infographics" name="animationType" value="Infographics" />
                        <label htmlFor="infographics" className={styles.checkboxlabel}>Infographics</label>
                    </div>

                    <div className={styles.checkBoxItem}>
                        <input type="checkbox" id="architecturalVisualization" name="animationType" value="Architectural Visualization" />
                        <label htmlFor="architecturalVisualization" className={styles.checkboxlabel}>Architectural Visualization</label>
                    </div>
                </div>

                <div className={styles.inputsButton}>
                    <button type="submit" disabled={isDisabled}>{formStatus} <ArrowBtn /></button>
                </div>
            </div>
        </Form >
    );
};

export default ContactPageFrom;
