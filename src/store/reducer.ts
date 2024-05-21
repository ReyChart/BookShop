import { combineReducers } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';

import { categoriesSlice } from './categories/categories.slice';
import { persistConfig } from './persist.config';

const rootReducer = combineReducers({
  categories: categoriesSlice.reducer,
});
export const persistedReducer = persistReducer(persistConfig, rootReducer);
