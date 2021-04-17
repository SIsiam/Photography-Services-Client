import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'swiper/swiper-bundle.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import carousel1 from '../../../images/carousel-1.png';
import carousel2 from '../../../images/carousel-2.png';
import carousel3 from '../../../images/carousel-3.png';
import carousel4 from '../../../images/carousel-4.png';
import carousel5 from '../../../images/carousel-5.png';
import './LatestWork.css';

const LatestWork = () => {
  // var swiper = new Swiper('.swiper-container', {
  //   pagination: {
  //     el: '.swiper-pagination',
  //   },
  // });
  return (
    <div className="carousel-bakground">
      <h2 className="mb-5 text-center text-success">OUR LATEST WORK </h2>
      <div className=" container container-fluid mt-5 p-5 carousel">
        <Swiper
          spaceBetween={30}
          slidesPerView={3}
          onSlideChange={() =>
            console.log('slide change')
          }
        >
          <SwiperSlide><img className="img-fluid" src={carousel1} style={{ width: '20vw', height: '35vh' }} alt="" /></SwiperSlide>
          <SwiperSlide><img className="img-fluid" src={carousel2} style={{ width: '20vw', height: '35vh' }} alt="" /></SwiperSlide>
          <SwiperSlide><img className="img-fluid" src={carousel3} style={{ width: '20vw', height: '35vh' }} alt="" /></SwiperSlide>
          <SwiperSlide><img className="img-fluid" src={carousel4} style={{ width: '20vw', height: '35vh' }} alt="" /></SwiperSlide>
          <SwiperSlide><img className="img-fluid" src={carousel5} style={{ width: '20vw', height: '35vh' }} alt="" /></SwiperSlide>
        </Swiper>

      </div>
    </div>
  );
};

export default LatestWork;