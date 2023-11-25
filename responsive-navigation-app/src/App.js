import React from 'react';
import AllRoutes from './Router/AllRoutes';
import { Link } from 'react-router-dom';
import styles from "./Style/Navbar.module.css"
import { useState } from 'react';


const App = () => {
  const [state, setState]=useState(false);

  const handleToggle=()=>{
    setState(!state);
  }
  return (
    <div>

      <div className={styles.navbar}>
        <div className={styles.menu} >
          <p><Link to="/">Home</Link></p>
          <p><Link to="/product">Product</Link></p>
          <p><Link to="/contact">Contact</Link></p>
          <p><Link to="/auth">Auth</Link></p>
        </div>

      <div className={styles.hemberger} onClick={handleToggle} >
          <div className={styles.bar}></div>
          <div className={styles.bar}></div>
          <div className={styles.bar}></div>

          <div className={styles.dropDown} style={{display:state ? "block":"none"}} >
            <p><Link to="/">Home</Link></p>
            <p><Link to="/product">Product</Link></p>
            <p><Link to="/contact">Contact</Link></p>
            <p><Link to="/auth">Auth</Link></p>
          </div>

      </div>

      </div>

     <AllRoutes/>

    </div>
  );
};

export default App;