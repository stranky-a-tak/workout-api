const FilterAllButton = ({ cancelFilters }) => {
  return (
    <button onPress={cancelFilters}>
      <p>All</p>
    </button>
  );
};

export default FilterAllButton;
