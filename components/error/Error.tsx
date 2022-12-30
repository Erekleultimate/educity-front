import { useSelector } from 'react-redux';
import * as errorActions from '../../store/error';

const Error = () => {
  const error = useSelector(errorActions.selectError);

  return (
    <div className="h-12 flex items-center text-red-700 font-bold">{error}</div>
  );
};

export default Error;
