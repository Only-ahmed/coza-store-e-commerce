import React, { useState } from 'react';
import img from '../../assets/Products/product-01.jpg.webp'
import { useCart } from 'react-use-cart';
import { useStore } from '../../useContext/Context';
import { Link } from 'react-router-dom';

const CartSection = () => {
    const {
        isEmpty,
        totalUniqueItems,
        items,
        updateItemQuantity,
        removeItem,
    } = useCart();

    const { values } = useStore()
    const { class1, class2, setClass1, setClass2, } = values
    const func1 = () => {
        setClass1('cart-side-hide')
        setClass2('s-full-hidecart-hide')
    }
    const total = items.reduce((sum, item) => sum + parseFloat(item.price.slice(1)), 0);
    return (
        <div className='cart-section'>
            <div onClick={() => func1()} className={class2} ></div>
            <div className={class1}>
                <div className='cart-section-container'>
                    <div className='header'>
                        <h3>YOUR CART</h3>
                        <span onClick={() => func1()}>X</span>
                    </div>
                    <div className='cart-items'>
                        {
                            items.map((item) => {

                                return (
                                    <div>
                                        <div>
                                            <img src={item.img} alt='aa' />
                                            <span onClick={() => removeItem(item.id)} className='delete_item_cart'>X</span>
                                        </div>
                                        <div>
                                            <span>{item.title}</span>
                                            <span >{item.price}</span>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className='checkout'>
                        <span>Total: {total}</span>
                        <div>
                            <a href='/shopping-cart'> <button>VIEW CART</button></a>
                            <button>CHECK OUT</button>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default CartSection;