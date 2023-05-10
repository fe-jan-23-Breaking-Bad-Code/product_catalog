import { configureStore } from '@reduxjs/toolkit';
import phones from './reducers/phones';
import favourites from './reducers/favourites';
import cart from './reducers/cart';

const store = configureStore({
  reducer : {
    phones,
    favourites,
    cart,
  }
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
