import { View, Text, StyleSheet } from "react-native";

const WorkoutCard = ({ exercise }) => {
  return (
    <View key={exercise.id} style={styles.card}>
      <Text style={styles.heading}>{exercise.name}</Text>
      {exercise.sets.map((set) => {
        return (
          <View key={set.id} style={styles.workoutRepsContainer}>
            <View style={{ marginRight: 15 }}>
              <Text style={styles.textWhite}>{set.value} Sets</Text>
            </View>
            <View>
              <Text style={styles.textWhite}>{set.rep.value} Reps</Text>
            </View>
            <View style={{ marginLeft: 25 }}>
              <Text style={styles.textWhite}>{set.weight} kg</Text>
            </View>
          </View>
        );
      })}
    </View>
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

  workoutRepsContainer: {
    display: "flex",
    flexDirection: "row",
    marginTop: 8,
  },

  textWhite: {
    color: "#ffffffff",
  },

  heading: {
    color: "#ffffffff",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default WorkoutCard;
