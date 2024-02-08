import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation, Pagination, A11y } from 'swiper/modules';

import './Header.scss';
import 'swiper/css/pagination';

export const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <Swiper
          className="swiper"
          slidesPerView={1}
          navigation={{
            prevEl: '.swiper-button-prev',
            nextEl: '.swiper-button-next',
          }}
          loop
          pagination
          modules={[Navigation, Pagination, A11y]}
        >
          <SwiperSlide>
            <img
              src="./_new/img/banner-phones.png"
              alt="phones"
              className="swiper-img"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="./_new/img/banner-accessories.png"
              alt="accessories"
              className="swiper-img"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="./_new/img/banner-tablets.png"
              alt="tablets"
              className="swiper-img"
            />
          </SwiperSlide>

          <img
            src="./icon/Left.svg"
            alt="prev"
            className="swiper-button swiper-button-prev"
          />

          <img
            src="./icon/Right.svg"
            alt="next"
            className="swiper-button swiper-button-next"
          />
        </Swiper>
      </div>
    </header>
  );
};