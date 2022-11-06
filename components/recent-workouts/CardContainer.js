import { useEffect, useState } from "react";
import { View, ActivityIndicator, StyleSheet } from "react-native";
import Card from "./Card";
import FilterCard from "./FilterCard";
import NoRecentWorkouts from "./NoRecentWorkouts";

const CardContainer = () => {
  const [workouts, setWorkouts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [filters, setFilters] = useState([]);

  const fetchWorkouts = async () => {
    //TODO:Dynamic user
    const reponse = await fetch("http://127.0.0.1:3000/workouts/user/1");

    const body = await reponse.json();
    setWorkouts(body.workouts);
    setFilters(body.filters);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchWorkouts();
  }, [JSON.stringify(workouts)]);

  return (
    <View>
      {isLoading === false && filters.length !== 0 && (
        <View style={styles.filterContainer}>
          {filters.map((filter) => (
            <FilterCard key={filter.name} filter={filter} />
          ))}
        </View>
      )}
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        workouts.map((workout) => <Card key={workout.id} workout={workout} />)
      )}

      {isLoading === false && workouts.length === 0 && <NoRecentWorkouts />}
    </View>
  );
};

const styles = StyleSheet.create({
  filterContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginBottom: 40,
  },
});

export default CardContainer;
