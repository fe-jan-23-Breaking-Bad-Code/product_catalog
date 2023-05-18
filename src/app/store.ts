import { configureStore } from '@reduxjs/toolkit';
import phones from './reducers/phones';
import favourites from './reducers/favourites';
import cart from './reducers/cart';
import user from './reducers/user';
import orders from './reducers/orders';

const store = configureStore({
  reducer : {
    phones,
    favourites,
    cart,
    user,
    orders
  }
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
