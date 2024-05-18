import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';
import "./Section4.scss"
const Section4 = () => {
    return (
        <div className='section4'>
            <p style={{ color: 'grey' }}>GUESTS SAYS</p>
            <h1>Our Satisfied Guests says</h1>
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false
                }}
                modules={[Pagination, Autoplay]}
                className="mySwiper swiper__slide"
            >
                <SwiperSlide className='swiper__card'>
                    <img style={{ width: "90px", height: "90px", borderRadius: "50%" }} src="https://preview.colorlib.com/theme/tasty/images/person_1.jpg.webp" alt="" />
                    <div>
                        <i style={{ color: "rgb(255, 208, 0)", fontSize: "14px" }} class="fa-solid fa-star"></i>
                        <i style={{ color: "rgb(255, 208, 0)", fontSize: "14px" }} class="fa-solid fa-star"></i>
                        <i style={{ color: "rgb(255, 208, 0)", fontSize: "14px" }} class="fa-solid fa-star"></i>
                        <i style={{ color: "rgb(255, 208, 0)", fontSize: "14px" }} class="fa-solid fa-star"></i>
                        <i style={{ color: "rgb(255, 208, 0)", fontSize: "14px" }} class="fa-solid fa-star-half-stroke"></i>
                    </div>
                    <div>
                        <p style={{ textAlign: "center", color: "gray" }}>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                    </div>
                    <div style={{ textAlign: 'center' }}>
                        <p>Dennis Green</p>
                        <p style={{ color: 'lightgrey' }}>Guests from Italy</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='swiper__card'>
                    <img style={{ width: "90px", height: "90px", borderRadius: "50%" }} src="https://preview.colorlib.com/theme/tasty/images/person_2.jpg.webp" alt="" />
                    <div>
                        <i style={{ color: "rgb(255, 208, 0)", fontSize: "14px" }} class="fa-solid fa-star"></i>
                        <i style={{ color: "rgb(255, 208, 0)", fontSize: "14px" }} class="fa-solid fa-star"></i>
                        <i style={{ color: "rgb(255, 208, 0)", fontSize: "14px" }} class="fa-solid fa-star"></i>
                        <i style={{ color: "rgb(255, 208, 0)", fontSize: "14px" }} class="fa-solid fa-star"></i>
                        <i style={{ color: "rgb(255, 208, 0)", fontSize: "14px" }} class="fa-solid fa-star-half-stroke"></i>
                    </div>
                    <div>
                        <p style={{ textAlign: "center", color: "gray" }}>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                    </div>
                    <div style={{ textAlign: 'center' }}>
                        <p>Dennis Green</p>
                        <p style={{ color: 'lightgrey' }}>Guests from Italy</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='swiper__card'>
                    <img style={{ width: "90px", height: "90px", borderRadius: "50%" }} src="https://preview.colorlib.com/theme/tasty/images/person_3.jpg.webp" alt="" />
                    <div>
                        <i style={{ color: "rgb(255, 208, 0)", fontSize: "14px" }} class="fa-solid fa-star"></i>
                        <i style={{ color: "rgb(255, 208, 0)", fontSize: "14px" }} class="fa-solid fa-star"></i>
                        <i style={{ color: "rgb(255, 208, 0)", fontSize: "14px" }} class="fa-solid fa-star"></i>
                        <i style={{ color: "rgb(255, 208, 0)", fontSize: "14px" }} class="fa-solid fa-star"></i>
                        <i style={{ color: "rgb(255, 208, 0)", fontSize: "14px" }} class="fa-solid fa-star-half-stroke"></i>
                    </div>
                    <div>
                        <p style={{ textAlign: "center", color: "gray" }}>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                    </div>
                    <div style={{ textAlign: 'center' }}>
                        <p>Dennis Green</p>
                        <p style={{ color: 'lightgrey' }}>Guests from Italy</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='swiper__card'>
                    <img style={{ width: "90px", height: "90px", borderRadius: "50%" }} src="https://preview.colorlib.com/theme/tasty/images/person_4.jpg.webp" alt="" />
                    <div>
                        <i style={{ color: "rgb(255, 208, 0)", fontSize: "14px" }} class="fa-solid fa-star"></i>
                        <i style={{ color: "rgb(255, 208, 0)", fontSize: "14px" }} class="fa-solid fa-star"></i>
                        <i style={{ color: "rgb(255, 208, 0)", fontSize: "14px" }} class="fa-solid fa-star"></i>
                        <i style={{ color: "rgb(255, 208, 0)", fontSize: "14px" }} class="fa-solid fa-star"></i>
                        <i style={{ color: "rgb(255, 208, 0)", fontSize: "14px" }} class="fa-solid fa-star-half-stroke"></i>
                    </div>
                    <div>
                        <p style={{ textAlign: "center", color: "gray" }}>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                    </div>
                    <div style={{ textAlign: 'center' }}>
                        <p>Dennis Green</p>
                        <p style={{ color: 'lightgrey' }}>Guests from Italy</p>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default Section4