import ExerciseCard from "./ExerciseCard";

const ExercisesContainer = ({ workoutExercises }) => {
  return (
    <>
      {workoutExercises &&
        workoutExercises.map((exercise) => {
          return (
            <ExerciseCard
              key={exercise.id}
              exercise={exercise}
            />
          );
        })}
    </>
  );
};

export default ExercisesContainer;
