import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null,
  token: localStorage.getItem('token') || null,
  error: null,
};

export const usersSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loginUserSuccess: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.userId = action.payload.id;
      state.error = null;
      localStorage.setItem('token', action.payload.token);
    },
    loginUserFailure: (state, action) => {
      state.error = action.payload;
    },
    logoutUser: (state) => {
      state.user = null;
      state.token = null;
      state.userId = null;
      state.error = null;
      localStorage.removeItem('token');
    },
  },
});

export const { loginUserSuccess, loginUserFailure, logoutUser } = usersSlice.actions;

export default usersSlice.reducer;
