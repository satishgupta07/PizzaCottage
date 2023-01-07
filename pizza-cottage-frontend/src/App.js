import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import ProductsPage from './pages/ProductsPage';
import Navigation from './components/Navigation';
import SingleProduct from './pages/SingleProduct';
import Cart from './pages/Cart';
import { CartContext } from './CartContext';
import { useEffect, useState } from 'react';
import { getCart, storeCart } from './helpers';

function App() {
  const [cart, setCart] = useState({});

  //Fetch cart from local storage
  useEffect(() => {
    getCart().then(cart => {
      setCart(JSON.parse(cart));
    })
  }, []);

  useEffect(() => {
    storeCart(JSON.stringify(cart));
  }, [cart]);

  return (
    <div className='ml-8 mr-8'>
      <BrowserRouter>
        <CartContext.Provider value={{cart, setCart}}>
          <Navigation/>
          <Routes>
            <Route exact path='/' element={<Home/>} />
            <Route exact path='/about' element={<About/>} />
            <Route exact path='/products' element={<ProductsPage />} />
            <Route exact path='/products/:_id' element={<SingleProduct/>}/>
            <Route exact path='/cart' element={<Cart/>} />
          </Routes>
        </CartContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
