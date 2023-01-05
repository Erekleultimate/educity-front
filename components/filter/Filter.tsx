import { Dispatch, SetStateAction } from 'react';
import { useSelector } from 'react-redux';
import { FilterSection } from '../../components';
import * as categoryActions from '../../store/category';

interface FilterProps {
  setActiveCategory: Dispatch<SetStateAction<category.Model | null>>;
}

const Filter = (props: FilterProps) => {
  const categories = useSelector(categoryActions.selectAllCategories);

  return (
    <div className="hidden md:block md:col-span-1 space-y-10">
      <FilterSection
        title="კატეგორიები"
        items={categories}
        setActiveCategory={props.setActiveCategory}
      />
    </div>
  );
};

export default Filter;
