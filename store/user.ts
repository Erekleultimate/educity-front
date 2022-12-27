import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import * as errorActions from './error';
import * as strapi from '../services/strapi';
import { CLIENT_URL } from '../utils/urls';
import { SetStateAction } from 'react';

const headers = new Headers();
headers.set('Accept', 'application/json');
headers.set('Content-Type', 'application/json');

export const signOut = createAsyncThunk(
  'user/signOut',
  async ({}, { dispatch }) => {
    strapi
      .signOut()
      .then(() => dispatch(errorActions.set(null)))
      .catch((err) => dispatch(errorActions.set(err)));
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
        setInputs({
          email: '',
          confirmEmail: '',
          password: '',
          confirmPassword: '',
        });
      })
      .catch((err) => console.log(err.message));
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
        setInputs({ email: '', password: '' });
      })
      .catch((err) => console.log(err.message));
  }
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
    set: (state: IState, action: PayloadAction<user.User>) => {
      state.user = action.payload;
    },
  },
});

export const { set } = userSlice.actions;

export default userSlice.reducer;
