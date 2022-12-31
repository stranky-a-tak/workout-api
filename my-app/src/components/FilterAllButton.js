const FilterAllButton = ({ cancelFilters }) => {
  return (
    <button onClick={cancelFilters}>
      <p>All</p>
    </button>
  );
};

export default FilterAllButton;
