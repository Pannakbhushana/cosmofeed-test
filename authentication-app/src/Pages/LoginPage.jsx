import React from 'react';
import styles from "../Style/Navbar.module.css";
import { useContext } from 'react';
import {AuthContext} from "../ContextApi/AuthContext";
import { useNavigate,Navigate } from 'react-router-dom';

function LoginPage() {
    const {state,logIn,logOut}=useContext(AuthContext);
    const navigate=useNavigate()

 

    
  
  return state ? <h1>You already loged In !</h1>: (
    <div>
        <br />
      <h1>Please Login First !</h1>
      <br />
      <br />
      
      <div style={{display:"flex",justifyContent:"center"}}>

        <button className={styles.buttonStyle} onClick={()=>{
            logIn()
            alert("Login Successful ! you will be redirected to Home Page")
            navigate("/")
        }}>Log In</button>

        <div style={{width:"50px"}}></div>

    
      </div>

    </div>
  )
}


export default LoginPage
