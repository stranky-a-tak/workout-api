import { Text, StyleSheet, TouchableOpacity } from "react-native";

const FilterCard = (props) => {
  const filter = props.filter;

  const filterByName = (name) => {
    //TODO: Implement filtering
    console.log(name);
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
