import { API_URL } from '../utils/urls';

export const createCourse = (
  owner: string,
  type: string,
  name: string,
  place: string,
  price: string,
  image: File
) => {
  return new Promise((resolve: (course: course.Model) => void, reject) => {
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
          reject(resp);
        }

        const { data: course } = await resp.json();
        resolve(course);
      })
      .catch((err) => reject(err));
  });
};
