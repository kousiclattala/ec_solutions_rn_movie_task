import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {UserData, authState} from './types';

const initialState: authState = {
  userData: {
    userName: '',
    password: '',
    email: '',
    phoneNumber: '',
  },
  isLoggedIn: false,
  watchList: [],
  favourites: [],
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setIsLoggedIn: (state, action: PayloadAction<boolean>) => {
      state.isLoggedIn = action.payload;
    },
    setUserData: (state, action: PayloadAction<UserData>) => {
      state.userData = action.payload;
    },
    setWatchList: (state, action: PayloadAction<any>) => {
      state.watchList.push(action.payload);
    },
    setFavourites: (state, action: PayloadAction<any>) => {
      state.favourites.push(action.payload);
    },
    reset: () => initialState,
  },
});

export const {setIsLoggedIn, setWatchList, setUserData, setFavourites, reset} =
  authSlice.actions;

export default authSlice.reducer;
