import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import CriteriaScreen from "../../screens/criteria"
import HomeScreen from "../../screens/home"
import HospitalsScreen from "../../screens/hospitals"
import Tabbar from "./Tabbar"

const Tab = createBottomTabNavigator()

export default function TabNavigator() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}
      tabBar={(props) => <Tabbar {...props} />}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Hospital" component={HospitalsScreen} />
      <Tab.Screen name="Criteria" component={CriteriaScreen} />
    </Tab.Navigator>
  )
}