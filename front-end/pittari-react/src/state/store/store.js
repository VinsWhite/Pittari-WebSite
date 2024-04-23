import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import { encryptTransform } from 'redux-persist-transform-encrypt';
import storage from 'redux-persist/lib/storage';
import articlesReducer from '../slice/articlesSlice';
import topicsReducer from '../slice/topicsSlice';
import usersReducer from '../slice/usersSlice';
import lastGameReducer from '../slice/lastGameSlice';
import persistKey from '../../persist-encrypt/persist'; 

const persistConfig = {
  key: 'root',
  storage,
};

const rootReducer = combineReducers({
  articles: articlesReducer,
  topics: topicsReducer,
  users: usersReducer,
  lastGame: lastGameReducer,
});

const encryptor = encryptTransform({
  secretKey: persistKey, 
  onError: function (error) {
    console.error('Errore di cifratura:', error);
  },
});

const persistedReducer = persistReducer(
  {
    ...persistConfig,
    transforms: [encryptor],
  },
  rootReducer
);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

persistor.subscribe(() => {
  /* console.log('Stato persistito:', store.getState());
  console.log(store.getState().lastGame.id); */
});

export default store;
