import { Dispatch, SetStateAction } from "react";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";

interface Props {
  noOfPages: number;
  currentPage: number;
  setCurrentPage: Dispatch<SetStateAction<number>>;
}

const PaginationButtons = ({
  noOfPages,
  currentPage,
  setCurrentPage,
}: Props) => {
  const pageNumbers = [];
  for (let i = 1; i <= noOfPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="flex gap-1 items-center">
      <button
        onClick={() => setCurrentPage((prev) => (prev > 1 ? prev - 1 : prev))}
      >
        <IoChevronBack />
      </button>
      {pageNumbers.map((number) => (
        <button
          className={`text-lg font-medium px-2 py-1 hover:bg-neutral-400 ${number === currentPage && 'bg-lightGreyBg'}`}
          key={number}
          onClick={() => setCurrentPage(number)}
        >
          {number}
        </button>
      ))}
      <button
        onClick={() =>
          setCurrentPage((prev) => (prev < noOfPages ? prev + 1 : prev))
        }
      >
        <IoChevronForward />
      </button>
    </div>
  );
};

export default PaginationButtons;
