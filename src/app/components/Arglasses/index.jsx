import styles from './index.module.scss';

const ArGlasses = () => {
    return (
        <section className={styles.container}>
            <div className={styles.textContainer}>
                <h3>The AR Pro </h3>
                <p>SERIES X</p>

                <h2>Dive into the Future!</h2>
            </div>
            <div className={styles.videoContainer}>
                <video loop muted playsInline autoPlay>
                    <source src="media/glassVideo.mp4" />
                </video>
            </div>
        </section>
    );
};

export default ArGlasses;
