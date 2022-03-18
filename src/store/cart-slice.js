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
    addToCartByNumber: (state, action) => {
      const { item } = action.payload;
      const { itemsList } = state;
      const itemIndex = itemsList.findIndex((i) => i.id === item.id);
      if (itemIndex === -1) {
        state.itemsList.push(item);
      } else {
        state.itemsList[itemIndex].quantity += 1;
      }
      state.totalQuantity += 1;
      state.totalPrice += item.price;
    },
    addToCart: (state, action) => {
      const newItem = action.payload;
      const { itemsList } = state;
      const existingItem = itemsList.find((item) => item.id === newItem.id);

      if (existingItem) {
        existingItem.quantity++;
        existingItem.price += newItem.price;
      } else {
        itemsList.push({
          id: newItem.id,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          name: newItem.name,
        });
      }
    },
    removeFromCart: (state, action) => {},
    setShowCart: (state) => {
      state.showCart = !state.showCart;
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
