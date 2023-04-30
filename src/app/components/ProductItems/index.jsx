import React from 'react'
import styles from './index.module.scss';

const index = () => {
  return (
    <div className={styles.productContainer}>
    <div className={styles.product}>
      <div className={styles.textContainer}>
        <h3>AR Glasses</h3>
        <p>SERIES 1</p>
     
      <h2>Dive into the Future!</h2></div>
      <div className={styles.videoContainer}>
                    <video loop muted playsInline autoPlay>
                        <source src="media/glassVideo.mp4" />
                    </video>
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