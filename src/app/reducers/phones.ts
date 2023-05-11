import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Phones } from '../../types/Phones';
import { PhonesPage } from '../../API/FetchPhones';

interface PhonesState {
  list: Phones[],
  currentPageList: Phones[],
  total: number,
  loading: boolean,
  error: string,
}

const defaultState: PhonesState = {
  list: [],
  currentPageList: [],
  total: 0,
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
    setPage: (phones, action: PayloadAction<PhonesPage>) => {
      phones.currentPageList = action.payload.data;
      phones.total = action.payload.total;
      phones.list.push(
        ...phones.currentPageList.filter(
          ({ id }) => !phones.list.some(phone => phone.id === id)
        ),
      );
    },
  }
});

export default phonesSlice.reducer;
export const { actions } = phonesSlice;
