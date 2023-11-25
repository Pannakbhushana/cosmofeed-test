import React from 'react';
import {Route,Routes} from "react-router-dom";
import HomePage from '../pages/HomePage';
import ContactPage from '../pages/ContactPage';
import AuthPage from '../pages/AuthPage';
import ProductPage from '../pages/ProductPage';



function AllRoutes() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/contact' element={<ContactPage/>} />
        <Route path='/auth' element={<AuthPage/>} />
        <Route path='/product' element={<ProductPage/>} />
      </Routes>
    </div>
  )
}

export default AllRoutes
