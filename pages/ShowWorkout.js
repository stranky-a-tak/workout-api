import { useEffect, useState } from "react";
import { ScrollView, StyleSheet } from "react-native";
import WorkoutsContainer from "../components/show-workout/WorkoutsContainer";

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
      <WorkoutsContainer workoutExercises={workoutExercises} />
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
});

export default ShowWorkout;
