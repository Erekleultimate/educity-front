import { Dispatch, MouseEventHandler, SetStateAction } from 'react';

interface FilterItemProps {
  item: { _id: string; title: string };
  setActiveCategory: Dispatch<SetStateAction<category.Model | null>>;
}

const FilterItem = (props: FilterItemProps) => {
  const onItemClick: MouseEventHandler<HTMLDivElement> = () => {
    props.setActiveCategory(props.item);
  };

  return (
    <div onClick={onItemClick} className="cursor-pointer">
      {props.item.title}
    </div>
  );
};

export default FilterItem;
