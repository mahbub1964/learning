import { BsCartPlus } from "react-icons/bs";

const AddToCartButton = () => {
  return (
    <button
      className="bg-purpleAccent text-white w-16 h-7 rounded-lg flex items-center gap-2 justify-center hover:bg-indigo-800 active:scale-95 transition-all"
      onClick={(e) => {
        e.stopPropagation();
        e.preventDefault();
      }}
    >
      <BsCartPlus />
      <p className="font-medium text-xs">Add</p>
    </button>
  );
};

export default AddToCartButton;
