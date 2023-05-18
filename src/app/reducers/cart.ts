import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { CartItem } from '../../types/CartItem';


const CART = 'cart';
const savedCart = localStorage.getItem(CART);
const defaultState: CartItem[] = savedCart
  ? JSON.parse(savedCart)
  : [];

const cartSlice = createSlice({
  name: CART,
  initialState: defaultState,
  reducers: {
    set: (cart, action: PayloadAction<CartItem[]>) => {
      cart = action.payload;
      localStorage.setItem(CART, JSON.stringify(cart));

      return cart;
    },
    clear: () => {
      localStorage.setItem(CART, JSON.stringify([]));
      return [];
    },
    add: (cart, action: PayloadAction<CartItem>) => {
      cart.push(action.payload);
      localStorage.setItem(CART, JSON.stringify(cart));
    },
    remove: (cart, action: PayloadAction<string>) => {
      const newCart = cart.filter(
        ({ id }) => id !== action.payload);

      localStorage.setItem(CART, JSON.stringify(newCart));

      return newCart;
    },
    setCount: (cart, action: PayloadAction<CartItem>) => {
      const { id, quantity} = action.payload;

      const newCart = cart.map(
        cartItem => {
          if (cartItem.id === id) {
            return { ...cartItem, quantity };
          }

          return cartItem;
        }
      );

      localStorage.setItem(CART, JSON.stringify(newCart));

      return newCart;
    },
  }
});

export default cartSlice.reducer;
export const { actions } = cartSlice;
