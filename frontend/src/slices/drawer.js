import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isOpen: false,
};

export const drawer = createSlice({
  name: 'drawer',
  initialState,
  reducers: {
    handleDrawerToggle: (state) => {
      state.isOpen = !state.isOpen;
    },
  },
});

export const { handleDrawerToggle } = drawer.actions;
export default drawer.reducer;
