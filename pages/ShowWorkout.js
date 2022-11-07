import { useLayoutEffect } from "react";
import { ScrollView, Text, StyleSheet } from "react-native";

const ShowWorkout = ({ route, navigation }) => {
  const workout = route.params;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: workout.name,
    });
  });

  return (
    <ScrollView style={styles.container}>
      <Text>Jako</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#000000",
    paddingTop: 20,
    paddingBottom: 50,
    paddingHorizontal: 15,
  },
});

export default ShowWorkout;
