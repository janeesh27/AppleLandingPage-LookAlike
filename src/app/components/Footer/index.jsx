import styles from './index.module.scss';

const index = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footerlinks}>
       <p> Copyright © 2023 Apple Inc. All rights reserved.</p>
        <a href="#">Privacy Policy</a> | 
        <a href="#">Terms of Use</a> | 
        <a href="#">Sales and Refunds</a> | 
        <a href="#">Legal Site Map</a>
      </div>
  </div>
  )
}

export default index