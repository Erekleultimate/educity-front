import {
  createAsyncThunk,
  createSelector,
  createSlice,
  PayloadAction,
} from '@reduxjs/toolkit';
import { SetStateAction } from 'react';
import { RootState } from '.';
import * as api from '../services/api';

const headers = new Headers();
headers.set('Accept', 'application/json');
headers.set('Content-Type', 'application/json');

export const setAllCourses = createAsyncThunk(
  'course/setAll',
  async ({}, { dispatch }) => {
    api
      .getAllCourses()
      .then((courses) => {
        dispatch(set(courses));
      })
      .catch((err) => console.log(err.message));
  }
);

export const createCourse = createAsyncThunk(
  'course/create',
  async (
    {
      owner,
      category,
      name,
      place,
      price,
      image,
      setInputs,
      setImages,
    }: {
      owner: user.User;
      category: string;
      name: string;
      place: string;
      price: string;
      image: File;
      setInputs: (
        value: SetStateAction<{
          category: string;
          name: string;
          place: string;
          price: string;
        }>
      ) => void;
      setImages: (value: SetStateAction<FileList | null | undefined>) => void;
    },
    {}
  ) => {
    api
      .createCourse(owner, category, name, place, price, image)
      .then(() => {
        setInputs({ category: '', name: '', place: '', price: '' });
        setImages(null);
      })
      .catch((err) => console.log(err.message));
  }
);

export const selectAllCourses = createSelector(
  ({ courses: state }: RootState) => state.courses,
  (courses) => courses
);

export const selectCoursesWithTitle = createSelector(
  ({ courses: state }: RootState) => state.courses,
  (_: RootState, query: string) => query,
  (courses, query) =>
    courses.filter((course) =>
      course.name.toLowerCase().includes(query.toLocaleLowerCase())
    )
);

interface IState {
  courses: course.Model[];
}

const initialState: IState = {
  courses: [],
};

export const courseSlice = createSlice({
  name: 'courses',
  initialState,
  reducers: {
    set: (state: IState, action: PayloadAction<course.Model[]>) => {
      state.courses = action.payload;
    },
    add: (state: IState, action: PayloadAction<course.Model>) => {
      state.courses = [...state.courses, action.payload];
    },
  },
});

export const { set, add } = courseSlice.actions;

export default courseSlice.reducer;
