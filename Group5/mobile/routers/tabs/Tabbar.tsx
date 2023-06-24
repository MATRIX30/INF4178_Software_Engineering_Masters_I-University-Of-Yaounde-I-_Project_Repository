import { BottomTabNavigationEventMap } from "@react-navigation/bottom-tabs";
import { BottomTabDescriptorMap } from "@react-navigation/bottom-tabs/lib/typescript/src/types";
import {
  TabNavigationState,
  ParamListBase,
  NavigationHelpers,
} from "@react-navigation/native";
import { StyleSheet, Text, View } from "react-native";
import { Colors } from "../../constants";
import { Ionicons } from "@expo/vector-icons";
import TouchableSurface from "../../components/buttons/TouchableSurface";

type TabbarProps = {
  state: TabNavigationState<ParamListBase>;
  descriptors: BottomTabDescriptorMap;
  navigation: NavigationHelpers<ParamListBase, BottomTabNavigationEventMap>;
};

export default function Tabbar({ state, navigation }: TabbarProps) {
  const tabIndex = state.index;
  const tabName = state.routeNames[tabIndex];

  // Handlers
  const handleTabPress = (tabName: string) => {
    navigation.navigate(tabName);
  };

  return (
    <View style={styles.container}>
      <TouchableSurface rounded onPress={() => handleTabPress("Home")}>
        <View style={styles.tab}>
          <Ionicons
            name={tabName === "Home" ? "map" : "map-outline"}
            size={24}
            color={tabName === "Home" ? Colors.primary : Colors.text}
          />

          {/* <Text style={styles.tabTitle}>Map</Text> */}
        </View>
      </TouchableSurface>

      <View style={[styles.tab]}>
        <TouchableSurface
          rounded
          style={styles.tabCenter}
          onPress={() => handleTabPress("Criteria")}
          useForeground
        >
          <View style={styles.tabCenterBorder}>
            <View style={styles.tabCenterContent}>
              <Ionicons name="add" size={30} color="#fff" />
            </View>
          </View>
        </TouchableSurface>
      </View>

      <TouchableSurface rounded onPress={() => handleTabPress("Hospital")}>
        <View style={styles.tab}>
          <Ionicons
            name={tabName === "Hospital" ? "list" : "list-outline"}
            size={24}
            color={tabName === "Hospital" ? Colors.primary : Colors.text}
          />

          {/* <Text style={styles.tabTitle}>List</Text> */}
        </View>
      </TouchableSurface>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 60,
    backgroundColor: Colors.background,
    borderTopWidth: 1,
    borderTopColor: Colors.grayLight,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 40,
  },

  tab: {
    height: 50,
    width: 50,
    justifyContent: "center",
    alignItems: "center",
  },

  tabCenter: {
    position: "absolute",
    top: -30,
  },

  tabCenterContent: {
    width: 60,
    height: 60,
    borderRadius: 50,
    backgroundColor: Colors.primary,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 5,
    borderColor: Colors.background,
  },

  tabCenterBorder: {
    borderWidth: 1,
    borderColor: Colors.grayLight,
    borderRadius: 50,
  },

  tabTitle: {
    fontSize: 10,
    marginTop: 3,
  },
});
