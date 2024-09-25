import React, { useState } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import styles from './Carousel.module.css'
import arrow_left from '../assets/arrow_left.png'
import arrow_right from '../assets/arrow_right.png'
import imagem_1 from '../assets/carrousel/imagem_1.png'
import imagem_2 from '../assets/carrousel/imagem_2.png'
import imagem_3 from '../assets/carrousel/imagem_3.png'
import imagem_4 from '../assets/carrousel/imagem_4.png'
import imagem_5 from '../assets/carrousel/imagem_5.png'
import imagem_6 from '../assets/carrousel/imagem_6.png'
import imagem_7 from '../assets/carrousel/imagem_7.png'
import imagem_8 from '../assets/carrousel/imagem_8.png'

const customArrowClass = 'custom-arrow';

const CustomArrow = ({ onClick, direction }) => {
    const arrowImage = direction === 'prev' ? arrow_left : arrow_right;
    return (
        <img
            className={`${styles[customArrowClass]} ${styles[`${customArrowClass}-${direction}`]}`}
            src={arrowImage}
            alt={`${direction} arrow`}
            onClick={onClick}
        />
    );
};

const Carousel = () => {
    const [focusedSlide, setFocusedSlide] = useState(0);

    const handleAfterChange = (currentSlide) => {
        setFocusedSlide(currentSlide);
    };

    const renderSlides = () => {
        return [imagem_1, imagem_2, imagem_3, imagem_4, imagem_5, imagem_6, imagem_7, imagem_8].map((image, index) => (
            <div key={index}>
                <h3>
                    <img
                        src={image}
                        className={`${styles.carouselImg} ${focusedSlide === index ? styles.hoverable : ''}`}
                    />
                </h3>
            </div>
        ));
    };

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        centerMode: true,
        centerPadding: '20%',
        slidesToScroll: 1,
        afterChange: handleAfterChange,
        prevArrow: <CustomArrow direction="prev" />,
        nextArrow: <CustomArrow direction="next" />,
    };

    return (
        <div className={styles.carouselDiv}>
            <Slider {...settings}>{renderSlides()}</Slider>
        </div>
    );
};

export default Carousel;