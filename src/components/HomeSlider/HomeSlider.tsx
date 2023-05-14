import React, { useRef } from 'react';

import Slider, { CustomArrowProps } from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './HomeSlider.scss';

import LeftIcon from './icons/left-icon.svg';
import RightIcon from './icons/right-icon.svg';

export const HomeSlider = () => {
  const settings = {
    dots: true,
    dotsClass: 'custom-dots',
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };

  function CustomPrevArrow(props: CustomArrowProps) {
    const { onClick } = props;
    const arrowRef = useRef<HTMLDivElement>(null);

    return (
      <div
        className="slick-arrow slick-prev"
        ref={arrowRef}
        onClick={onClick}
      >
        <img src={LeftIcon} alt='Prev' />
      </div>
    );
  }

  function CustomNextArrow(props: CustomArrowProps) {
    const { onClick } = props;
    const arrowRef = useRef<HTMLDivElement>(null);

    return (
      <div
        className="slick-arrow slick-next"
        ref={arrowRef}
        onClick={onClick}
      >
        <img src={RightIcon} alt='Next' />
      </div>
    );
  }

  return (
    <div className='helper__container'>
      <div className='slider_container'>
        <Slider {...settings}>
          <div className='slider_item slider_item--first'></div>

          <div className='slider_item slider_item--second'></div>

          <div className='slider_item slider_item--third'></div>
        </Slider>
      </div>
    </div>
  );
};
