import { configureStore } from '@reduxjs/toolkit';
import userReducer from './user';
import authReducer from './auth';
import errorReducer from './error';
import courseReducer from './course';
import searchReducer from './search';

export const store = configureStore({
  reducer: {
    user: userReducer,
    auth: authReducer,
    error: errorReducer,
    courses: courseReducer,
    search: searchReducer,
  },
  devTools: process.env.NODE_ENV != 'production',
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
