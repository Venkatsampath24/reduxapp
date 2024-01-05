
import React from "react";
import Product from "../Components/Product";

function Home(){

    return(
        <>
        
        <h1 style={
            {
                display:"flex",
                alignItems : "center",
                justifyContent :"center",
                fontWeight : "bold",
            }
        }>This is Home Page</h1>
        <Product/>
        </>

    );
}

export default Home