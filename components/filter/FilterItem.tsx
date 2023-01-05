import { Dispatch, MouseEventHandler, SetStateAction } from 'react';

interface FilterItemProps {
  item: { _id: string; title: string };
  activeCategory: category.Model | null;
  setActiveCategory: Dispatch<SetStateAction<category.Model | null>>;
}

const FilterItem = (props: FilterItemProps) => {
  const onItemClick: MouseEventHandler<HTMLDivElement> = () => {
    props.setActiveCategory(props.item);
  };

  return (
    <div
      onClick={onItemClick}
      className={`${
        props.activeCategory?._id === props.item._id && 'text-green-600'
      } cursor-pointer transition`}
    >
      {props.item.title}
    </div>
  );
};

export default FilterItem;
