import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import articlesReducer from '../slice/articlesSlice';
import topicsReducer from '../slice/topicsSlice';
import usersReducer from '../slice/usersSlice';
import lastGameReducer from '../slice/lastGameSlice';

const persistConfig = {
  key: 'root',
  storage,
};

const rootReducer = combineReducers({
  articles: articlesReducer,
  topics: topicsReducer,
  users: usersReducer,
  lastGame: persistReducer(persistConfig, lastGameReducer),
});

const store = configureStore({
  reducer: rootReducer,
});

export const persistor = persistStore(store);

console.log('Stato iniziale:', store.getState());

persistor.subscribe(() => {
  console.log('Stato persistito:', store.getState());
  console.log(store.getState().lastGame.id);
});

export default store;
