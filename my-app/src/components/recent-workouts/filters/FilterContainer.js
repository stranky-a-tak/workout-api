import { useState } from "react";
import FilterAllButton from "../../FilterAllButton";
import FilterCard from "./FilterCard";

const FilterContainer = ({
  isLoading,
  filters,
  setWorkouts,
  fetchWorkouts,
}) => {
  const [isfiltered, setIsFiltered] = useState(false);
  const cancelFilters = () => {
    fetchWorkouts();
    setIsFiltered(false);
  };

  return (
    <>
      {isLoading === false && filters.length !== 0 && (
        <div>
          {isfiltered === true && (
            <FilterAllButton cancelFilters={cancelFilters} />
          )}

          {filters.map((filter) => (
            <FilterCard
              key={filter.name}
              filter={filter}
              setWorkouts={setWorkouts}
              setIsFiltered={setIsFiltered}
            />
          ))}
        </div>
      )}
    </>
  );
};

export default FilterContainer;
