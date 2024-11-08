import styles from "@/styles/home/components/clients.module.scss";
import Logo1 from "media/home/clientslogo/logo1.webp";
import Logo2 from "media/home/clientslogo/logo2.webp";
import Logo3 from "media/home/clientslogo/logo3.webp";
import Logo4 from "media/home/clientslogo/logo4.webp";
import Logo5 from "media/home/clientslogo/logo5.webp";
import Logo6 from "media/home/clientslogo/logo6.webp";
import Logo7 from "media/home/clientslogo/logo7.webp";
import Logo8 from "media/home/clientslogo/logo8.webp";
import Logo9 from "media/home/clientslogo/logo9.webp";
import Logo10 from "media/home/clientslogo/logo10.webp";
import Logo11 from "media/home/clientslogo/logo11.webp";
import Logo12 from "media/home/clientslogo/logo12.webp";
import Logo13 from "media/home/clientslogo/logo13.webp";
import Logo14 from "media/home/clientslogo/logo14.webp";
import Logo15 from "media/home/clientslogo/logo15.webp";
import Logo16 from "media/home/clientslogo/logo16.webp";
import Logo17 from "media/home/clientslogo/logo17.webp";
import Logo18 from "media/home/clientslogo/logo18.webp";


import { Carousel, CarouselItem } from 'react-bootstrap';
import Image from "next/image";

const ByClients = () => {
    return (
        <Carousel interval={1500} fade={true} controls={false} indicators={false}>
            <CarouselItem>
                <div className={styles.byClientsBox}>
                    <div className={styles.byClientsItem}>
                        <Image src={Logo1.src} alt={`Client Logo`} width={192} height={100} />
                    </div>
                    <div className={styles.byClientsItem}>
                        <Image src={Logo2.src} alt={`Client Logo`} width={192} height={100} />
                    </div>
                    <div className={styles.byClientsItem}>
                        <Image src={Logo3.src} alt={`Client Logo`} width={192} height={100} />
                    </div>
                    <div className={styles.byClientsItem}>
                        <Image src={Logo4.src} alt={`Client Logo`} width={192} height={100} />
                    </div>
                    <div className={styles.byClientsItem}>
                        <Image src={Logo5.src} alt={`Client Logo`} width={192} height={100} />
                    </div>
                    <div className={styles.byClientsItem}>
                        <Image src={Logo6.src} alt={`Client Logo`} width={192} height={100} />
                    </div>
                </div>
            </CarouselItem>
            <CarouselItem>
                <div className={styles.byClientsBox}>
                    <div className={styles.byClientsItem}>
                        <Image src={Logo7.src} alt={`Client Logo`} width={192} height={100} />
                    </div>
                    <div className={styles.byClientsItem}>
                        <Image src={Logo8.src} alt={`Client Logo`} width={192} height={100} />
                    </div>
                    <div className={styles.byClientsItem}>
                        <Image src={Logo9.src} alt={`Client Logo`} width={192} height={100} />
                    </div>
                    <div className={styles.byClientsItem}>
                        <Image src={Logo10.src} alt={`Client Logo`} width={192} height={100} />
                    </div>
                    <div className={styles.byClientsItem}>
                        <Image src={Logo11.src} alt={`Client Logo`} width={192} height={100} />
                    </div>
                    <div className={styles.byClientsItem}>
                        <Image src={Logo12.src} alt={`Client Logo`} width={192} height={100} />
                    </div>
                </div>
            </CarouselItem>
            <CarouselItem>
                <div className={styles.byClientsBox}>
                    <div className={styles.byClientsItem}>
                        <Image src={Logo13.src} alt={`Client Logo`} width={192} height={100} />
                    </div>
                    <div className={styles.byClientsItem}>
                        <Image src={Logo14.src} alt={`Client Logo`} width={192} height={100} />
                    </div>
                    <div className={styles.byClientsItem}>
                        <Image src={Logo15.src} alt={`Client Logo`} width={192} height={100} />
                    </div>
                    <div className={styles.byClientsItem}>
                        <Image src={Logo16.src} alt={`Client Logo`} width={192} height={100} />
                    </div>
                    <div className={styles.byClientsItem}>
                        <Image src={Logo17.src} alt={`Client Logo`} width={192} height={100} />
                    </div>
                    <div className={styles.byClientsItem}>
                        <Image src={Logo18.src} alt={`Client Logo`} width={192} height={100} />
                    </div>
                </div>
            </CarouselItem>

        </Carousel>

    )
}

export default ByClients