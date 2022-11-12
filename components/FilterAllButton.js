import { TouchableOpacity, Text, StyleSheet } from "react-native";

const FilterAllButton = ({ cancelFilters }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={cancelFilters}>
      <Text style={styles.text}>All</Text>
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

export default FilterAllButton;
