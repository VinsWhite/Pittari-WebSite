import { createSlice } from '@reduxjs/toolkit';

const lastGameSlice = createSlice({
  name: 'lastGame',
  initialState: null,
  reducers: {
    setLastGame: (state, action) => {
      return action.payload; 
    }
  }
});

export const { setLastGame } = lastGameSlice.actions;
export default lastGameSlice.reducer;
