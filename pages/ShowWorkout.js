import { useLayoutEffect } from "react";
import { ScrollView, Text, StyleSheet } from "react-native";

const ShowWorkout = ({ navigation }) => {
  //Dynamic header title
  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Upper",
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
