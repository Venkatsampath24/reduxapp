import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../Store/productSlice";
import { add } from "../Store/cartSlice";

// Product component that displays a list of products
const Product = () => {
  // Redux state to store the list of products
  const { data, status } = useSelector((state) => state.product);

  // Redux dispatch function to add items to the cart
  const dispatch = useDispatch();

  // Function to handle adding a product to the cart
  const handleAdd = (product) => {
    dispatch(add(product));
  };

  // useEffect hook to fetch products from the API when the component mounts
  useEffect(() => {
    // Dispatch the fetchProducts action
    dispatch(fetchProducts());
  }, [dispatch]); // Include dispatch in the dependency array

  // JSX rendering of the component
  return (
    <div>
      <div className="productsWrapper">
        {/* Check if the status is 'loading' before rendering products */}
        {status === "loading" ? (
          <p>Loading...</p>
        ) : status === "error" ? (
          <p>Error loading products</p>
        ) : (
          // Map through the products array and render each product
          data.map((product) => {
            return (
              <div key={product.id} className="card">
                {/* Product image */}
                <img src={product.image} alt="img" />

                {/* Product title */}
                <h6>{product.title}</h6>

                {/* Product price */}
                <h5>${product.price}</h5>

                {/* Button to add the product to the cart */}
                <button onClick={() => handleAdd(product)} className="btn">
                  Add to Cart
                </button>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

// Export the Product component as the default export
export default Product;
