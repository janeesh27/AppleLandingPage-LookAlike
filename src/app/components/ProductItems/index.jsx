import React from 'react'
import styles from './index.module.scss';

const index = () => {
  return (
    <div className={styles.productContainer}>
    <div className={styles.product}>
      <div className={styles.textContainer}>
        <h3>ARGlass</h3>
        <p>SERIES 1</p>
     
      <h2>Dive into the Future!</h2></div>
      <div className={styles.imgContainer}>
        <img src="/media/glass.jpg" alt="iglass" />
      </div>
    </div>
    <div className={styles.product}>
      <div className={styles.textContainer}>
        <h3>Airpods Pro</h3>
        <p>SERIES 8</p>
     
      <h2>Feel the music!</h2> </div>
      <div className={styles.imgContainer}>
        <img src="/media/airpods.jpg" alt="airpods" />
      </div>
    </div>
  </div>
  )
}

export default index