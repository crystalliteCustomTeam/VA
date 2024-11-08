import styles from "@/styles/home/components/bynumber.module.scss"

const ByNumber = () => {
    return (
        <div className={styles.byNumberBox}>
            <div className={styles.byNumberItem}>
                <div className={styles.byNumberPoints}>2,000<span>+</span></div>
                <h6>Projects <br />Completed</h6>
            </div>
            <div className={styles.byNumberItem}>
                <div className={styles.byNumberPoints}>500M<span>+</span></div>
                <h6>Views on Our <br />Clients Videos</h6>
            </div>
            <div className={styles.byNumberItem}>
                <div className={styles.byNumberPoints}>$11M<span>+</span></div>
                <h6>Revenue Generated<br />for Clients</h6>
            </div>
            <div className={styles.byNumberItem}>
                <div className={styles.byNumberPoints}>22<span>+</span></div>
                <h6>International <br />Awards</h6>
            </div>
        </div>
    )
}

export default ByNumber