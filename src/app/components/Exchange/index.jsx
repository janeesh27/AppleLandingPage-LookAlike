import styles from './index.module.scss';
import Title from '../Title';
const index = () => {
  return (
    <div>
    <section className={styles.section}>
    
    <Title  heading="Trade In" subHeading="Upgrade and save.It&apos;s that easy." black />

    <div className={styles.container}>
        <a href="#">See what your device is worth</a>
    </div>

    <div className={styles.imgContainer}>
        <img src="/media/trade.jpg" alt="trade" />
    </div>
</section></div>
  )
}

export default index