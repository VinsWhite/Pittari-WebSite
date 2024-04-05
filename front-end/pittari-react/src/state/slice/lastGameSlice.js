import { createSlice } from '@reduxjs/toolkit';

const lastGameSlice = createSlice({
  name: 'lastGame',
  initialState: {
    lastGame: null,
    serialize: false,
  },
  reducers: {
    setLastGame: (state, action) => {
      state.lastGame = action.payload;
    }
  }
});

export const { setLastGame } = lastGameSlice.actions;
export default lastGameSlice.reducer;