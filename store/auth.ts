import { createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '.';

export const selectIsActive = createSelector(
  ({ auth: state }: RootState) => state.isActive,
  (isActive) => isActive
);

interface IState {
  isActive: boolean;
}

const initialState: IState = {
  isActive: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    set: (state: IState, action: PayloadAction<boolean>) => {
      state.isActive = action.payload;
    },
  },
});

export const { set } = authSlice.actions;

export default authSlice.reducer;
