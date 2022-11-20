import { Text, TouchableOpacity, StyleSheet } from "react-native";
import styles from "../../../styles/styles";

const FilterCard = ({ filter, setWorkouts, setIsFiltered }) => {
  const filterByName = async (name) => {
    //TODO: User
    const response = await fetch(
      `http://127.0.0.1:3000/workouts/user/1/filter/${name}`
    );

    const body = await response.json();
    setWorkouts(body.workouts);
    setIsFiltered(true);
  };

  return (
    <TouchableOpacity
      style={style.filterContainer}
      onPress={() => {
        filterByName(filter.name);
      }}
    >
      <Text style={styles.textWhite}>{filter.name}</Text>
    </TouchableOpacity>
  );
};

const style = StyleSheet.create({
  filterContainer: {
    backgroundColor: "#212121",
    padding: 15,
    borderRadius: 40,
  },
});

export default FilterCard;
