import { createSlice } from '@reduxjs/toolkit';

const topicsSlice = createSlice({
    name: 'topics',
    initialState: [],
    reducers: {
        setTopics(state, action) { 
            return action.payload; 
        }
    }
})

export const { setTopics } = topicsSlice.actions;
export default topicsSlice.reducer;
