import { useLayoutEffect } from "react";
import { Text, View } from "react-native";

const ShowWorkout = ({ navigation }) => {
  //Dynamic header title
  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Upper",
    });
  });

  return (
    <View>
      <Text>Jako</Text>
    </View>
  );
};

export default ShowWorkout;
