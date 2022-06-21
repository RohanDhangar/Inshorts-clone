import React from 'react';
import "./NavInshorts.css";
import HamburgurDrawer from "./HamburgurDrawer"
const NavInshort = (setcategory) => {
  return (
    <div className='nav'>
        <div className='icon'>
            <HamburgurDrawer setcategory={setcategory}/>
        </div>
        
        <img 
        style={{
            cursor: "pointer"
        }}
        src='https://assets.inshorts.com/website_assets/images/logo_inshorts.png' 
        height="100%"
        alt='image' />
        
        </div>
  )
}

export default NavInshort;