import {createSlice, PayloadAction} from '@reduxjs/toolkit';

type LoginState = {
  isLoggedIn: boolean;
  email: string;
  firstname: string;
  birthday: string;
};

const initialState: LoginState = {
  isLoggedIn: false,
  email: 'default@email.com',
  firstname: 'Default',
  birthday: '00-00-0000',
};

export const loginSlice = createSlice({
  name: 'loginState',
  initialState,
  reducers: {
    login: state => {
      state.isLoggedIn = true;
    },
    logout: state => {
      state.isLoggedIn = false;
      state.email = 'default@email.com';
      state.firstname = 'Default';
      state.birthday = '00-00-0000';
    },
    updateEmail: (state, action: PayloadAction<string>) => {
      state.email = action.payload;
    },
    updateFirstname: (state, action: PayloadAction<string>) => {
      state.firstname = action.payload;
    },
    updateBirthday: (state, action: PayloadAction<string>) => {
      state.birthday = action.payload;
    },
  },
});

export const {login, logout, updateEmail, updateFirstname, updateBirthday} =
  loginSlice.actions;
export default loginSlice.reducer;
