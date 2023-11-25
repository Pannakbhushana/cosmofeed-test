import React from 'react';
import styles from "../Style/Navbar.module.css";
import {NavLink} from "react-router-dom";

const data=[{title:"Home",path:"/"},
            {title:"Login",path:"/login"},
]

function Navbar() {
  return (
    <div className={styles.navbar}>
      {data.map((el,i)=>{
        return <NavLink key={i} to={el.path} className={({isActive})=>{
            return isActive ? styles.Active :styles.default
        }} >{el.title}</NavLink>
      })}
    </div>
  )
}

export default Navbar
