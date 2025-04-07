import React, { createContext, useContext, useEffect, useReducer, useState } from 'react';
import { ProductsArray } from '../Data';


const StoreContext = createContext();

const initialState = {
    state1: []
};

const reducer = (state, action) => {
    switch (action.type) {
        case 'default':
            return { ...state, state1: [action.payload] };
        case 'category_filter':
            return { ...state, state1: [action.payload] };
        case 'lowtohigh':
            return { ...state, state1: [action.payload] };
        case 'hightolow':
            return { ...state, state1: [action.payload] };
        case 'sortby':
            return { ...state, state1: [action.payload] };
        default:
            return state;
    }
};

// Context provider component
export const StoreProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const defaultValue = (item) => {
        state.state1.push(item)
        dispatch({ type: 'default', payload: item })
    };
    const filteration = (category) => {
        const value = ProductsArray.filter((item) => item.category === category)
        dispatch({ type: 'category_filter', payload: value })
    }
    const PriceFilter = (minPrice, maxPrice) => {
        const value = ProductsArray.filter((item) => {
            const removecurrency = item.price.slice(1)
            const price = parseFloat(removecurrency)
            return price >= minPrice && price <= maxPrice
        })
        dispatch({ type: 'category_filter', payload: value })
    }
    const lowToHigh = () => {
        const sortedValues = [...ProductsArray].sort((a, b) => {
            const getPrice = (item) => {
                return parseFloat(item.price.slice(1))
            }
            const priceA = getPrice(a)
            const priceB = getPrice(b)
            if (priceA < priceB) {
                return -1
            }
            if (priceA > priceB) {
                return 1
            }
            return 0
        })
        dispatch({ type: 'lowtohigh', payload: sortedValues })
    }
    const highToLow = () => {
        const sortedValues = [...ProductsArray].sort((a, b) => {
            const getPrice = (item) => {
                return parseFloat(item.price.slice(1))
            }
            const priceA = getPrice(a)
            const priceB = getPrice(b)
            if (priceA > priceB) {
                return -1
            }
            if (priceA < priceB) {
                return 1
            }
            return 0
        })
        dispatch({ type: 'hightolow', payload: sortedValues })
    }
    const [class1, setClass1] = useState('cart-side-hide')
    const [class2, setClass2] = useState('s-full-hidecart-hide')
    const [class3, setClass3] = useState('quickview-section-hide')
    const [ID, setID] = useState()
    const [cartValues, setCartValues] = useState()
    const values = { class1, class2, class3, ID, cartValues, setClass1, setClass2, setClass3, setID, setCartValues }

    const sortBy = (value) => {
        const store = ProductsArray.filter((item) => item.sort === value)
        dispatch({ type: 'sortby', payload: store })

    }

        const [isFixed, setIsFixed] = useState(false);
        const fixedNav = 300
        useEffect(() => {
            const handleScroll = () => {
                // console.log(window.scrollY)
                if (window.scrollY >= fixedNav) {
                    setIsFixed(true);
                } else {
                    setIsFixed(false);
                }
            };
            window.addEventListener('scroll', handleScroll);
            return () => {
                window.removeEventListener('scroll', handleScroll);
            };
        },);
    return (
        <StoreContext.Provider value={{ state, defaultValue, filteration, PriceFilter, lowToHigh, highToLow, sortBy, values, isFixed }}>
            {children}
        </StoreContext.Provider>
    );
};

// Custom hook to use the store
export const useStore = () => useContext(StoreContext);