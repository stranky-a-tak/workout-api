import WorkoutCard from "./WorkoutCard";

const WorkoutsContainer = ({ workoutExercises }) => {
  return (
    <>
      {workoutExercises &&
        workoutExercises.map((exercise) => {
          return <WorkoutCard key={exercise.id} exercise={exercise} />;
        })}
    </>
  );
};

export default WorkoutsContainer;
