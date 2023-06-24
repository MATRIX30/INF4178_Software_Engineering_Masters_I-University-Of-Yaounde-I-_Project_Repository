import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { Fragment } from "react";
import Navigator from "./routers";
import { useFonts } from "expo-font";
import store from "./gx/store";
import GxProvider from "@dilane3/gx";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function App() {
  // Load fonts before rendering the app.
  const [loaded, error] = useFonts({
    PoppinsRegular: require("./assets/fonts/Poppins-Regular.ttf"),
    PoppinsBold: require("./assets/fonts/Poppins-Bold.ttf"),
    PoppinsMedium: require("./assets/fonts/Poppins-Medium.ttf"),
    PoppinsLight: require("./assets/fonts/Poppins-Light.ttf"),
  });

  return (
    <GxProvider store={store}>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <Fragment>
          {loaded && <Navigator />}

          <StatusBar style="auto" backgroundColor="transparent" />
        </Fragment>
      </GestureHandlerRootView>
    </GxProvider>
  );
}
