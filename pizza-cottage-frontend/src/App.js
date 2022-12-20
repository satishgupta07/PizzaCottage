import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import ProductsPage from './pages/ProductsPage';
import Navigation from './components/Navigation';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navigation/>
        <Routes>
          <Route exact path='/' element={<Home/>} />
          <Route exact path='/about' element={<About/>} />
          <Route exact path='/products' element={<ProductsPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
