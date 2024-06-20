import { createContext, useContext, useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Products from "./Pages/Products";
import Home from "./Pages/Home";
import NotFound from "./Pages/NotFound";
import Login from './Pages/Login';
import './App.css';
import {ProductsProvider, ProductsContext} from './context/ContextState'



function App() {
  
const a = 10;
  return (
    <ProductsProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </ProductsProvider>
    
  );
}

export default App;
