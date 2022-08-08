import React, { Component } from 'react'
import { Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/swiper.min.css'
import '../css/main.css'
export default class MySwiper extends Component {
  render() {
    return (
      <div>
      <Swiper
      slidesPerView={1}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      loop={true}
    >
      <SwiperSlide>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
    </Swiper>
    </div>
    )
  }
}
