import { PayloadAction, createSlice } from '@reduxjs/toolkit';


const defaultState: string[] = [];

const favouritesSlice = createSlice({
  name: 'favourites',
  initialState: defaultState,
  reducers: {
    set: (favourites, action: PayloadAction<string[]>) => {
      favourites = action.payload;
    },
    add: (favourites, action: PayloadAction<string>) => {
      favourites.push(action.payload);
    },
    remove: (favourites, action: PayloadAction<string>) => {
      return favourites.filter(id => id !== action.payload);
    },
  }
});

export default favouritesSlice.reducer;
export const { actions } = favouritesSlice;
