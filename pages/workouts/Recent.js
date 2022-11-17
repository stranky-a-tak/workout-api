import { ScrollView, StyleSheet } from "react-native";
import CardContainer from "../../components/recent-workouts/CardContainer";

const Recent = () => {
  return (
    <ScrollView style={styles.container}>
      <CardContainer />
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

export default Recent;
