import { API_URL } from '../utils/urls';

const headers = new Headers();

export const getAllCategories = () => {
  return new Promise(
    (resolve: (categories: category.Model[]) => void, reject) => {
      fetch(`${API_URL}/category`)
        .then(async (resp) => {
          if (!resp.ok) {
            reject(resp);
          }
          const { data: categories } = await resp.json();
          resolve(categories);
        })
        .catch((err) => reject(err));
    }
  );
};

export const getAllCourses = () => {
  return new Promise((resolve: (courses: course.Model[]) => void, reject) => {
    fetch(`${API_URL}/course`)
      .then(async (resp) => {
        if (!resp.ok) {
          reject(resp);
        }
        const { data: courses } = await resp.json();
        resolve(courses);
      })
      .catch((err) => reject(err));
  });
};

export const createCourse = (
  owner: user.User,
  category: string,
  name: string,
  place: string,
  price: string,
  image: File
) => {
  return new Promise((resolve: (course: course.Model) => void, reject) => {
    headers.set('Authorization', `Bearer ${owner.token}`);
    const formData = new FormData();
    formData.append('owner', owner.email);
    formData.append('category', category);
    formData.append('name', name);
    formData.append('place', place);
    formData.append('price', price);
    formData.append('courseImage', image, image.name);
    fetch(`${API_URL}/course`, {
      method: 'POST',
      headers,
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
