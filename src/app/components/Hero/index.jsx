import styles from './index.module.scss';

const Hero = () => {
    return (
        <main className={styles.main}>
            <div className={styles.headingContainer}>
                <h1>iPhone 14 Pro</h1>
                <h2>Pro. Beyond</h2>
            </div>

            <div className={styles.linkContainer}>
                <a href="#">Learn more </a>
            </div>

            <div className={styles.videoContainer}>
                <video loop muted playsInline autoPlay>
                    <source src="media/heroVideo.mp4" />
                </video>
            </div>
        </main>
    );
};

export default Hero;
