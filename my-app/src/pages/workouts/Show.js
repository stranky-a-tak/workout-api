import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom'
import ExercisesContainer from "../../components/show-workout/ExercisesContainer";

const Show = () => {
  const params = useParams();
  const [workout, setWorkout] = useState([]);

  const fetchWorkoutAdditionalData = async () => {
    //TODO:Dynamic user
    const response = await fetch(
      `http://127.0.0.1:3000/workout/${params.id}/user/1`
    );

    const body = await response.json();
    setWorkout(body.workout);
  };

  useEffect(() => {
    fetchWorkoutAdditionalData();
  }, []);

  return (
    //TODO: Add loading state

    <div className="container-full">
      <p>{ workout.name }</p>
      <ExercisesContainer
        workoutExercises={workout.exercises}
      />
    </div>
  );
};

export default Show;
