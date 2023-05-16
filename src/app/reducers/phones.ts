import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Phones } from '../../types/Phones';
import { PhonesPage } from '../../API/FetchPhones';

interface PhonesState {
  list: Phones[],
  currentPageList: Phones[],
  hotDeals: Phones[],
  newModels: Phones[],
  total: number,
  loading: boolean,
  error: string,
}

const defaultState: PhonesState = {
  list: [],
  currentPageList: [],
  hotDeals: [],
  newModels: [],
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
    setMany: (phones, action: PayloadAction<Phones[]>) => {
      phones.list.push(
        ...action.payload.filter(
          ({ id }) => !phones.list.some(phone => phone.id === id)
        ),
      );
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
    setNewModels: (phones, action: PayloadAction<Phones[]>) => {
      phones.newModels = action.payload;
    },
    setHotDeals: (phones, action: PayloadAction<Phones[]>) => {
      phones.hotDeals = action.payload;
    },
  }
});

export default phonesSlice.reducer;
export const { actions } = phonesSlice;
