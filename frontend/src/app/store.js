import { configureStore } from '@reduxjs/toolkit';
import { productApi } from '../features/productApi.js';
import drawerReducer from '../slices/drawer.js';
import searchReducer from '../slices/search.js';
import addToCartReducer from '../slices/addToCart.js';
export const store = configureStore({
  reducer: {
    [productApi.reducerPath]: productApi.reducer,
    drawerSlice: drawerReducer,
    searchSlice: searchReducer,
    addToCartSlice: addToCartReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productApi.middleware),
});
