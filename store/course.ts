import { createAsyncThunk } from '@reduxjs/toolkit';
import { API_URL } from '../utils/urls';

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
    const formData = new FormData();
    formData.append('owner', owner);
    formData.append('type', type);
    formData.append('name', name);
    formData.append('place', place);
    formData.append('price', price);
    formData.append('courseImage', image, image.name);
    fetch(`${API_URL}/course`, {
      method: 'POST',
      body: formData,
    })
      .then(async (resp) => {
        if (!resp.ok) {
          throw new Error(resp.statusText);
        }
      })
      .catch((err) => console.log(err.message));
  }
);
