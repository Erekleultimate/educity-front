import { configureStore } from '@reduxjs/toolkit';
import userReducer from './user';
import authReducer from './auth';
import errorReducer from './error';
import courseReducer from './course';

export const store = configureStore({
  reducer: {
    user: userReducer,
    auth: authReducer,
    error: errorReducer,
    courses: courseReducer,
  },
  devTools: process.env.NODE_ENV != 'production',
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
