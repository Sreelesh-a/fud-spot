import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      const newItem = action.payload;
      const existingItemIndex = state.items.findIndex(
        (item) => item.id === newItem.id
      );
      if (existingItemIndex !== -1) {
        state.items[existingItemIndex].count += 1;
      } else {
        state.items.push({
          ...newItem,
          count: 1,
        });
      }

      //   state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      const idToRemove = action.payload;
      const existingItemIndex = state.items.findIndex(
        (item) => item.id === idToRemove.id
      );

      if (existingItemIndex !== -1) {
        if (state.items[existingItemIndex].count > 1) {
          state.items[existingItemIndex].count -= 1;
        } else {
          state.items.splice(existingItemIndex, 1);
        }
      }
      //   state.items.pop();
    },
    clearCart: (state) => {
      state.items.length = 0;
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
