import React, { useEffect, useState } from 'react';
import './main-page.css';
import logo from '../assets/logo-01.png.webp';
import { Link } from 'react-router-dom';
import { useCart } from 'react-use-cart';
import { useStore } from '../useContext/Context';

function Navbar() {
    const { totalUniqueItems } = useCart()
    const { values, isFixed } = useStore()
    const { setClass1, setClass2 } = values
    const func1 = () => {
        setClass1('cart-side')
        setClass2('s-full-hidecart')
    }
    return (
        <div>
            <div className='nav_header'>
                <div className='nav_header_insider'>
                    <div>
                        <p>Free shipping for standard order over $100</p>
                    </div>
                    <div className='nav_header_right'>
                        <p>Help & FAQs</p>
                        <p>My Account</p>
                        <p>EN</p>
                        <p>USD</p>
                    </div>
                </div>
            </div>
            <nav className={isFixed ? 'nav_fixed' : 'nav'}>
                <div className={isFixed ? 'navbar_insider_fixed' : 'navbar_insider'}>
                    <div className='logo'>
                        <a href='/'> <img src={logo} alt='logo' /></a>
                    </div>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/products">Shop</Link></li>
                        <li><Link to="/shopping-cart">Features</Link></li>
                        <li><Link to="/blog">Blog</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                    <div className='navbar_icons'>
                        <i class="fa-solid fa-magnifying-glass"></i>
                        <span>
                            <span>{totalUniqueItems}</span>
                            <i onClick={func1} class="fa-solid fa-cart-shopping"></i>
                        </span>
                        <i class="fa-regular fa-heart"></i>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;