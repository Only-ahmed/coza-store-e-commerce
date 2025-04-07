import React from 'react';
import img from '../../assets/Products/product-01.jpg.webp';
import { useCart } from 'react-use-cart';
import { ProductsArray } from '../../Data';
import { useParams } from 'react-router-dom';
import { useStore } from '../../useContext/Context';

const QuickView = () => {
    const {
        isEmpty,
        totalUniqueItems,
        items,
        updateItemQuantity,
        // removeItem,
    } = useCart();
    const { values } = useStore()
    const { class3, setClass3, ID, cartValues } = values
    // const product = ProductsArray.find(item => item.id === parseInt(ID));
    // const filter = product.splice(0, 1)
    console.log(cartValues);
    const function1 = () => {
    }
    return (
        <div className={class3}>
            <div onClick={() => setClass3('quickview-section-hide')} className='s-full-quickview'></div>
            <div className='quickview-container'>
                <div className='product-img'>
                    <div>
                        <img src={ID ? ID.img : 'No Product'} alt='img' />
                    </div>
                </div>
                <div className='product-details'>
                    <h3>{ID ? ID.title : 'no item'}</h3>
                    <h5>{ID ? ID.price : '$00.00'}</h5>
                    <p>Nulla eget sem vitae eros pharetra viverra.
                        Nam vitae luctus ligula. Mauris consequat ornare feugiat.</p>
                    <form>
                        <div className='first-raw'>
                            <div>
                                <label htmlFor="size">Size</label>
                                <select id="size" name="size">
                                    <option value="Choose">Choose an option</option>
                                    <option value="Size s">Size S</option>
                                    <option value="Size M">Size M</option>
                                    <option value="Size L">Size L</option>
                                </select>
                            </div>
                            <div>
                                <label htmlFor="size">Color</label>
                                <select id="size" name="size">
                                    <option value="Choose">Choose an option </option>
                                    <option value="Red">Red</option>
                                    <option value="Blue">Blue</option>
                                    <option value="White">white</option>
                                </select>
                            </div>
                        </div>
                        <div className='second-raw'>
                            <div>
                                <button onClick={() => updateItemQuantity(cartValues.id, cartValues.quantity + 1)} >+</button>
                                <span>{cartValues ? cartValues.quantity : 0}</span>
                                <button onClick={() => updateItemQuantity(cartValues.id, cartValues.quantity - 1)}>-</button>
                            </div>
                            <button className='addtocart' >Add to Cart</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default QuickView;