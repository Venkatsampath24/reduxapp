import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',          // The name of the slice
  initialState: [],      // The initial state of the slice (an empty array in this case)
  reducers: {
    add(state, action) {  // The 'add' reducer function
      state.push(action.payload);  // Adds the payload of the action to the state array
    },
    remove(state, action) {  // The 'remove' reducer function
      return state.filter((item) => item.id !== action.payload);
    },
  }
});

export const { add, remove } = cartSlice.actions;  // Extracting  'add' and 'remove' actions from the slice
export default cartSlice.reducer;           // Exporting the reducer
