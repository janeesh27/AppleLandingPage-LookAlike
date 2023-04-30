import styles from './index.module.scss';

const Title = ({ heading, subHeading, black }) => {
    return (
        <div className={`${styles.headingContainer} ${black && styles.black}`}>
            <h1>{heading}</h1>
            <h2>{subHeading}</h2>
        </div>
    );
};

export default Title;
