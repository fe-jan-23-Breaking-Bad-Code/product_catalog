import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { CartItem } from '../../types/CartItem';

const defaultState: CartItem[] = [];

const cartSlice = createSlice({
  name: 'cart',
  initialState: defaultState,
  reducers: {
    set: (cart, action: PayloadAction<CartItem[]>) => {
      cart = action.payload;
    },
    add: (cart, action: PayloadAction<CartItem>) => {
      cart.push(action.payload);
    },
    remove: (cart, action: PayloadAction<string>) => {
      return cart.filter(
        ({ id }) => id !== action.payload);
    },
    setCount: (cart, action: PayloadAction<CartItem>) => {
      const { id, quantity} = action.payload;

      return cart.map(
        cartItem => {
          if (cartItem.id === id) {
            return { ...cartItem, quantity };
          }

          return cartItem;
        });
    },
  }
});

export default cartSlice.reducer;
export const { actions } = cartSlice;
