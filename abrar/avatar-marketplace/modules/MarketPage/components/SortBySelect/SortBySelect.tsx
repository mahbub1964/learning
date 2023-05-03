const SortBySelect = () => {
  return (
    <div className="flex py-2 px-3 items-center gap-2">
      <label className="text-xs">Sort by:</label>
      <select className="select select-xs select-bordered">
        <option>Featured</option>
        <option>Price: Low to High</option>
        <option>Price: High to Low</option>
        <option>Customer Review</option>
        <option>New</option>
        <option>Polygon: Low to High</option>
        <option>Polygon: High to Low</option>
      </select>
    </div>
  );
};

export default SortBySelect;
