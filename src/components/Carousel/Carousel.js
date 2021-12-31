// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// import Swiper core and required modules
import {  Pagination } from 'swiper';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import  slideImg from '../../images/slider-image-1.png';
import styled from 'styled-components';
import Slide from '../Slide/Slide';

const CarouselWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    padding: 30px;
    max-width: 100%;
`
const SwiperContainer = styled.div`
    width: 100%;
    & .swiper-pagination {
        bottom: 0;
        .swiper-pagination-bullet {
        width: 16px;
        height: 16px;
        border-radius: 50%;
        background: #828282;
        opacity: 0.12;
        &.swiper-pagination-bullet-active {
            opacity: 1;
        }
        }
    }
`

const slides = [ 
    {
        imgSrc: slideImg,
        title: 'Lorem ipsum dolor ait'
    },
    {
        imgSrc: slideImg,
        title: 'Lorem ipsum dolor ait'
    },
    {
        imgSrc: slideImg,
        title: 'Lorem ipsum dolor ait'
    },
]

const Carousel = props => {

    return (
        <CarouselWrapper>
            <SwiperContainer>
                <Swiper
                    modules={[ Pagination]}
                    pagination={{ clickable: true }}
                    spaceBetween={0}
                    slidesPerView={1}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                >
                    {
                        slides.map( (slide, index) => (
                            <SwiperSlide key={index}>
                                <Slide imgSrc={slide.imgSrc} title={slide.title} />
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </SwiperContainer>
        </CarouselWrapper>
    )
}
export default Carousel;