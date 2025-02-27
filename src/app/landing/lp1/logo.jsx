"use client";
import useEmblaCarousel from 'embla-carousel-react';
import AutoScroll from 'embla-carousel-auto-scroll';
import Image from 'next/image';
import styles from "@/styles/landing/lp/clients.module.scss"
const LogoSec = ({ data }) => {
    const [emblaRefClients] = useEmblaCarousel(
        { loop: true, dragFree: true, draggable: true },
        [
            AutoScroll({
                delay: 0,
                speed: 2,
                playOnInit: true,
                stopOnMouseEnter: false,
                stopOnInteraction: false,
                restartDelay: 0,
            })
        ]
    );
    return (
        <section className={styles.embla}>
            <div className={styles.embla__viewport} ref={emblaRefClients}>
                <div className={styles.embla__container}>
                    {data.map((item, index) => (
                        <div className={styles.embla__slide} key={index}>
                            <div className={styles.imgBox}>
                                <Image src={item.logo} fill alt={`Image-${index}`} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default LogoSec