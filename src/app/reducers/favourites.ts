import { PayloadAction, createSlice } from '@reduxjs/toolkit';

const FAVOURITES = 'favourites';
const savedFavourites = localStorage.getItem(FAVOURITES);
const defaultState: string[] = savedFavourites
  ? JSON.parse(savedFavourites)
  : [];

const favouritesSlice = createSlice({
  name: FAVOURITES,
  initialState: defaultState,
  reducers: {
    set: (favourites, action: PayloadAction<string[]>) => {
      favourites = action.payload;
      localStorage.setItem(FAVOURITES, JSON.stringify(favourites));
    },
    add: (favourites, action: PayloadAction<string>) => {
      favourites.push(action.payload);
      localStorage.setItem(FAVOURITES, JSON.stringify(favourites));
    },
    remove: (favourites, action: PayloadAction<string>) => {
      const newFavourites = favourites.filter(id => id !== action.payload);
      localStorage.setItem(FAVOURITES, JSON.stringify(newFavourites));
      return newFavourites;
    },
  }
});

export default favouritesSlice.reducer;
export const { actions } = favouritesSlice;
