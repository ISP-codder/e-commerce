import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  searchValue: '',
};

export const search = createSlice({
  name: 'search',
  initialState,
  reducers: {
    changeSearchValue: (state, action) => {
      state.searchValue = action.payload;
    },
  },
});

export const { changeSearchValue } = search.actions;
export default search.reducer;
