import { View, Text, StyleSheet } from "react-native";
import Input from "./Input";

const WorkoutCard = ({ exercise }) => {
  //TODO: Make the heading as a input as well?
  const saveChanges = async (e, defaultValue, id, isRep, isWeight) => {
    if (e.target.value == defaultValue) {
      return false;
    }

    //TODO: Maybe refactor this? this looks a bit ugly
    const value = parseInt(
      isRep === true || (isRep === false && isWeight === false)
        ? e.target.value
        : 0
    );
    const repId = isRep === true ? id : 0;
    const setId = isRep === false ? id : 0;
    const weight = parseInt(isWeight === true ? e.target.value : 0);

    console.log(value, repId, setId, weight);

    //TODO: Do something with the response
    const response = await fetch(
      `http://127.0.0.1:3000/workout/${exercise.workout_id}/user/1`,
      {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          value: value,
          rep_id: repId,
          set_id: setId,
          weight: weight,
        }),
      }
    );
  };

  return (
    <View style={styles.card}>
      <Text style={styles.heading}>{exercise.name}</Text>
      {exercise.sets.map((set) => {
        return (
          <View key={set.id} style={styles.workoutRepsContainer}>
            <View
              style={{ marginRight: 25, display: "flex", flexDirection: "row" }}
            >
              <Input
                defaultValue={set.value}
                saveChanges={saveChanges}
                id={set.id}
              />
              <Text style={styles.textWhite}>Sets</Text>
            </View>
            <View
              style={{ marginRight: 25, display: "flex", flexDirection: "row" }}
            >
              <Input
                defaultValue={set.rep.value}
                saveChanges={saveChanges}
                id={set.rep.id}
                isRep={true}
              />
              <Text style={styles.textWhite}>Reps</Text>
            </View>
            <View
              style={{ marginLeft: 35, display: "flex", flexDirection: "row" }}
            >
              <Input
                defaultValue={set.weight}
                saveChanges={saveChanges}
                id={set.id}
                isWeight={true}
              />
              <Text style={styles.textWhite}>kg</Text>
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
    minHeight: 100,
    paddingVertical: 15,
    paddingHorizontal: 20,
    marginBottom: 30,
  },

  workoutRepsContainer: {
    display: "flex",
    flexDirection: "row",
    marginTop: 15,
  },

  textWhite: {
    color: "#ffffffff",
    fontSize: 18,
  },

  heading: {
    color: "#ffffffff",
    fontSize: 22,
    fontWeight: "bold",
  },
});

export default WorkoutCard;
