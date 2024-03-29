import { configureStore } from '@reduxjs/toolkit';
import articlesReducer from '../slice/articlesSlice';
import topicsReducer from '../slice/topicsSlice';

const store = configureStore({
  reducer: {
    articles: articlesReducer, // slice degli articoli
    topics: topicsReducer, // slice dei topics
  },
});

export default store;
