import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Recent from "./pages/workouts/Recent";
import Show from "./pages/workouts/Show";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
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
          cardStyle: {
            backgroundColor: "#000000",
          },
          headerTintColor: "#fff",
        }}
      >
        <Stack.Screen
          name="Home"
          options={{ title: "Recent Workouts" }}
          component={Recent}
        />
        <Stack.Screen name="Show" component={Show} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
