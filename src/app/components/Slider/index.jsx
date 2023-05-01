'use client';

import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination, Navigation } from 'swiper';

import styles from './index.module.scss';

const Slider = () => {
    const [isDesktop, setIsDesktop] = React.useState(false);

    React.useEffect(() => {
        handleResize();

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const handleResize = () => {
        if (window.innerWidth > 786) {
            setIsDesktop(true);
        }
    };

    return (
        <section className={styles.container}>
            <Swiper
                loop
                modules={[Navigation, Pagination]}
                navigation={{
                    prevEl: '.prev-btn',
                    nextEl: '.next-btn',
                }}>
                {[1, 2, 3, 4, 5, 6].map(i => (
                    <SwiperSlide className={styles.swiperSlide}>
                        <img className={styles.logo} src="media/tv.png" alt="" />
                        <div className={styles.imgContainer}>
                            {isDesktop ? (
                                <img src={`media/appletv${i}.jpg`} alt="" />
                            ) : (
                                <img src={`media/mobile${i}.jpg`} alt="" />
                            )}
                        </div>

                        <button>Stream now</button>
                    </SwiperSlide>
                ))}
            </Swiper>
            <button className={`next-btn ${styles.nextBtn}`}>
                <img src="/media/right.svg" alt="" />
            </button>
            <button className={`prev-btn ${styles.prevBtn}`}>
                <img src="/media/left.svg" alt="" />
            </button>
        </section>
    );
};

export default Slider;
