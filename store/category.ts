import {
  createAsyncThunk,
  createSelector,
  createSlice,
  PayloadAction,
} from '@reduxjs/toolkit';
import { RootState } from '.';
import * as api from '../services/api';

export const setCategories = createAsyncThunk(
  'category/set',
  async ({}, { dispatch }) => {
    api
      .getAllCategories()
      .then((categories) => {
        dispatch(set(categories));
      })
      .catch((err) => console.log(err.message));
  }
);

export const selectAllCategories = createSelector(
  ({ categories: state }: RootState) => state.categories,
  (categories) => categories
);

export const selectCategoryById = createSelector(
  ({ categories: state }: RootState) => state.categories,
  (_: RootState, id: string) => id,
  (categories, id) => categories.find((category) => category._id === id)
);

interface IState {
  categories: category.Model[];
}

const initialState: IState = {
  categories: [],
};

export const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    set: (state: IState, action: PayloadAction<category.Model[]>) => {
      state.categories = action.payload;
    },
  },
});

export const { set } = categorySlice.actions;

export default categorySlice.reducer;
