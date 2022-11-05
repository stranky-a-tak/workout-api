import { View, StyleSheet } from "react-native";
import CardContainer from "../components/recent-workouts/CardContainer";

const RecentWorkouts = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <CardContainer navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 35,
  },
});

export default RecentWorkouts;
