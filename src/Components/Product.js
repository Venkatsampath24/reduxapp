import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { add } from "../Store/cartSlice";

const Product = () => {
  const [products, setProducts] = useState([]);

  const dispatch = useDispatch()
  const handleAdd=(product)=>{
    dispatch(add(product))
  }

  useEffect(() => {
    const getProduct = async () => {
      const result = await axios.get(`https://fakestoreapi.com/products`);
      setProducts(result.data);
    };
    getProduct();
  }, []);


  return (
    <div>
      <div className="productsWrapper">
      {
        products.map((product)=> {
            return <div key={product.id}className="card"> 
            <img src={product.image} alt="img"/>
            <h6>{product.title}</h6>
            <h5>$.{product.price}</h5>
            <button onClick={()=>handleAdd(product)} className="btn">Add to Cart</button>
            </div> 
        })
      }

      </div>
      
    </div>
  );
};

export default Product;
