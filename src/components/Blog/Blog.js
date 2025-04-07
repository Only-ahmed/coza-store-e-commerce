import React from 'react';
import img from '../../assets/blog/bg-02.jpg.webp';
import img2 from '../../assets/blog/blog-04.jpg.webp';
import img3 from '../../assets/blog/blog-05.jpg.webp';
import img4 from '../../assets/blog/blog-06.jpg.webp';
import img5 from '../../assets/blog/product-min-01.jpg.webp';
import img6 from '../../assets/blog/product-min-02.jpg.webp';
import img7 from '../../assets/blog/product-min-03.jpg.webp';
import './Blog.css';
import { Link } from 'react-router-dom';

const Blog = () => {
    return (
        <div className='blog'>
            <div className='blog-header'>
                <h1>Blog</h1>
                <img src={img} alt='img' />
            </div>
            <div className='blog-container'>
                <div className='first-column'>
                    <div className='each-card'>
                        <div className='img-div'>
                            <img src={img2} alt='img' />
                        </div>
                        <div className='each-card-date'>
                            <span>22</span>
                            <span>Jan 2018</span>
                        </div>
                        <div className='each-card-content'>
                            <h2>8 Inspiring Ways to Wear Dresses in the Winter</h2>
                            <p>Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce eget dictum tortor. Donec dictum vitae sapien eu varius</p>
                            <div>
                                <span>
                                    <span>By Admin </span>
                                    <span>StreetStyle, Fashion, Couple </span>
                                    <span>8 Comments</span>
                                </span>
                                <a href='/blog'>CONTINUE READING </a>
                            </div>
                        </div>
                    </div>
                    <div className='each-card'>
                        <div className='img-div'>
                            <img src={img3} alt='img' />
                        </div>
                        <div className='each-card-date'>
                            <span>22</span>
                            <span>Jan 2018</span>
                        </div>
                        <div className='each-card-content'>
                            <h2>8 Inspiring Ways to Wear Dresses in the Winter</h2>
                            <p>Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce eget dictum tortor. Donec dictum vitae sapien eu varius</p>
                            <div>
                                <span>
                                    <span>By Admin </span>
                                    <span>StreetStyle, Fashion, Couple </span>
                                    <span>8 Comments</span>
                                </span>
                                <a href='/blog'>CONTINUE READING </a>
                            </div>
                        </div>
                    </div>
                    <div className='each-card'>
                        <div className='img-div'>
                            <img src={img4} alt='img' />
                        </div>
                        <div className='each-card-date'>
                            <span>22</span>
                            <span>Jan 2018</span>
                        </div>
                        <div className='each-card-content'>
                            <h2>8 Inspiring Ways to Wear Dresses in the Winter</h2>
                            <p>Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce eget dictum tortor. Donec dictum vitae sapien eu varius</p>
                            <div>
                                <span>
                                    <span>By Admin </span>
                                    <span>StreetStyle, Fashion, Couple </span>
                                    <span>8 Comments</span>
                                </span>
                                <a href='/blog'>CONTINUE READING </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='second-column'>
                    <div className='search-div'>
                        <input type='text' placeholder='Search' />
                    </div>
                    <div className='categories'>
                        <h4>Categories</h4>
                        <ul>
                            <a href='#'><li>Fashion</li></a>
                            <a href='#'><li>Beauty</li></a>
                            <a href='#'><li>Street Style</li></a>
                            <a href='#'><li>Life Style</li></a>
                            <a href='#'><li>DIY & Crafts</li></a>
                        </ul>
                    </div>
                    <div className='Featured-Products'>
                        <h4>Featured Products</h4>
                        <div className='Featured-Products-Card'>
                            <img src={img5} alt='img' />
                            <div>
                                <p>White Shirt With Pleat Detail Back</p>
                                <span>$19.00</span>
                            </div>
                        </div>
                        <div className='Featured-Products-Card'>
                            <img src={img6} alt='img' />
                            <div>
                                <p>White Shirt With Pleat Detail Back</p>
                                <span>$19.00</span>
                            </div>
                        </div>
                        <div className='Featured-Products-Card'>
                            <img src={img7} alt='img' />
                            <div>
                                <p>White Shirt With Pleat Detail Back</p>
                                <span>$19.00</span>
                            </div>
                        </div>
                    </div>
                    <div className='archive'>
                        <h4>Archive</h4>
                        <div>
                            <span>July 2018</span>
                            <span>(9)</span>
                        </div>
                        <div>
                            <span>June 2018</span>
                            <span>(39)</span>
                        </div>
                        <div>
                            <span>May 2018</span>
                            <span>(29)</span>
                        </div>
                        <div>
                            <span>April 2018</span>
                            <span>(35)</span>
                        </div>
                        <div>
                            <span>March 2018</span>
                            <span>(22)</span>
                        </div>
                        <div>
                            <span>February 2018</span>
                            <span>(32)</span>
                        </div>
                        <div>
                            <span>January 2018</span>
                            <span>(21)</span>
                        </div>
                        <div>
                            <span>December</span>
                            <span>(26)</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;