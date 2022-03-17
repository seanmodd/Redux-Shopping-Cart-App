import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  itemsList: [],
  totalQuantity: 0,
  showCart: false,
  totalPrice: 0,
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {},
    removeFromCart: (state, action) => {},
    setShowCart: (state) => {
      state.showCart = !state.showCart;
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
