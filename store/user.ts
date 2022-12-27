import Router from 'next/router';
import {
  createAsyncThunk,
  createSelector,
  createSlice,
  PayloadAction,
} from '@reduxjs/toolkit';
import * as errorActions from './error';
import { API_URL, CLIENT_URL } from '../utils/urls';
import { SetStateAction } from 'react';
import { RootState } from '.';

const headers = new Headers();
headers.set('Accept', 'application/json');
headers.set('Content-Type', 'application/json');

export const setUser = createAsyncThunk(
  'user/setUser',
  async ({}, { dispatch }) => {
    fetch(`${CLIENT_URL}/api/user/me`)
      .then(async (resp) => {
        if (!resp.ok) {
          throw new Error(resp.statusText);
        }
        const user = await resp.json();
        dispatch(set(user));
      })
      .catch((err) => console.log(err.message));
  }
);

export const signOut = createAsyncThunk(
  'user/signOut',
  async ({}, { dispatch }) => {
    fetch(`${CLIENT_URL}/api/auth`, {
      method: 'POST',
      headers,
      body: JSON.stringify({ type: 'sign-out' }),
    })
      .then(async (resp) => {
        if (!resp.ok) {
          throw new Error(resp.statusText);
        }
        dispatch(set(null));
        dispatch(errorActions.set(null));
        Router.reload();
      })
      .catch((err) => console.log(err.message));
  }
);

export const signUp = createAsyncThunk(
  'user/signUp',
  async (
    {
      email,
      password,
      setInputs,
    }: {
      email: string;
      password: string;
      setInputs: (
        value: SetStateAction<{
          email: string;
          confirmEmail: string;
          password: string;
          confirmPassword: string;
        }>
      ) => void;
    },
    { dispatch }
  ) => {
    fetch(`${CLIENT_URL}/api/auth`, {
      method: 'POST',
      headers,
      body: JSON.stringify({ email, password, type: 'sign-up' }),
    })
      .then(async (resp) => {
        if (!resp.ok) {
          throw new Error(resp.statusText);
        }
        const user: user.User = await resp.json();
        dispatch(set(user));
        dispatch(errorActions.set(null));
        setInputs({
          email: '',
          confirmEmail: '',
          password: '',
          confirmPassword: '',
        });
        Router.reload();
      })
      .catch((err) =>
        dispatch(errorActions.set('მეილით უკვე დარეგისტრირებულია მომხმარებელი'))
      );
  }
);

export const signIn = createAsyncThunk(
  'user/signIn',
  async (
    {
      email,
      password,
      setInputs,
    }: {
      email: string;
      password: string;
      setInputs: (
        value: SetStateAction<{
          email: string;
          password: string;
        }>
      ) => void;
    },
    { dispatch }
  ) => {
    fetch(`${CLIENT_URL}/api/auth`, {
      method: 'POST',
      headers,
      body: JSON.stringify({ email, password, type: 'sign-in' }),
    })
      .then(async (resp) => {
        if (!resp.ok) {
          throw new Error(resp.statusText);
        }
        const user: user.User = await resp.json();
        dispatch(set(user));
        dispatch(errorActions.set(''));
        setInputs({ email: '', password: '' });
        Router.reload();
      })
      .catch((err) => dispatch(errorActions.set('არასწორი მეილი ან პაროლი')));
  }
);

export const selectUser = createSelector(
  ({ user: state }: RootState) => state.user,
  (user) => user
);

interface IState {
  user: user.User | null;
}

const initialState: IState = {
  user: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    set: (state: IState, action: PayloadAction<user.User | null>) => {
      state.user = action.payload;
    },
  },
});

export const { set } = userSlice.actions;

export default userSlice.reducer;
