import { View, StyleSheet, Text } from "react-native";

const NoRecentWorkouts = () => {
  return (
    <View>
      <Text style={styles.heading}>You have no recent wokrouts.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  heading: {
    marginTop: 60,
    fontSize: 32,
    textAlign: "center",
    color: "white",
  },
});

export default NoRecentWorkouts;
