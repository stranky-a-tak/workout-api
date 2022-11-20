import { useState } from "react";
import { View, StyleSheet } from "react-native";
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
        <View style={styles.filterContainer}>
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
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  filterContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginBottom: 40,
  },
});

export default FilterContainer;
