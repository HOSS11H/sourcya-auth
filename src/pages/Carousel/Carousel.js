// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// import Swiper core and required modules
import {  Pagination } from 'swiper';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import  slideImg from '../../images/slider-image-1.png';
import styled from 'styled-components';
import Slide from '../../components/Slide/Slide';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { CustomButton } from '../../components/UI/Button/Button';
import { useNavigate, createSearchParams } from 'react-router-dom';

const CarouselWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    padding: 30px;
    max-width: 100%;
    position: relative;
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
            @media screen and (max-width: 599.98px) {
                background: #FFA600;
            }
            &.swiper-pagination-bullet-active {
                opacity: 1;
            }
        }
    }
`

const ActionsWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    position: absolute;
    bottom: 43px;
    left: 0;
    right: 0;
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

    const theme = useTheme();
    const isMobileUp = useMediaQuery(theme.breakpoints.up('sm'));

    const navigate = useNavigate()

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
            {
                !isMobileUp && (
                    <ActionsWrapper>
                        <CustomButton bg='#13A4F1' onClick= { () => navigate( { pathname: 'auth', search: `?${createSearchParams( { component: 'sign-up' }  )}`, } ) } >Sign Up</CustomButton>
                        <CustomButton bg='#13A4F1' onClick= { () => navigate( { pathname: 'auth', search: `?${createSearchParams( { component: 'login' }  )}`, } ) } >login</CustomButton>
                    </ActionsWrapper>
                )
            }
        </CarouselWrapper>
    )
}
export default Carousel;