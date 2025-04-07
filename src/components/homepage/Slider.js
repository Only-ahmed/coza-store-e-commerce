import React from 'react';
import slide1 from '../../assets/slider/slide-01.jpg.webp';
import slide2 from '../../assets/slider/slide-02.jpg.webp';
import slide3 from '../../assets/slider/slide-03.jpg.webp';
import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom';


const Slider = () => {
    return (
        <Carousel className='carousel' fade indicators={false}>
            <Carousel.Item className='single-slider' >
                <img src={slide1} alt='img' />
                <Carousel.Caption className='slider-content'>
                    <p>Women Collection 2018</p>
                    <h1>NEW SEASON</h1>
                    <a href='#products'><button>Shop Now</button></a>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className='single-slider'>
                <img src={slide2} alt='img' />
                <Carousel.Caption className='slider-content'>
                    <p>Men New-Season</p>
                    <h1>JACKETS & COATS</h1>
                    <a href='#products'><button>Shop Now</button></a>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className='single-slider'>
                <img src={slide3} alt='img' />
                <Carousel.Caption className='slider-content'>
                    <p> Men Collection 2018</p>
                    <h1>NEW ARRIVALS</h1>
                    <a href='#products'><button>Shop Now</button></a>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Slider;