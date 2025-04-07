import React from 'react';
import pic1 from '../../assets/second-section/banner-01.jpg.webp';
import pic2 from '../../assets/second-section/banner-02.jpg.webp';
import pic3 from '../../assets/second-section/banner-03.jpg.webp';

const SecondSection = () => {
    return (
        <div className='second-section'>
            <div className='second-section-insider'>
                <div className='single-div'>
                    <img src={pic1} alt='img' />
                    <a href='*'>
                        <h2>Women</h2>
                        <p>Spring 2018</p>
                    </a>
                </div>
                <div className='single-div'>
                    <img src={pic2} alt='img' />
                    <a href='*'>
                        <h2>Men</h2>
                        <p>Spring 2018</p>
                    </a>
                </div>
                <div className='single-div'>
                    <img src={pic3} alt='img' />
                    <a href='*'>
                        <h2>Accessories</h2>
                        <p>New Trend</p>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default SecondSection;