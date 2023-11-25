import React from 'react';
import { AuthContext } from '../ContextApi/AuthContext';
import { useContext } from 'react';
import {Navigate} from "react-router-dom";

function PrivateRoute({children}) {
    const {state}=useContext(AuthContext);
    if(state){
        return children
    }
    return <Navigate to="/login" />

}

export default PrivateRoute
