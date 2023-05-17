import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { User } from '../../types/User';

const USER = 'user';
const defaultState: User = {
  email: '',
  googleId: '',
  name: '',
};

const userSlice = createSlice({
  name: USER,
  initialState: defaultState,
  reducers: {
    login: (user, action: PayloadAction<User>) => {
      user = action.payload;
    },
    logout: ()=> {
      return defaultState;
    },
  }
});

export default userSlice.reducer;
export const { actions } = userSlice;
