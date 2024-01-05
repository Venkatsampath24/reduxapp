import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

const Product = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProduct = async () => {
      const result = await axios.get(`https://fakestoreapi.com/products`);
      console.log(result);
      setProducts(result.data);
    };
    getProduct();
  }, []);

  return (
    <div>
      <div className="productsWrapper">
      {
        products.map((product)=> {
            return <div className="card"> 
            <img src={product.image} alt="img"/>
            <h6>{product.title}</h6>
            <h5>Rs.{product.price}</h5>
            <button className="btn">Add to Cart</button>
            </div> 
        })
      }

      </div>
      
    </div>
  );
};

export default Product;
