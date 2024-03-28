import { configureStore } from '@reduxjs/toolkit';
import articlesReducer from '../slice/articlesSlice';

const store = configureStore({
  reducer: {
    articles: articlesReducer, // slice degli articoli
  },
});

export default store;
