import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';
import "./Section1.scss"
import { Link } from 'react-router-dom';
const Section1 = () => {
    return (
        <div>
            <Swiper
                spaceBetween={30}
                effect={'fade'}
                navigation={true}
                pagination={{
                    clickable: true,
                }}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false
                }}
                modules={[EffectFade, Navigation, Pagination, Autoplay]}
                className="mySwiper"
            >
                <SwiperSlide className='slide1'>
                    <div className='slide1__header'>
                        <div className='slide1__header__logo'>
                            <h3>Tasty</h3>
                        </div>
                        <div className='slide1__header__list'>
                            <ul className='slide1__header__list__ul'>
                                <Link style={{ textDecoration: "none", color: "white" }} to="/"><li className='slide1__header__list__ul__li'>Home</li></Link>
                                <li className='slide1__header__list__ul__li'>Menu</li>
                                <li className='slide1__header__list__ul__li'>Specialties</li>
                                <li className='slide1__header__list__ul__li'>Reservation</li>
                                <li className='slide1__header__list__ul__li'>Blog</li>
                                <Link style={{ textDecoration: "none", color: "white" }} to="/add"><li className='slide1__header__list__ul__li'>Add</li></Link>
                                <Link style={{ textDecoration: "none", color: "white" }} to="/wishlist"><li className='slide1__header__list__ul__li'>Wishlist</li></Link>
                            </ul>
                        </div>
                        <div className='slide1__header__menu'>
                            <i class="fa-solid fa-bars"></i>
                        </div>
                    </div>
                    <div className='slide1__text'>
                        <h1 style={{ fontSize: "72px", textAlign: "center" }}>Book a table for yourself at a <br /> time convenient for you</h1>
                        <button className='slide1__text__button'>Book a table</button>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='slide2'>
                    <div className='slide1__header'>
                        <div className='slide1__header__logo'>
                            <h3>Tasty</h3>
                        </div>
                        <div className='slide1__header__list'>
                            <ul className='slide1__header__list__ul'>
                                <Link style={{ textDecoration: "none", color: "white" }} to="/"><li className='slide1__header__list__ul__li'>Home</li></Link>
                                <li className='slide1__header__list__ul__li'>Menu</li>
                                <li className='slide1__header__list__ul__li'>Specialties</li>
                                <li className='slide1__header__list__ul__li'>Reservation</li>
                                <li className='slide1__header__list__ul__li'>Blog</li>
                                <Link style={{ textDecoration: "none", color: "white" }} to="/add"><li className='slide1__header__list__ul__li'>Add</li></Link>
                                <Link style={{ textDecoration: "none", color: "white" }} to="/wishlist"><li className='slide1__header__list__ul__li'>Wishlist</li></Link>
                            </ul>
                        </div>
                    </div>
                    <div className='slide1__text'>
                        <h1 style={{ fontSize: "72px", textAlign: "center" }}>Tasty & Delicios Food</h1>
                        <button className='slide1__text__button'>Book a table</button>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='slide3'>
                    <div className='slide1__header'>
                        <div className='slide1__header__logo'>
                            <h3>Tasty</h3>
                        </div>
                        <div className='slide1__header__list'>
                            <ul className='slide1__header__list__ul'>
                                <Link style={{ textDecoration: "none", color: "white" }} to="/"><li className='slide1__header__list__ul__li'>Home</li></Link>
                                <li className='slide1__header__list__ul__li'>Menu</li>
                                <li className='slide1__header__list__ul__li'>Specialties</li>
                                <li className='slide1__header__list__ul__li'>Reservation</li>
                                <li className='slide1__header__list__ul__li'>Blog</li>
                                <Link style={{ textDecoration: "none", color: "white" }} to="/add"><li className='slide1__header__list__ul__li'>Add</li></Link>
                                <Link style={{ textDecoration: "none", color: "white" }} to="/wishlist"><li className='slide1__header__list__ul__li'>Wishlist</li></Link>
                            </ul>
                        </div>
                    </div>
                    <div className='slide1__text'>
                        <h1 style={{ fontSize: "72px", textAlign: "center" }}>Book a table for yourself at a <br /> time convenient for you</h1>
                        <button className='slide1__text__button'>Book a table</button>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default Section1