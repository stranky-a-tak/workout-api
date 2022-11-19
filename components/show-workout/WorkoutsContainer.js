import WorkoutCard from "./WorkoutCard";

const WorkoutsContainer = ({ workoutExercises, navigation }) => {
  return (
    <>
      {workoutExercises &&
        workoutExercises.map((exercise) => {
          return (
            <WorkoutCard
              key={exercise.id}
              exercise={exercise}
              navigation={navigation}
            />
          );
        })}
    </>
  );
};

export default WorkoutsContainer;
