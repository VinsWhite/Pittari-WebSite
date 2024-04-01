import { configureStore } from '@reduxjs/toolkit';
import articlesReducer from '../slice/articlesSlice';
import topicsReducer from '../slice/topicsSlice';
import usersReducer from '../slice/usersSlice';

const store = configureStore({
  reducer: {
    articles: articlesReducer, // slice degli articoli
    topics: topicsReducer, // slice dei topics
    users: usersReducer, //slice degli users
  },
});

export default store;
