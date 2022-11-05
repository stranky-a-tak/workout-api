import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const Card = (props) => {
  return (
    <TouchableOpacity
      style={styles.card}
      onPress={() => props.navigation.navigate("Show")}
    >
      <View style={styles.cardHeadingContainer}>
        <Text style={styles.cardHeading}>Upper</Text>
        <Text style={styles.cardTimeStamp}>25.01.2022</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#212121",
    borderRadius: 15,
    height: 100,
    paddingVertical: 15,
    paddingHorizontal: 12,
    marginBottom: 30,
  },
  cardHeadingContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  cardHeading: {
    fontSize: 22,
    fontWeight: 500,
    color: "#ffffff",
  },
  cardTimeStamp: {
    fontSize: 18,
    fontWeight: 500,
    color: "#ffffff",
  },
});

export default Card;
