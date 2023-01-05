import { ChangeEventHandler } from 'react';

interface SelectProps {
  name: 'category';
  items: { _id: string; title: string }[];
  onInputChange: ChangeEventHandler<HTMLSelectElement | HTMLInputElement>;
}

const Select = (props: SelectProps) => {
  return (
    <select
      defaultValue=""
      name={props.name}
      onChange={props.onInputChange}
      className="text-center bg-transparent outline-none"
    >
      <option value="">--- აირჩიე კატეგორია ---</option>
      {props.items.map((item) => (
        <option key={item._id} value={item._id}>
          {item.title}
        </option>
      ))}
    </select>
  );
};

export default Select;
