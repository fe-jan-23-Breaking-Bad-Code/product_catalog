import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Orders } from '../../types/Orders';

const ORDERS = 'orders';
const defaultState: Orders[] = [];

const ordersSlice = createSlice({
  name: ORDERS,
  initialState: defaultState,
  reducers: {
    setOrders: (orders, action: PayloadAction<Orders[]>) => {
      orders = action.payload;
    },
  }
});

export default ordersSlice.reducer;
export const { actions } = ordersSlice;
