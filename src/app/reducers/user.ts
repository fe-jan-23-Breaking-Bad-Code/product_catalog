import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { User } from '../../types/User';
import { syncUser } from '../../API/FetchUsers';

const USER = 'user';
const savedUser = localStorage.getItem('user');
const defaultState: User = savedUser ?
  JSON.parse(savedUser)
  : {
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
      syncUser(user);

      localStorage.setItem('user', JSON.stringify(user));

      return user;
    },
    logout: () => {
      localStorage.removeItem('user');
      return defaultState;
    },
  }
});

export default userSlice.reducer;
export const { actions } = userSlice;
