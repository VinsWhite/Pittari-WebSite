import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null,
  token: localStorage.getItem('token') || null,
  error: null,
  userId: null, 
  role: null,
};

export const usersSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loginUserSuccess: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.userId = action.payload.id;
      state.role = action.payload.role;
      state.error = null;
      localStorage.setItem('token', action.payload.token);
      localStorage.setItem('role', action.payload.role);
      localStorage.setItem('name', action.payload.user);
    },
    loginUserFailure: (state, action) => {
      state.error = action.payload;
    },
    logoutUser: (state) => {
      state.user = null;
      state.token = null;
      state.userId = null;
      state.role = null;
      state.error = null;
      localStorage.removeItem('token');
    },
  },
});

export const { loginUserSuccess, loginUserFailure, logoutUser } = usersSlice.actions;

export default usersSlice.reducer;
