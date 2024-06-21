import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './Carousel.module.css';
import arrow_left from '../assets/arrow_left.png';
import arrow_right from '../assets/arrow_right.png';
import board1 from '../assets/Board01_01.jpg';
import board2 from '../assets/Board01_02.png';
import board3 from '../assets/Board01_03.png';
import board4 from '../assets/Board01_04.png';
import chest1 from '../assets/Chest01_01.jpg';
import chest2 from '../assets/Chest01_02.png';
import chest3 from '../assets/Chest01_03.png';
import chest4 from '../assets/Chest01_04.png';
import chest01 from '../assets/Chest02_01.jpg';
import chest02 from '../assets/Chest02_02.png';
import chest03 from '../assets/Chest02_03.png';
import niv01 from '../assets/niv01.png';
import niv02 from '../assets/niv02.png';
import rig01 from '../assets/rig_01.png';
import rig02 from '../assets/rig_02.png';
import rig03 from '../assets/rig_03.png';
import woodTable01 from '../assets/WoodTable_01.jpg'
import woodTable02 from '../assets/WoodTable_02.png'
import woodTable03 from '../assets/WoodTable_03.png'
import woodTable04 from '../assets/WoodTable_04.png'



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
    return [board1, board2, board3, board4, 
      chest1, chest2, chest3, chest4, chest01, 
      chest02, chest03, niv01, niv02, rig01, 
      rig02, rig03, woodTable01, woodTable02, woodTable03, woodTable04].map((image, index) => (
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