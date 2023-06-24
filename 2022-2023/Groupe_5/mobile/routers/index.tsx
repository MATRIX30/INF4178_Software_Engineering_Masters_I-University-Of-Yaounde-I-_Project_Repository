import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Text, View } from "react-native";
import HomeScreen from "../screens/home";
import WelcomeScreen from "../screens/welcome";
import TabNavigator from "./tabs";

const Stack = createNativeStackNavigator();

const Example = () => {
  return (
    <View>
      <Text>Hello</Text>
    </View>
  );
};

export default function Navigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Welcome"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="App" component={TabNavigator} />
        <Stack.Screen name="Hospital" component={HomeScreen} />
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
