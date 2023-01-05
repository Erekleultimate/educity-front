import { Dispatch, SetStateAction } from 'react';
import { FilterItem } from '../../components';

interface FilterSecitonProps {
  title: string;
  items: { _id: string; title: string }[];
  setActiveCategory: Dispatch<SetStateAction<category.Model | null>>;
}

const FilterSection = (props: FilterSecitonProps) => {
  return (
    <div className="space-y-5">
      <h3 className="font-bold text-lg">{props.title}</h3>
      <div className="space-y-1">
        {props.items.map((item) => (
          <FilterItem
            key={item._id}
            item={item}
            setActiveCategory={props.setActiveCategory}
          />
        ))}
      </div>
    </div>
  );
};

export default FilterSection;
