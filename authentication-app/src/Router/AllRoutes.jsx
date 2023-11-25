import React from 'react';
import {Route,Routes} from "react-router-dom";
import HomePage from '../Pages/HomePage';
import LoginPage from '../Pages/LoginPage';
import PageNotFound from '../Pages/PageNotFound';
import PrivateRoute from './PrivateRoute';


function AllRoutes() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<PrivateRoute><HomePage/></PrivateRoute>} />
        <Route path='/login' element={<LoginPage/>} />
        <Route path='*' element={<PageNotFound/>} />
      </Routes>
    </div>
  )
}

export default AllRoutes
