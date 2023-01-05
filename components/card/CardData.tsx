import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import * as categoryActions from '../../store/category';

interface CardDataProps {
  category: string;
  place: string;
  name: string;
  price: string;
}

const CardData = (props: CardDataProps) => {
  const stateCategory = useSelector((state: RootState) =>
    categoryActions.selectCategoryById(state, props.category)
  );

  return (
    <div className="space-y-1 p-5 rounded-b-xl border border-gray-500">
      <span>{stateCategory?.title}</span>
      <h5>{props.place}</h5>
      <h3 className="text-xl">{props.name}</h3>
      <h4 className="text-xl font-bold space-x-1">
        <span>{props.price}</span>
        <span>₾</span>
      </h4>
    </div>
  );
};

export default CardData;
