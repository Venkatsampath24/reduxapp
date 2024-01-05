import React, { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'

const Product = () => {

       
    const[ products , setProducts] = useState([]);

    useEffect(()=> {

        const getProducts= async()=>{
            const res = await axios.get(`https://fakestoreapi.com/products`)
            setProducts(res.data);
            console.log(res);
        }
        getProducts();
    },[])
       

       return (

        <div>
        {
            products.map((product)=>{
                return <li key={product.id}>{product.title}</li>
            })
        }
        </div>
      )

}

export default Product