import { Text, StyleSheet, TouchableOpacity } from "react-native";

const FilterCard = (props) => {
  const filter = props.filter;
  return (
    <TouchableOpacity style={styles.container}>
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
