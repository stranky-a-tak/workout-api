import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./pages/workouts/Home";
import Login from "./pages/workouts/Login";
import Recent from "./pages/workouts/Recent";
import Register from "./pages/workouts/Register";
import Show from "./pages/workouts/Show";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        //TODO: Check if user is logged and render between home/recent
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
          name="Recent"
          options={{ title: "Recent Workouts" }}
          component={Recent}
        />
        <Stack.Screen name="Show" component={Show} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
