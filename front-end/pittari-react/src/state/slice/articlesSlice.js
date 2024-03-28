import { createSlice } from '@reduxjs/toolkit';

const articlesSlice = createSlice({
    name: 'articles',
    initialState: [],
    reducers: {
        setArticles(state, action) { // Modifica il nome della funzione in setArticles
            return action.payload; // Restituisci un nuovo stato basato sull'azione ricevuta
        }
    }
})

export const { setArticles } = articlesSlice.actions;
export default articlesSlice.reducer;
