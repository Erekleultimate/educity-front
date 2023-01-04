import { createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '.';

export const selectSearch = createSelector(
  ({ search: state }: RootState) => state.search,
  (search) => search
);

interface IState {
  search: string;
}

const initialState: IState = {
  search: '',
};

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    set: (state: IState, action: PayloadAction<string>) => {
      state.search = action.payload;
    },
  },
});

export const { set } = searchSlice.actions;

export default searchSlice.reducer;
