import {
  ChangeEventHandler,
  Dispatch,
  MouseEventHandler,
  useEffect,
  useState,
} from 'react';
import { NextPage, GetServerSideProps } from 'next';
import { DashboardPageLayout } from '../../layouts';
import { Input, Button } from '../../components';
import { useDispatch, useSelector } from 'react-redux';
import * as userActions from '../../store/user';
import * as courseActions from '../../store/course';
import { API_URL } from '../../utils/urls';

interface UserDashboardPageProps {
  categories: category.Model[];
}

const UserDashboardPage: NextPage<UserDashboardPageProps> = (
  props: UserDashboardPageProps
) => {
  const dispatch: Dispatch<any> = useDispatch();
  const user = useSelector(userActions.selectUser);
  const [inputs, setInputs] = useState<{
    category: string;
    name: string;
    place: string;
    price: string;
  }>({ category: '', name: '', place: '', price: '' });
  const [images, setImages] = useState<FileList | undefined | null>(null);

  useEffect(() => {
    dispatch(userActions.setUser());
    dispatch(courseActions.setAllCourses());
  }, [dispatch]);

  const onInputChange: ChangeEventHandler<
    HTMLInputElement | HTMLSelectElement
  > = (event) => {
    setInputs((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };

  const onImageChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    setImages(event.target.files);
  };

  const onButtonClick: MouseEventHandler<HTMLButtonElement> = () => {
    if (!inputs.category) return alert('კატეგორია სავალდებულოა');
    if (!inputs.name) return alert('სახელი სავალდებულოა');
    if (!inputs.place) return alert('ადგილი სავალდებულოა');
    if (!inputs.price) return alert('ფასი სავალდებულოა');
    if (!images) return alert('სურათი სავალდებულოა');

    user &&
      dispatch(
        courseActions.createCourse({
          category: inputs.category,
          name: inputs.name,
          place: inputs.place,
          price: inputs.price,
          image: images[0],
          owner: user,
          setInputs,
          setImages,
        })
      );
  };

  return (
    <DashboardPageLayout
      pageTitle="User Dashboard"
      pageDescription="User dashboard page description"
    >
      <div>
        <form
          onSubmit={(event) => event.preventDefault()}
          className="flex flex-col"
        >
          {/* <Input name="type" value={inputs.type} onChange={onInputChange} /> */}
          <select defaultValue="" name="category" onChange={onInputChange}>
            <option value="">--- აირჩიე კატეგორია ---</option>
            {props.categories.map((category) => (
              <option key={category._id} value={category._id}>
                {category.title}
              </option>
            ))}
          </select>
          <Input name="name" value={inputs.name} onChange={onInputChange} />
          <Input name="place" value={inputs.place} onChange={onInputChange} />
          <Input name="price" value={inputs.price} onChange={onInputChange} />
          <Input name="image" onChange={onImageChange} />
          <Button
            color="green"
            size="md"
            value="შენახვა"
            onClick={onButtonClick}
          />
        </form>
      </div>
    </DashboardPageLayout>
  );
};

export const getServerSideProps: GetServerSideProps<
  UserDashboardPageProps
> = async () => {
  const categoriesResp = await fetch(`${API_URL}/category`);
  const { data: categories } = await categoriesResp.json();

  return {
    props: {
      categories,
    },
  };
};

export default UserDashboardPage;
