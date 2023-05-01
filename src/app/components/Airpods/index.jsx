import styles from './index.module.scss';

const Airpods = () => {
    return (
        <section className={styles.container}>
            <div className={styles.headingContainer}>
                <h2>Airpods</h2>
                <h1>Wireless. Effortless. Magical</h1>

                <div className={styles.linkContainer}>
                    <a href="#">Watch the film </a>
                    <div className={styles.playIcon}>
                        <img src="/media/play.svg" alt="airpods" />
                    </div>
                </div>
            </div>

            <div className={styles.imgContainer}>
                <img src="/media/airpodsImg.jpg" alt="" />
            </div>
        </section>
    );
};

export default Airpods;
