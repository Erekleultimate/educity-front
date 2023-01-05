interface FilterSecitonProps {
  title: string;
  items: { _id: string; title: string }[];
}

const FilterSection = (props: FilterSecitonProps) => {
  return (
    <div className="space-y-5">
      <h3 className="font-bold text-lg">{props.title}</h3>
      <div className="space-y-1">
        {props.items.map((item) => (
          <div key={item._id}>{item.title}</div>
        ))}
      </div>
    </div>
  );
};

export default FilterSection;
