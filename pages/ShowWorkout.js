import { useEffect, useState } from "react";
import { ScrollView, Text, StyleSheet, View } from "react-native";

const ShowWorkout = ({ route, navigation }) => {
  const workout = route.params;
  const [workoutExercises, setWokroutExercises] = useState([]);

  const fetchWorkoutAdditionalData = async () => {
    //TODO:Dynamic user
    const response = await fetch("http://127.0.0.1:3000/workout/1/user/1");

    const body = await response.json();
    setWokroutExercises(body.workout.exercises);
  };

  useEffect(() => {
    navigation.setOptions({
      title: workout.name,
    });
    fetchWorkoutAdditionalData();
  }, []);

  return (
    <ScrollView style={styles.container}>
      {workoutExercises && (
        <View>
          {workoutExercises.map((exercise) => {
            return (
              <View key={exercise.id}>
                <Text style={styles.textWhite}>{exercise.name}</Text>
                <View>
                  {exercise.sets.map((set) => {
                    return (
                      <Text key={set.id} style={styles.textWhite}>
                        {set.value}
                      </Text>
                    );
                  })}
                </View>
                <View>
                  {exercise.reps.map((rep) => {
                    return (
                      <Text key={rep.id} style={styles.textWhite}>
                        {rep.value}
                      </Text>
                    );
                  })}
                </View>
              </View>
            );
          })}
        </View>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#000000",
    paddingTop: 20,
    paddingBottom: 50,
    paddingHorizontal: 15,
  },
  textWhite: {
    color: "#ffffffff",
  },
});

export default ShowWorkout;
