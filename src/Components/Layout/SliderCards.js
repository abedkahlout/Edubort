import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./styleLayout.css";

// import required modules
import CardTab from "./TabPanel/CardTab";
import { Navigation } from "swiper";
import { Container, Stack, Typography } from "@mui/material";

export default function SliderCard() {
  return (
    <Container >
        <Stack direction='column' justifyContent='center' alignItems='center'>
        <Typography sx={{fontSize:40,fontWeight:"bold"}}>Our Trending Courses</Typography>
        <Typography my={2}>Check out most 🔥 courses in the market</Typography>
        </Stack>
      <Swiper
        slidesPerView={3}
        spaceBetween={40}
        navigation={true}
        modules={[ Navigation]}
        className="mySwiper"
      
        breakpoints={{
            320: {
              slidesPerView: 1,
            },
            640: {
                slidesPerView: 2,
              },
            900: {
              slidesPerView: 3,
            },
          }}
    
    >
        <SwiperSlide><CardTab width="400px" star="4" imgs="/assets/2.webp" title="JavaScript: Full Understanding" /></SwiperSlide>
        <SwiperSlide><CardTab width="400px" star="4" imgs="/assets/4.webp" title="JavaScript: Full Understanding" /></SwiperSlide>
        <SwiperSlide><CardTab width="400px" star="4" imgs="/assets/3.webp" title="JavaScript: Full Understanding" /></SwiperSlide>
        <SwiperSlide><CardTab width="400px" star="4" imgs="/assets/2.webp" title="JavaScript: Full Understanding" /></SwiperSlide>
      
      </Swiper>
    </Container>
  );
}
