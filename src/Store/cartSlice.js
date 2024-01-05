import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',          // The name of the slice
  initialState: [],      // The initial state of the slice (an empty array in this case)
  reducers: {
    add(state, action) {  // The 'add' reducer function
      state.push(action.payload);  // Adds the payload of the action to the state array
    }
  }
});

export const { add } = cartSlice.actions;  // Extracting the 'add' action from the slice
export default cartSlice.reducer;           // Exporting the reducer


