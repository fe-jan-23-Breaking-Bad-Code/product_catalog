import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Phones } from '../../types/Phones';

interface PhonesState {
  list: Phones[],
  loading: boolean,
  error: string,
}

const defaultState: PhonesState = {
  list: [],
  loading: false,
  error: '',
};

const phonesSlice = createSlice({
  name: 'phones',
  initialState: defaultState,
  reducers: {
    set: (phones, action: PayloadAction<Phones[]>) => {
      phones.list = action.payload;
    },
  }
});

export default phonesSlice.reducer;
export const { actions } = phonesSlice;