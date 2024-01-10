import React from "react";

import { Link } from "react-router-dom";

import {useSelector} from 'react-redux'

function Navbar(){

    const items = useSelector((state)=> state.cart)
    console.log(items)
    return(
        <>
        <div
         style={
            {
                display:'flex',
                alignItems:'center',
                justifyContent:'space-between',
            }
         }>
         <span className="logo"> REDUX STORE</span>
         <div>
         <Link className="navLink" to={"/Home"}>
         Home
         </Link>

         <Link className="navLink" to={"/Cart"}>
         Cart
         </Link>
         </div>
         <span className="cartCount"> Cart Items : {items.length}</span>
         </div>
        
        </>

    );
}

export default Navbar