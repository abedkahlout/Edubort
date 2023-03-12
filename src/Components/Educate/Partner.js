import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay } from "swiper";
import { Container } from "@mui/material";

export default function Partner() {
  return (
    <Container className="partner">
      <Swiper
        spaceBetween={30}
        slidesPerView={6}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          420: {
            width: 100,
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 6,
          },
        }}
     
        modules={[Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide><img src="/assets/android.svg" /></SwiperSlide>
        <SwiperSlide><img src="/assets/coca-cola.svg" /></SwiperSlide>
        <SwiperSlide><img src="/assets/envato.svg" /></SwiperSlide>
        <SwiperSlide><img src="/assets/google.svg" /></SwiperSlide>
        <SwiperSlide><img src="/assets/linkedin.svg" /></SwiperSlide>
        <SwiperSlide><img src="/assets/netflix.svg" /></SwiperSlide>
        <SwiperSlide><img src="/assets/microsoft.svg" /></SwiperSlide>
      </Swiper>
    </Container>
  );
}
