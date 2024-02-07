import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { GoogleOAuthProvider } from '@react-oauth/google';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home/Home.tsx'
import Summer24 from './pages/Summer24/Summer24.tsx';
import Login from './pages/Auth/Login.tsx';
import GiftsForWomen from './pages/GiftGuide/GiftForWomen.tsx';
import Register from './pages/Auth/Register.tsx';
import Designers from './pages/Designers/Designers.tsx';
import FAQ from './pages/FAQ/FAQ.tsx';
import Demo from './pages/Demo/Demo.tsx';
import Campaion from './pages/Campaion/Campaion.tsx';
import Services from './pages/Services/Services.tsx';
import Products from './pages/Products/Products.tsx';
import ProductDetails from './pages/ProductDetails/ProductDetails.tsx';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const useScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
}

const App = () => {
  useScrollToTop();
  
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/summer-2024' element={<Summer24/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/gifts-for-women' element={<GiftsForWomen/>}/>
      <Route path='/designers' element={<Designers/>}/>
      <Route path='/faq' element={<FAQ/>}/>
      <Route path='/demo' element={<Demo/>}/>
      <Route path='/campaion' element={<Campaion/>}/>
      <Route path='/services' element={<Services/>}/>
      <Route path='/products' element={<Products/>}/>
      <Route path='/product-details' element={<ProductDetails/>}/>
    </Routes>
  )
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <GoogleOAuthProvider clientId='437509742690-jih12raobg19h2p4hit1go75u67i1h4f.apps.googleusercontent.com'>
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  </GoogleOAuthProvider>
)
