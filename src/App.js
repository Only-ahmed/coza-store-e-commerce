import './App.css';
import Navbar from './components/Navbar';
import Products from './components/homepage/Products';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import ShoppingCart from './components/shoppingCart/ShoppingCart';
import Blog from './components/Blog/Blog';
import Contact from './components/contact/Contact';
import About from './components/about/About';
import Footer from './components/homepage/Footer';
import { CartProvider } from 'react-use-cart';
import CartSection from './components/homepage/CartSection';
import QuickView from './components/homepage/QuickView';

function App() {
  return (
    
    <div className="App">
      <CartProvider>
        <QuickView />
        <CartSection />
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/products' element={<Products />} />
            <Route path='/shopping-cart' element={<ShoppingCart />} />
            <Route path='/blog' element={<Blog />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/about' element={<About />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </CartProvider>
    </div>
    
  );
}

export default App;
