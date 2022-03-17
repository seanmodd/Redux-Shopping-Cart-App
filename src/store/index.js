import { configureStore } from '@reduxjs/toolkit';
import authSlice from './auth-slice';
import cartSlice from './cart-slice';

const store = configureStore({
  reducer: {
    auth: authSlice,
    cart: cartSlice,
  },
});

export default store;
