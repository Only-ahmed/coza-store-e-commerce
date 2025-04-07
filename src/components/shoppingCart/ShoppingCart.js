import React from 'react';
import './shoppingCart.css';
import img from '../../assets/Products/product-01.jpg.webp';
import { useCart } from 'react-use-cart';

const ShoppingCart = () => {
    const {
        isEmpty,
        totalUniqueItems,
        items,
        updateItemQuantity,
        // removeItem,
    } = useCart();
    const total = items.reduce((sum, item) => sum + parseFloat(item.price.slice(1)), 0);
    // console.log(newprice);
    return (
        <div className='shopping-cart'>
            <div className='shopping-cart-container'>
                <div className='cart-proudcts'>
                    <table>
                        <thead>
                            <tr>
                                <th>Product</th>
                                <th></th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                items.map((item) => {
                                    const newprice = parseFloat(item.price.slice(1) * item.quantity)
                                    return (
                                        <tr>
                                            <td key={item.id} className='cart-product-image'>
                                                <div>
                                                    <img src={item.img} alt='product-image' />
                                                </div>
                                            </td>
                                            <td>{item.title}</td>
                                            <td>{item.price}</td>
                                            <td>
                                                <div>
                                                    <button onClick={() => updateItemQuantity(item.id, item.quantity + 1)}>+</button>
                                                    <span>{item.quantity}</span>
                                                    <button onClick={() => updateItemQuantity(item.id, item.quantity - 1)}>-</button>
                                                </div>
                                            </td>
                                            <td>${newprice}</td>
                                        </tr>
                                    )
                                })}
                        </tbody>
                    </table>
                </div >
                <div className='cart-total'>
                    <h4>CART TOTALS</h4>
                    <div className='total-first-raw'>
                        <h6>Subtotal :</h6>
                        <p>$35.00</p>
                    </div>
                    <div className='total-second-raw'>
                        <div><h6>Shipping:</h6></div>
                        <div className='total-second-raw-content'>
                            <p>There are no shipping methods available.
                                Please double check your address,
                                or contact us if you need any help.</p>
                            <div>
                                <p>CALCULATE SHIPPING</p>
                                <select>
                                    <option>Select a Country</option>
                                    <option>USA</option>
                                    <option>Canada</option>
                                    <option>UK</option>
                                </select>
                                <input type='text' placeholder='State / country' />
                                <input type='text' placeholder='postcode / zip' />
                            </div>
                            <button>UPDATE TOTALS</button>
                        </div>
                    </div>
                    <div className='total-third-raw'>
                        <h6>Total:     ${total}</h6>
                        <button>PROCEED  TO CHECKOUT</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ShoppingCart;