interface Props {
  title: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  options: {
    text: string;
    value: string;
  }[];
}

const Select = ({ title, options, onChange }: Props) => {
  return (
    <select
      name=""
      id=""
      className="w-72 h-10 px-2 outline-none bg-transparent border text-white border-white rounded-lg uppercase
      font-bold"
      onChange={onChange}
    >
      <option className="bg-gray-500 border border-white" value="">
        {title}
      </option>
      {options.map((op) => (
        <option className="bg-gray-500 border border-white" value={op.value}>
          {op.text}
        </option>
      ))}
    </select>
  );
};

export default Select;
