import {createSlice} from '@reduxjs/toolkit';

export type UserState = {
  isLoggedIn: boolean;
};

const initialState: UserState = {
  isLoggedIn: false,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: state => {
      state.isLoggedIn = true;
    },
    logout: state => {
      state.isLoggedIn = false;
    },
  },
});

export const {login, logout} = userSlice.actions;
export default userSlice.reducer;
