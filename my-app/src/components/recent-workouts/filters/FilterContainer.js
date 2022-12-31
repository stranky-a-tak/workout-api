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
        <div className="flex justify-center items-center mb-5 space-x-4">
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
