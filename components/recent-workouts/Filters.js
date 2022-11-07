import { View, StyleSheet } from "react-native";
import FilterCard from "./FilterCard";

const FilterContainer = ({ isLoading, filters }) => {
  return (
    <>
      {isLoading === false && filters.length !== 0 && (
        <View style={styles.filterContainer}>
          {filters.map((filter) => (
            <FilterCard key={filter.name} filter={filter} />
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
