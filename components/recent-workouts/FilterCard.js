import { Text, StyleSheet, TouchableOpacity } from "react-native";

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
      style={styles.container}
      onPress={() => {
        filterByName(filter.name);
      }}
    >
      <Text style={styles.text}>{filter.name}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#212121",
    padding: 15,
    borderRadius: 40,
  },

  text: {
    color: "white",
  },
});

export default FilterCard;
