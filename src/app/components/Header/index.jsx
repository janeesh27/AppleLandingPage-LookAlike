'use client';

import { useState } from 'react';

import styles from './index.module.scss';

const MenuItems = () => {
    return (
        <>
            <li className={styles.menuItem}>
                <a href="#">Mac</a>
            </li>
            <li className={styles.menuItem}>
                <a href="#">iPad</a>
            </li>
            <li className={styles.menuItem}>
                <a href="#">iPhone</a>
            </li>
            <li className={styles.menuItem}>
                <a href="#">Watch</a>
            </li>
            <li className={styles.menuItem}>
                <a href="#">TV</a>
            </li>
            <li className={styles.menuItem}>
                <a href="#">Music</a>
            </li>
            <li className={styles.menuItem}>
                <a href="#">Support</a>
            </li>
        </>
    );
};

const Header = () => {
    const [open, setOpen] = useState(false);

    return (
        <div className={`${styles.header} ${open ? styles.menuOpen : null}`}>
            <div className={styles.navElements}>
                <svg
                    className={styles.logo}
                    height="48"
                    viewBox="0 0 17 48"
                    width="17"
                    xmlns="http://www.w3.org/2000/svg">
                    <path d="m15.5752 19.0792a4.2055 4.2055 0 0 0 -2.01 3.5376 4.0931 4.0931 0 0 0 2.4908 3.7542 9.7779 9.7779 0 0 1 -1.2755 2.6351c-.7941 1.1431-1.6244 2.2862-2.8878 2.2862s-1.5883-.734-3.0443-.734c-1.42 0-1.9252.7581-3.08.7581s-1.9611-1.0589-2.8876-2.3584a11.3987 11.3987 0 0 1 -1.9373-6.1487c0-3.61 2.3464-5.523 4.6566-5.523 1.2274 0 2.25.8062 3.02.8062.734 0 1.8771-.8543 3.2729-.8543a4.3778 4.3778 0 0 1 3.6822 1.841zm-6.8586-2.0456a1.3865 1.3865 0 0 1 -.2527-.024 1.6557 1.6557 0 0 1 -.0361-.337 4.0341 4.0341 0 0 1 1.0228-2.5148 4.1571 4.1571 0 0 1 2.7314-1.4078 1.7815 1.7815 0 0 1 .0361.373 4.1487 4.1487 0 0 1 -.9867 2.587 3.6039 3.6039 0 0 1 -2.5148 1.3236z"></path>
                </svg>

                <ul className={styles.menuDesktop}>
                    <MenuItems />
                </ul>

                <div className={styles.rightNvElements}>
                    <svg
                        className={styles.logo}
                        height="45"
                        viewBox="0 0 17 48"
                        width="17"
                        xmlns="http://www.w3.org/2000/svg">
                        <path d="m13.4575 16.9268h-1.1353a3.8394 3.8394 0 0 0 -7.6444 0h-1.1353a2.6032 2.6032 0 0 0 -2.6 2.6v8.9232a2.6032 2.6032 0 0 0 2.6 2.6h9.915a2.6032 2.6032 0 0 0 2.6-2.6v-8.9231a2.6032 2.6032 0 0 0 -2.6-2.6001zm-4.9575-2.2768a2.658 2.658 0 0 1 2.6221 2.2764h-5.2442a2.658 2.658 0 0 1 2.6221-2.2764zm6.3574 13.8a1.4014 1.4014 0 0 1 -1.4 1.4h-9.9149a1.4014 1.4014 0 0 1 -1.4-1.4v-8.9231a1.4014 1.4014 0 0 1 1.4-1.4h9.915a1.4014 1.4014 0 0 1 1.4 1.4z"></path>
                    </svg>

                    <svg
                        className={styles.logo}
                        height="48"
                        viewBox="0 0 17 48"
                        width="17"
                        xmlns="http://www.w3.org/2000/svg">
                        <path d="m16.2294 29.9556-4.1755-4.0821a6.4711 6.4711 0 1 0 -1.2839 1.2625l4.2005 4.1066a.9.9 0 1 0 1.2588-1.287zm-14.5294-8.0017a5.2455 5.2455 0 1 1 5.2455 5.2527 5.2549 5.2549 0 0 1 -5.2455-5.2527z"></path>
                    </svg>

                    <div
                        className={styles.iconContainer}
                        onClick={() => {
                            setOpen(!open);
                        }}>
                        <div className={styles.menuIcon}>
                            <div className={`${styles.bar} ${styles.bar1}`}></div>
                            <div className={`${styles.bar} ${styles.bar2}`}></div>
                        </div>
                    </div>
                </div>
            </div>

            <ul className={styles.menuMobile}>
                <MenuItems />
            </ul>
        </div>
    );
};

export default Header;
