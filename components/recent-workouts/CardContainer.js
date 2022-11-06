import { useEffect, useState } from "react";
import { View, ActivityIndicator } from "react-native";
import Card from "./Card";

const CardContainer = () => {
  const [workouts, setWorkouts] = useState([]);

  const fetchWorkouts = async () => {
    //TODO:Dynamic user
    const reponse = await fetch("http://127.0.0.1:3000/workouts/user/1");

    const body = await reponse.json();
    setWorkouts(body.workouts);
  };

  useEffect(() => {
    fetchWorkouts();
  }, [JSON.stringify(workouts)]);

  return (
    <View>
      {workouts.length > 0 ? (
        workouts.map((workout) => <Card key={workout.id} workout={workout} />)
      ) : (
        <ActivityIndicator />
      )}
    </View>
  );
};

export default CardContainer;
