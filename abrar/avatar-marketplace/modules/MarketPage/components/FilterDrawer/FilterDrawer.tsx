import { useState } from "react";
import { HiChevronDown } from "react-icons/hi";
import { filterOptions } from "../Sidebar/constants/filterOptions";
import FilterChip from "./components/FilterChip";

const FilterDrawer = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <button
        className="flex items-center justify-center px-3 text-purpleAccent text-sm border-l"
        onClick={() => {
          console.log("open");
          setIsOpen(true);
        }}
      >
        Filters{" "}
        <HiChevronDown
          className="ml-2 transition-all"
          style={{ transform: isOpen ? "rotate(180deg)" : "rotate(0deg)" }}
        />
      </button>
      <div
        className={`bg-black opacity-20 fixed top-0 left-0 h-screen w-screen z-10 ${
          !isOpen && "hidden"
        }`}
        onClick={() => {
          setIsOpen(false);
        }}
      />
      <div
        className={`bg-white fixed bottom-0 left-0 w-screen z-20 transition-all rounded-t-2xl p-4 flex flex-col gap-2  overflow-y-auto`}
        style={{
          height: "70vh",
          transform: isOpen ? "translateY(0px)" : "translateY(70vh)",
        }}
      >
        <div className="flex justify-between items-center">
          <p className="font-medium">Filter results</p>
          <button className="text-purpleAccent text-sm font-medium p-2" onClick={()=>{setIsOpen(false)}}>
            Close
          </button>
        </div>
        {filterOptions.map((filterGroup) => {
          return (
            <div key={filterGroup.id} className="border-b flex flex-col">
              <p className="text-sm">{filterGroup.label}</p>
              <div className="flex flex-wrap gap-2 pt-2 pb-4">
                {filterGroup.options.map((option) => {
                  return <FilterChip label={option.label} key={option.id} />;
                })}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default FilterDrawer;
