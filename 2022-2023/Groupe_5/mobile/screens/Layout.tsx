import { useState, useEffect } from "react";
import { StyleSheet, View } from "react-native";
import * as Location from "expo-location";
import { useActions } from "@dilane3/gx"
import { useLoadHospitals } from "../hooks/useLoadHospitals";

type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  // Local state
  const [errorMsg, setErrorMsg] = useState("");

  // Global state
  const { setLocation } = useActions("location");

  // Load hospitals
  useLoadHospitals();

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();

      console.log({ status })

      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      console.log("hello");
      

      let location = await Location.getLastKnownPositionAsync()

      if (!location) return;
      
      let { latitude, longitude } = location.coords

      console.log(location)
      
      const [address] = await Location.reverseGeocodeAsync({
        latitude,
        longitude
      });

      setLocation({
        lat: latitude,
        lng: longitude,
        city: address.city
      });

      console.log({
        location,
        city: address.city
      })
    })();
  }, [errorMsg]);

  return <View style={styles.container}>{children}</View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
