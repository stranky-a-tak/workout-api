import { useEffect, useState } from "react";
import { ScrollView } from "react-native";
import ExercisesContainer from "../../components/show-workout/ExercisesContainer";
import styles from "../../styles/styles";

const Show = ({ route, navigation }) => {
  const workout = route.params;
  const [workoutExercises, setWokroutExercises] = useState([]);

  const fetchWorkoutAdditionalData = async () => {
    //TODO:Dynamic user
    const response = await fetch(
      `http://127.0.0.1:3000/workout/${workout.id}/user/1`
    );

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
      <ExercisesContainer
        workoutExercises={workoutExercises}
        navigation={navigation}
      />
    </ScrollView>
  );
};

export default Show;
