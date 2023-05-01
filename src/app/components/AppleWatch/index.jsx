import styles from './index.module.scss';

const AppleWatch = () => {
    return (
        <div className={styles.mainContainer}>
            <div className={styles.textContainer}>
                <h3>WATCH</h3>
                <p>SERIES 8</p>
            </div>
            <h1>A healthy leap ahead.</h1>
            <div className={styles.imgContainer}>
                <img src="/media/appleWatch.jpg" alt="applewatch" />
            </div>
        </div>
    );
};

export default AppleWatch;
