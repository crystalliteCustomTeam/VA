import Award01 from "media/home/awards/1.webp"
import Award02 from "media/home/awards/2.webp"
import Award03 from "media/home/awards/3.webp"
import Award04 from "media/home/awards/4.webp"
import Award05 from "media/home/awards/5.webp"
import Award06 from "media/home/awards/6.webp"
import Award07 from "media/home/awards/7.webp"
import Award08 from "media/home/awards/8.webp"
import Award09 from "media/home/awards/9.webp"
import Award10 from "media/home/awards/10.webp"
import Award11 from "media/home/awards/11.webp"
import Award12 from "media/home/awards/12.webp"
import Award13 from "media/home/awards/13.webp"
import Award14 from "media/home/awards/14.webp"
import Award15 from "media/home/awards/15.webp"
import Award16 from "media/home/awards/16.webp"
import styles from "@/styles/home/components/awards.module.scss";
import Image from "next/image"
import { Carousel, CarouselItem } from 'react-bootstrap';



const ByAwards = () => {
    return (

        <Carousel interval={1500} fade={true} controls={false} indicators={false}>
            <CarouselItem>
                <div className={styles.byAwardBox}>
                    <div className={styles.byAwardItem}>
                        <Image src={Award01.src} width={192} height={100} alt="Award logo" />
                    </div>
                    <div className={styles.byAwardItem}>
                        <Image src={Award02.src} width={192} height={100} alt="Award logo" />
                    </div>
                    <div className={styles.byAwardItem}>
                        <Image src={Award03.src} width={192} height={100} alt="Award logo" />
                    </div>
                    <div className={styles.byAwardItem}>
                        <Image src={Award04.src} width={192} height={100} alt="Award logo" />
                    </div>
                    <div className={styles.byAwardItem}>
                        <Image src={Award05.src} width={192} height={100} alt="Award logo" />
                    </div>
                    <div className={styles.byAwardItem}>
                        <Image src={Award06.src} width={192} height={100} alt="Award logo" />
                    </div>
                </div>
            </CarouselItem>
            <CarouselItem>
                <div className={styles.byAwardBox}>
                    <div className={styles.byAwardItem}>
                        <Image src={Award07.src} width={192} height={100} alt="Award logo" />
                    </div>
                    <div className={styles.byAwardItem}>
                        <Image src={Award08.src} width={192} height={100} alt="Award logo" />
                    </div>
                    <div className={styles.byAwardItem}>
                        <Image src={Award09.src} width={192} height={100} alt="Award logo" />
                    </div>
                    <div className={styles.byAwardItem}>
                        <Image src={Award10.src} width={192} height={100} alt="Award logo" />
                    </div>
                    <div className={styles.byAwardItem}>
                        <Image src={Award11.src} width={192} height={100} alt="Award logo" />
                    </div>
                    <div className={styles.byAwardItem}>
                        <Image src={Award12.src} width={192} height={100} alt="Award logo" />
                    </div>
                </div>
            </CarouselItem>
            <CarouselItem>
                <div className={styles.byAwardBox}>
                    <div className={styles.byAwardItem}>
                        <Image src={Award13.src} width={192} height={100} alt="Award logo" />
                    </div>
                    <div className={styles.byAwardItem}>
                        <Image src={Award14.src} width={192} height={100} alt="Award logo" />
                    </div>
                    <div className={styles.byAwardItem}>
                        <Image src={Award15.src} width={192} height={100} alt="Award logo" />
                    </div>
                    <div className={styles.byAwardItem}>
                        <Image src={Award16.src} width={192} height={100} alt="Award logo" />
                    </div>
                    <div className={styles.byAwardItem}>
                        <Image src={Award01.src} width={192} height={100} alt="Award logo" />
                    </div>
                    <div className={styles.byAwardItem}>
                        <Image src={Award02.src} width={192} height={100} alt="Award logo" />
                    </div>
                </div>
            </CarouselItem>

        </Carousel>
    )
}

export default ByAwards