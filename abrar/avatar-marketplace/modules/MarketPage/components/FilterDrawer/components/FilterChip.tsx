import { useState } from "react";
interface Props {
  label: string;
}

const FilterChip = ({ label }: Props) => {
  const [selected, setSelected] = useState(false);
  return (
    <button
      className={`bg-lightGreyBg rounded-lg px-2.5 py-1.5 font-medium text-xs border border-lightGreyBg ${
        selected && "border-purpleAccent text-purpleAccent bg-indigo-200"
      }`}
      onClick={() => setSelected((prev) => !prev)}
    >
      {label}
    </button>
  );
};

export default FilterChip;
