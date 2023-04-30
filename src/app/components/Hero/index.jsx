import Title from '../Title';

import styles from './index.module.scss';

const Hero = () => {
    return (
        <>
            <main className={styles.main}>
                <Title heading="iPhone 14 Pro" subHeading="Pro. Beyond" />

                <div className={styles.linkContainer}>
                    <a href="#">Learn more </a>
                </div>

                <div className={styles.videoContainer}>
                    <video loop muted playsInline autoPlay>
                        <source src="media/heroVideo.mp4" />
                    </video>
                </div>
            </main>

            <section className={styles.section}>
                <Title heading="iPhone 14" subHeading="Wonderfull." black />

                <div className={styles.linkContainer}>
                    <a href="#">Learn more </a>
                </div>

                <div className={styles.imgContainer}>
                    <img src="/media/iphoneImages.png" alt="" />
                </div>
            </section>
        </>
    );
};

export default Hero;
