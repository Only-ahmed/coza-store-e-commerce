import React, { useEffect, useState } from 'react';
import { ProductsArray } from '../../Data';
import { useCart } from 'react-use-cart';
import { useStore } from '../../useContext/Context';

const Products = () => {
    const { addItem, onItemAdd, onSetItems, onItemRemove, } = useCart()
    const [toggle1, setToggle1] = useState(false);
    const [toggle2, setToggle2] = useState(false);
    const [toggle3, setToggle3] = useState(false);
    const [toggle4, setToggle4] = useState(false);
    const filterToggle = () => {
        setToggle1(!toggle1);
        setToggle2(!toggle2);
    }
    const searchToggle = () => {
        setToggle3(!toggle3);
        setToggle4(!toggle4);
    }
    console.log(onItemAdd)
    const [filterdValue, setFilterdValue] = useState(ProductsArray);
    // const filteration = (category) => {
    //     const value = ProductsArray.filter((item) => item.category === category)
    //     setFilterdValue(value)
    // }
    // const PriceFilter = (minPrice, maxPrice) => {
    //     const value = ProductsArray.filter((item) => {
    //         const removecurrency = item.price.slice(1)
    //         const price = parseFloat(removecurrency)
    //         return price >= minPrice && price <= maxPrice
    //     })
    //     setFilterdValue(value)
    // }
    // const lowToHigh = () => {
    //     const sortedValues = [...ProductsArray].sort((a, b) => {
    //         const getPrice = (item) => {
    //             return parseFloat(item.price.slice(1))
    //         }
    //         const priceA = getPrice(a)
    //         const priceB = getPrice(b)
    //         if (priceA < priceB) {
    //             return -1
    //         }
    //         if (priceA > priceB) {
    //             return 1
    //         }
    //         return 0
    //     })
    //     setFilterdValue(sortedValues)
    // }
    // const highToLow = () => {
    //     const sortedValues = [...ProductsArray].sort((a, b) => {
    //         const getPrice = (item) => {
    //             return parseFloat(item.price.slice(1))
    //         }
    //         const priceA = getPrice(a)
    //         const priceB = getPrice(b)
    //         if (priceA > priceB) {
    //             return -1
    //         }
    //         if (priceA < priceB) {
    //             return 1
    //         }
    //         return 0
    //     })
    //     setFilterdValue(sortedValues)
    // }
    // const sortBy = (value) => {
    //     const store = ProductsArray.filter((item) => item.sort === value)
    //     setFilterdValue(store)
    // }

    const { state, defaultValue, filteration, PriceFilter, lowToHigh, highToLow, sortBy, values } = useStore()
    const { setClass3, setID, setCartValues, cartValues } = values
    const mainArray = state.state1[0]
    // console.log(mainArray)
    const {
        isEmpty,
        totalUniqueItems,
        items,
        updateItemQuantity,
        // removeItem,
    } = useCart();
    const func2 = (id) => {
        setClass3('quickview-section')
        // setID(id)
        setID(ProductsArray.find(item => item.id === id));
        setCartValues(items.find((item) => item.id === id))
        // const array = []
        // console.log(items.find((item) => item.id === id))
    }
    useEffect(() => {
        defaultValue(ProductsArray)
    }, [])
    return (
        <div id='products' className="products-section">
            <div className='products-container'>
                <h1>PRODUCT OVERVIEW</h1>
                <div className='filter-section'>
                    <div className='products-category'>
                        <div className='products-category-list'>
                            <ul>
                                <li onClick={() => defaultValue(ProductsArray)}>All Products</li>
                                <li onClick={() => filteration('women')}>Women</li>
                                <li onClick={() => filteration('men')}>Men</li>
                                <li>Bag</li>
                                <li onClick={() => filteration('shoes')}>Shoes</li>
                                <li onClick={() => filteration('watch')}>Watches</li>
                            </ul>
                        </div>
                        <div className='products-category-filter'>
                            <div className={toggle2 ? 'filter-button1-hidden' : 'filter-button1'} onClick={() => filterToggle()}>
                                <i class="fa-solid fa-arrow-down-wide-short"></i>
                                Filter
                            </div>
                            <div className={toggle3 ? 'filter-button2-hidden' : 'filter-button2'} onClick={() => searchToggle()}>
                                <i class="fa-solid fa-magnifying-glass"></i>
                                Search
                            </div>
                        </div>
                    </div>
                    <div className={toggle1 ? 'products-filter' : 'products-filter-hidden'}>
                        <div>
                            <h4>Sort By</h4>
                            <ul>
                                <li onClick={() => defaultValue(ProductsArray)}>Default</li>
                                <li onClick={() => sortBy('Popularity')}>Popularity</li>
                                <li onClick={() => sortBy('Average rating')}>Average rating</li>
                                <li onClick={() => sortBy('Newness')}>Newness</li>
                                <li onClick={() => lowToHigh()}>Price:Low to High</li>
                                <li onClick={() => highToLow()}>Price:High to Low</li>
                            </ul>
                        </div>
                        <div>
                            <h4>Price</h4>
                            <ul>
                                <li onClick={() => defaultValue(ProductsArray)}>All</li>
                                <li onClick={() => PriceFilter(0.00, 50.00)}>$0.00 - $50.00</li>
                                <li onClick={() => PriceFilter(50.00, 100.00)}>$50.00 - $100.00</li>
                                <li onClick={() => PriceFilter(100.00, 150.00)}>$100.00 - $150.00</li>
                                <li onClick={() => PriceFilter(150.00, 200.00)}>$150.00 - $200.00</li>
                                <li >$200.00+</li>
                            </ul>
                        </div>
                        <div>
                            <h4>Color</h4>
                            <ul>
                                <li>Black</li>
                                <li>Blue</li>
                                <li>Gray</li>
                                <li>Green</li>
                                <li>Red</li>
                                <li>White</li>
                            </ul>
                        </div>
                    </div>
                    <div className={toggle4 ? 'products-search' : 'products-search-hidden'} >
                        <input type='text' placeholder='Search Products' />
                    </div>
                </div>

                <div className='product-cards'>
                    {
                        mainArray?.map((item) => {
                            return (
                                <div key={item.id} className='product-card'>
                                    <div className='product-card-image'>
                                        <span onClick={() => func2(item.id)}>Quick View</span>
                                        <img src={item.img} alt='product' />
                                    </div>
                                    <div className='product-card-info'>
                                        <div>
                                            <p>{item.title}</p>
                                            <span>Price: {item.price}</span>
                                        </div>
                                        <div>
                                            {/* <button onClick={() => addItem(item)}>Add to Cart</button> */}
                                            <i onClick={() => addItem(item)} className={onItemAdd ? 'normal' : 'triggerd'} class="fa-solid fa-cart-plus"></i>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    );
};

export default Products;