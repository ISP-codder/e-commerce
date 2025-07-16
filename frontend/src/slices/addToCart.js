import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
};

export const addToCart = createSlice({
  name: 'addToCart',
  initialState,
  reducers: {
    addId(state, action) {
      const { id, title, price, image } = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ id, title, price, image, quantity: 1 });
      }
    },
    removeId(state, action) {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
  },
});

export const { addId, removeId } = addToCart.actions;
export default addToCart.reducer;
