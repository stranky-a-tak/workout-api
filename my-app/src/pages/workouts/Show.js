import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import LoadingSpinner from "../../components/LoadingSpinner";
import ExercisesContainer from "../../components/show-workout/ExercisesContainer";

const Show = () => {
  const params = useParams();
  const [workout, setWorkout] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchWorkoutAdditionalData = async () => {
    setIsLoading(true);
    //TODO:Dynamic user
    const response = await fetch(
      `http://127.0.0.1:3000/workout/${params.id}/user/1`
    );

    const body = await response.json();
    setWorkout(body.workout);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchWorkoutAdditionalData();
  }, []);

  return (
    <>
      {isLoading && (
        <div className="container-center">
          <LoadingSpinner />
        </div>
      )}
      <div className="container-full">
        <p className="text-white text-lg text-center mb-5">{workout.name}</p>
        <ExercisesContainer workoutExercises={workout.exercises} />
      </div>
    </>
  );
};

export default Show;
