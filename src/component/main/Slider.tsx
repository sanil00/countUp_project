import React from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/effect-fade'
import { Autoplay, EffectFade } from "swiper";

interface ImgProps {
    imgNum : string
}

const SliderContainer = styled.div`

`

const SliderContainer__img = styled.img.attrs<ImgProps>(props => ({
    src:process.env.PUBLIC_URL+`/assets/${props.imgNum}.png`
    }))<ImgProps>`
    width:100%;
    height:100vh;
    object-fit: cover;
`

const Slider = () => {
    return (
    <SliderContainer>
        <Swiper
            modules={[Autoplay, EffectFade]}
            effect="fade"
            autoplay={true}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            >
            <SwiperSlide><SliderContainer__img imgNum='1' /></SwiperSlide>
            <SwiperSlide><SliderContainer__img imgNum='2'/></SwiperSlide>
            <SwiperSlide><SliderContainer__img imgNum='3'/></SwiperSlide>
            <SwiperSlide><SliderContainer__img imgNum='4'/></SwiperSlide>
        </Swiper>
    </SliderContainer>
    )
}

export default Slider

