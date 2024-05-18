import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';
import "./Section5.scss"
const Section5 = () => {
  return (
    <div className='section5'>
      <div className='section5__header'>
        <p style={{color:"gray"}}>BLOG</p>
        <h1>Recent Blog</h1>
      </div>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay:2500,
          disableOnInteraction:false
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper swiper__slide2"
      >
        <SwiperSlide className='swiper__card2'>
          <img style={{ width: "350px", height: "230px" }} src="https://preview.colorlib.com/theme/tasty/images/image_5.jpg.webp" alt="" />
          <div className='swiper__card2__text'>
            <p style={{ color: "lightgray" }}>July 7, 2018 Admin</p>
            <p>Even the all-powerful Pointing has no control about the blind texts</p>
            <p style={{ color: "grey" }}>Read more</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className='swiper__card2'>
          <img style={{ width: "350px", height: "230px" }} src="https://preview.colorlib.com/theme/tasty/images/image_6.jpg.webp" alt="" />
          <div className='swiper__card2__text'>
            <p style={{ color: "lightgray" }}>July 7, 2018 Admin</p>
            <p>Even the all-powerful Pointing has no control about the blind texts</p>
            <p style={{ color: "grey" }}>Read more</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className='swiper__card2'>
          <img style={{ width: "350px", height: "230px" }} src="https://preview.colorlib.com/theme/tasty/images/image_7.jpg.webp" alt="" />
          <div className='swiper__card2__text'>
            <p style={{ color: "lightgray" }}>July 7, 2018 Admin</p>
            <p>Even the all-powerful Pointing has no control about the blind texts</p>
            <p style={{ color: "grey" }}>Read more</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className='swiper__card2'>
          <img style={{ width: "350px", height: "230px" }} src="https://preview.colorlib.com/theme/tasty/images/image_8.jpg.webp" alt="" />
          <div className='swiper__card2__text'>
            <p style={{ color: "lightgray" }}>July 7, 2018 Admin</p>
            <p>Even the all-powerful Pointing has no control about the blind texts</p>
            <p style={{ color: "grey" }}>Read more</p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Section5