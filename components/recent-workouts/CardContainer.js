import { useEffect, useState } from "react";
import { View, ActivityIndicator } from "react-native";
import Card from "./Card";
import FilterContainer from "./filters/FilterContainer";
import NoRecentWorkouts from "./NoRecentWorkouts";

const CardContainer = () => {
  const [workouts, setWorkouts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [filters, setFilters] = useState([]);

  const fetchWorkouts = async () => {
    //TODO:Dynamic user
    const response = await fetch("http://127.0.0.1:3000/workouts/user/1");

    const body = await response.json();
    setWorkouts(body.workouts);
    setFilters(body.filters);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchWorkouts();
  }, []);

  return (
    <View>
      <FilterContainer
        isLoading={isLoading}
        filters={filters}
        setWorkouts={setWorkouts}
        workouts={workouts}
        fetchWorkouts={fetchWorkouts}
      />

      {isLoading ? (
        <ActivityIndicator />
      ) : (
        workouts.map((workout) => <Card key={workout.id} workout={workout} />)
      )}

      {isLoading === false && workouts.length === 0 && <NoRecentWorkouts />}
    </View>
  );
};

export default CardContainer;
