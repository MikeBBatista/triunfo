import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './Carousel.module.css';
import arrow_left from '../assets/arrow_left.png';
import arrow_right from '../assets/arrow_right.png';
import sina_1 from '../assets/carrousel/sina_1.png'
import sina_2 from '../assets/carrousel/sina_2.png'
import sina_3 from '../assets/carrousel/sina_3.png'
import sina_4 from '../assets/carrousel/sina_4.png'



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
    return [sina_1, sina_2, sina_3, sina_4].map((image, index) => (
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