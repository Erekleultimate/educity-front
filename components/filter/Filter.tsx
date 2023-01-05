import { useSelector } from 'react-redux';
import { FilterSection } from '../../components';
import * as categoryActions from '../../store/category';

const Filter = () => {
  const categories = useSelector(categoryActions.selectAllCategories);

  return (
    <div className="hidden md:block md:col-span-1 space-y-10">
      <FilterSection title="კატეგორიები" items={categories} />
    </div>
  );
};

export default Filter;
