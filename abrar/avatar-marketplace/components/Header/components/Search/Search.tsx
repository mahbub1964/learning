import {AiOutlineSearch} from 'react-icons/ai'

const Search = () => {
  return (
    <div className="input-group input-group-sm">
      <input
        type="text"
        placeholder="Search…"
        className="input-sm w-full input-bordered"
      />
      <button className="btn btn-sm btn-square bg-greyBg hover:bg-neutral-800">
        <AiOutlineSearch className="h-5 w-5"/>
      </button>
    </div>
  );
};
export default Search;
