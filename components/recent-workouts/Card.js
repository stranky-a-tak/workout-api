import { useNavigation } from "@react-navigation/native";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import moment from "moment";

const Card = (props) => {
  const navigation = useNavigation();
  const workout = props.workout;

  return (
    <TouchableOpacity
      style={styles.card}
      onPress={() => navigation.navigate("Show")}
    >
      <View style={styles.cardHeadingContainer}>
        <Text style={styles.cardHeading}>{workout.name}</Text>
        <Text style={styles.cardTimeStamp}>
          {moment(workout.created_at).format("MMMM D")}
        </Text>
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
    paddingHorizontal: 20,
    marginBottom: 30,
  },
  cardHeadingContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  cardHeading: {
    fontSize: 26,
    color: "#ffffff",
  },
  cardTimeStamp: {
    fontSize: 20,
    color: "#ffffff",
  },
});

export default Card;
