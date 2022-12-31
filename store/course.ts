import { createAsyncThunk } from '@reduxjs/toolkit';
import * as api from '../services/api';

const headers = new Headers();
headers.set('Accept', 'application/json');
headers.set('Content-Type', 'application/json');

export const createCourse = createAsyncThunk(
  'course/create',
  async (
    {
      owner,
      type,
      name,
      place,
      price,
      image,
    }: {
      owner: string;
      type: string;
      name: string;
      place: string;
      price: string;
      image: File;
    },
    { dispatch }
  ) => {
    api
      .createCourse(owner, type, name, place, price, image)
      .then((course) => {
        console.log(course);
      })
      .catch((err) => console.log(err.message));
  }
);
