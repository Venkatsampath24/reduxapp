
import React from "react";

import { useDispatch, useSelector } from "react-redux";
import {remove} from '../Store/cartSlice';
function Cart(){

    const items = useSelector((state)=> state.cart)
    const dispatch = useDispatch()

    const handleRemove=(itemId)=> {
        dispatch(remove(itemId))
    }

    return(

        <>
        
        <div className="cartWrapper">
            {
                items.map((item)=>{
                   return <div className="cartCard">
                   <img src={item.image} alt="img"/>
                   <h5>{item.title}</h5>
                   <h5>Price: ${item.price}</h5>
                   <button className="remove-btn" onClick={()=>handleRemove(item.id)}>Remove</button>
                   </div>
                })
            }
        </div>
        </>
    );
}

export default Cart