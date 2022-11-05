import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ScrollView, StyleSheet } from "react-native";
import RecentWorkouts from "./pages/RecentWorkouts";
import ShowWorkout from "./pages/ShowWorkout";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <ScrollView style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{
            headerStyle: {
              backgroundColor: "#000000",
            },
            headerTitleStyle: {
              fontSize: 30,
            },
            headerTintColor: "#fff",
          }}
        >
          <Stack.Screen
            name="Home"
            options={{ title: "Recent Workouts" }}
            component={RecentWorkouts}
          />
          <Stack.Screen name="Show" component={ShowWorkout} />
        </Stack.Navigator>
      </NavigationContainer>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000",
    paddingTop: 80,
    paddingHorizontal: 40,
  },
});
