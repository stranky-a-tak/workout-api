import ExerciseCard from "./ExerciseCard";

const ExercisesContainer = ({ workoutExercises, navigation }) => {
  return (
    <>
      {workoutExercises &&
        workoutExercises.map((exercise) => {
          return (
            <ExerciseCard
              key={exercise.id}
              exercise={exercise}
              navigation={navigation}
            />
          );
        })}
    </>
  );
};

export default ExercisesContainer;
