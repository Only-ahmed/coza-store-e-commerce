import React, { useEffect, useState } from 'react';
import Slider from './homepage/Slider';
import SecondSection from './homepage/Secondsection';
import Products from './homepage/Products';
import { useStore } from '../useContext/Context';

function HomePage() {
    const { isFixed } = useStore()
    const totop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }
    return (
        <div>
            <Slider />
            <SecondSection />
            <Products />
            <button onClick={() => totop()} className={isFixed ? 'up-btn' : 'up-btn-hidden'}></button>
        </div>
    );
}

export default HomePage;