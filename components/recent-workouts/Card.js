import { useNavigation } from "@react-navigation/native";
import { Text, TouchableOpacity, View, StyleSheet } from "react-native";
import moment from "moment";
import styles from "../../styles/styles";

const Card = (props) => {
  const navigation = useNavigation();
  const workout = props.workout;

  return (
    <TouchableOpacity
      style={style.workoutCard}
      onPress={() => navigation.navigate("Show", workout)}
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

const style = StyleSheet.create({
  workoutCard: {
    backgroundColor: "#212121",
    borderRadius: 15,
    height: 100,
    paddingVertical: 15,
    paddingHorizontal: 20,
    marginBottom: 30,
  },
});

export default Card;
