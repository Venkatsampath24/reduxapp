import { createSlice } from "@reduxjs/toolkit";
import axios from 'axios'

// Define constant statuses for better readability
const STATUSES = {
    SUCCESS: 'success',
    ERROR: 'error',
    LOADING: 'loading'
}

// Create a Redux slice for product-related actions and state
const productSlice = createSlice({
    name: 'product',
    initialState: {
        data: [],
        status: STATUSES.SUCCESS
    },
    reducers: {
        // Reducer to set the products in the state
        setProducts(state, action) {
            state.data = action.payload;
        },
        // Reducer to set the status in the state
        setStatus(state, action) {
            state.status = action.payload;
        }
    }
});

// Export the action creators
export const { setProducts, setStatus } = productSlice.actions;
export default productSlice.reducer

// Redux Thunk for fetching products asynchronously
export function fetchProducts() {
    return async function fetchProductsThunk(dispatch) {
        dispatch(setStatus(STATUSES.LOADING));

        try {
            // Fetch data from the API
            const result = await axios.get(`https://fakestoreapi.com/products`);
            
            // Dispatch the setProducts action to update the state
            dispatch(setProducts(result.data));
            
            // Set the status to success
            dispatch(setStatus(STATUSES.SUCCESS));
        } catch (error) {
            // Handle errors and set the status to error
            console.error('Error fetching products:', error);
            dispatch(setStatus(STATUSES.ERROR));
        }
    };
}
