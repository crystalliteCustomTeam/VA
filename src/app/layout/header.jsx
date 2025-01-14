"use client"
import Link from "next/link"
import { Container, Row, Col } from "react-bootstrap"
import styles from "@/styles/layout/header.module.scss"
import { ArrowBtn, ClosedIcon, DefaultLogo, NavIcon, VariantLogo } from "@/src/app/app-constants"
import { useState, useEffect } from 'react';
import { usePathname } from "next/navigation";
import { SocailLinks, subMenuItems } from "./data/data"


const Header = () => {
    const pathname = usePathname();
    const [showDefault, setShowDefault] = useState(true);
    const [isActive, setIsActive] = useState(false);
    const [isSubMenuActive, setIsSubMenuActive] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setShowDefault((prev) => !prev);
        }, 2000);

        return () => clearInterval(interval);
    }, []);

    const toggleMenu = () => {
        setIsActive(!isActive);
        setIsSubMenuActive(false);
        if (!isActive) {
            document.body.classList.add('active');
        } else {
            document.body.classList.remove('active');
            setIsSubMenuActive(false);

        }
    };

    const toggleSubMenu = () => {
        setIsSubMenuActive((prev) => !prev);
    };

    const isSubmenuActive = () => {
        const submenuPaths = [
            "/2d-animation",
            "/3d-animation",
            "/whiteboard-animation",
            "/motion-graphics",
            "/video-editing",
            "/logo-animation",
            "/3d-architectural-animation",
            "/cgi-and-vfx-services",
            "/infographics-designs",
            "/hybrid-&-cel-animations",
        ];
        return submenuPaths.includes(pathname);
    }

    return (
        <section className={styles.headerSection}>
            <Container className="h-100">
                <Row className="h-100">
                    <Col xs={6} className="my-auto">
                        <Link href="/" className={styles.mainLogoBox}>
                            <div className={`${styles.mainLogo} ${showDefault ? styles.show : styles.hide}`}>
                                <DefaultLogo />
                            </div>
                            <div className={`${styles.mainLogo} ${showDefault ? styles.hide : styles.show}`}>
                                <VariantLogo />
                            </div>
                        </Link>
                    </Col>
                    <Col xs={6} className="my-auto">
                        <div
                            className={`${styles.menuIcon} ${isActive ? styles.active : ''}`}
                            onClick={toggleMenu}
                        >
                            {isActive ? <ClosedIcon /> : <NavIcon />}
                        </div>
                        <section className={`${styles.mainMain} ${isActive ? styles.active : ''}`}>
                            <Container>
                                <Row>
                                    <Col>
                                        <ul className={styles.mainMainItems}>
                                            <li onClick={toggleMenu} className={pathname === "/" ? styles.active : ""}><Link href="/">Home <ArrowBtn /></Link></li>
                                            <li onClick={toggleMenu} className={pathname === "/portfolio" ? styles.active : ""}><Link href="/portfolio">Portfolio <ArrowBtn /></Link></li>
                                            <li onClick={toggleSubMenu} className={isSubmenuActive() ? styles.active : ""}>
                                                <Link href="#">Services <ArrowBtn /></Link>
                                                <ul className={`${styles.haschildMenu} ${isSubMenuActive ? styles.active : ''}`}>
                                                    {subMenuItems.map((item, index) => (
                                                        <li key={index} onClick={toggleMenu}>
                                                            <Link href={item.path} className={pathname === item.path ? styles.active : ""}>
                                                                {item.label}
                                                            </Link>
                                                        </li>
                                                    ))}
                                                </ul>

                                            </li>
                                            <li onClick={toggleMenu} className={pathname === "/pricing" ? styles.active : ""}><Link href="/pricing">Pricing <ArrowBtn /></Link></li>
                                            <li onClick={toggleMenu} className={pathname === "/about-us" ? styles.active : ""}><Link href="/about-us">About Us <ArrowBtn /></Link></li>
                                            <li onClick={toggleMenu} className={pathname === "/contact-us" ? styles.active : ""}><Link href="/contact-us">Contact Us <ArrowBtn /></Link></li>
                                        </ul>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md={12}>
                                        <div className={styles.headerCopyRight}>
                                            <div className={styles.leftLinks}>
                                                <ul>
                                                    <li><Link href="/terms-and-conditions">Terms of Use</Link></li>
                                                    <li><Link href="/privacy-policy"> Privacy Policy</Link></li>
                                                </ul>
                                            </div>
                                            <div className={styles.rightLinks}>
                                                <ul>
                                                    {SocailLinks.map((item, index) => (
                                                        <li key={index}>
                                                            <Link href={item.url} target="_blank">{item.icon}</Link>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </Container>
                        </section>

                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Header
