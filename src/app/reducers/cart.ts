import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface CartItem {
  id: string,
  count: number,
}

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
      cart = cart.filter(
        ({ id }) => id !== action.payload);
    },
  }
});

export default cartSlice.reducer;
export const { actions } = cartSlice;