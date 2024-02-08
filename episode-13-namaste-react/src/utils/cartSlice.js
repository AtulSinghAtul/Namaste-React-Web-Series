import { createSlice } from "@reduxjs/toolkit";
import { current } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      state.items.pop();
    },
    // clearCart: (state, action) => {
    //   // console.log(state);
    //   console.log(current(state)); // items: (2) [{...},{...}]
    //   state = [];
    //   console.log(state); // []
    //   // state.items.length = 0;
    // },

    clearCart: (state, action) => {
      // origianlState = {items:[]}
      //state.items.length = 0; // this is mutate on the original state

      // or we returning new state both are valid
      return { items: [] };
    },
  },
});

// Action creators are generated for each case reducer function
export const { addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
