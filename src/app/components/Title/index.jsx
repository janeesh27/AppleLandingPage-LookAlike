import styles from './index.module.scss';

const Title = ({ heading, subHeading }) => {
    return (
        <div className={styles.headingContainer}>
            <h1>{heading}</h1>
            <h2>{subHeading}</h2>
        </div>
    );
};

export default Title;
