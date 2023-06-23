import { StyleSheet, Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Layout from "../Layout";
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";
import MapViewDirections from "react-native-maps-directions";
import { API_KEY, Colors } from "../../constants";
import { Ionicons } from "@expo/vector-icons";
import { LocationState } from "../../gx/signals/location";
import { useSignal, useActions } from "@dilane3/gx";
import { Dimensions } from "react-native";
import { HospitalState } from "../../gx/signals/hospitals";
import { useRef, useEffect, useState } from "react";
import { Image } from "react-native";
import TouchableSurface from "../../components/buttons/TouchableSurface";
import HospitalResultItem from "./HospitalResultItem";
import { ScrollView } from "react-native-gesture-handler";

const locationIcon = require("../../assets/images/location.png");

export default function HomeScreen() {
  const { width, height } = Dimensions.get("window");

  const ASPECT_RATIO = width / height;
  const LATITUDE_DELTA = 0.0922;

  // Global state
  const {
    lat: latitude,
    lng: longitude,
    city,
    currentLocation,
  } = useSignal<LocationState>("location");
  const { hospitals, selectedHospital, ahpResults } = useSignal<HospitalState>("hospitals");

  const { setCurrentLocation } = useActions("location");
  const { selectHospital, setAhpResults } = useActions("hospitals");

  // Local state
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState<
    HospitalState["hospitals"]
  >([]);

  const mapRef = useRef<MapView>(null);

  // Make a focus on a marker
  useEffect(() => {
    if (currentLocation) {
      focusOnMarker(currentLocation);
    }
  }, [currentLocation]);

  useEffect(() => {
    if (search.length > 0) {
      handleSearch();
    }
  }, [search]);

  useEffect(() => {
    if (ahpResults.length > 0) {
      setSearch("Search base on AHP")
    }
  }, [ahpResults])

  // Some handlers

  const focusOnMarker = (coordinate: { lat: number; lng: number }) => {
    if (mapRef.current && coordinate) {
      mapRef.current.animateToRegion({
        latitude: coordinate.lat,
        longitude: coordinate.lng,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LATITUDE_DELTA * ASPECT_RATIO,
      });
    }
  };

  const handleSetCurrentUserLocation = () => {
    setCurrentLocation({ lat: latitude, lng: longitude });
  };

  const handleSearchChange = (text: string) => {
    setSearch(text);
  };

  const handleClose = () => {
    setSearch("");

    setAhpResults([]);
  };

  const handleSearch = () => {
    const results = hospitals.filter((hospital) =>
      hospital.name.toLowerCase().includes(search.toLowerCase())
    );

    setSearchResults(results);
  };

  const handleSelectHospital = (
    hospital: HospitalState["selectedHospital"]
  ) => {
    if (hospital) {
      selectHospital(hospital);
      setSearch("");
      setCurrentLocation({ lat: hospital.latitude, lng: hospital.longitude });
    }
  };

  return (
    <Layout>
      <View style={styles.container}>
        <View style={styles.searchContainer}>
          <TextInput
            placeholder="Search hospitals"
            style={styles.searchInput}
            value={search}
            onChangeText={handleSearchChange}
          />

          <Ionicons
            name="ios-search"
            size={24}
            color={Colors.text}
            style={styles.searchIcon}
          />

          {search.length > 0 && (
            <>
              <TouchableSurface
                rounded
                useForeground
                onPress={handleClose}
                style={styles.close}
              >
                <View
                  style={{
                    width: 30,
                    height: 30,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Ionicons
                    name="close-circle-outline"
                    size={24}
                    color={Colors.red}
                  />
                </View>
              </TouchableSurface>

              <View style={styles.searchResults}>
                <ScrollView>
                  {searchResults.map((hospital) => (
                    <TouchableSurface
                      useForeground
                      onPress={() => handleSelectHospital(hospital)}
                      key={hospital.id}
                    >
                      <HospitalResultItem
                        name={hospital.name}
                        address={hospital.city}
                      />
                    </TouchableSurface>
                  ))}
                </ScrollView>
              </View>
            </>
          )}
        </View>

        <MapView
          ref={mapRef}
          region={{
            latitude,
            longitude,
            latitudeDelta: LATITUDE_DELTA,
            longitudeDelta: LATITUDE_DELTA * ASPECT_RATIO,
          }}
          style={styles.map}
          provider={PROVIDER_GOOGLE}
        >
          <Marker
            coordinate={{ latitude, longitude }}
            title={"Your location"}
            description={"You are here"}
            pinColor={"blue"}
          />

          {hospitals.map((hospital, index) => (
            <Marker
              key={index}
              coordinate={{
                latitude: hospital.latitude,
                longitude: hospital.longitude,
              }}
              title={hospital.name}
              description={hospital.notice}
            />
          ))}

          {selectedHospital && (
            <MapViewDirections
              origin={{ latitude, longitude }}
              destination={{
                latitude: selectedHospital.latitude,
                longitude: selectedHospital.longitude,
              }}
              apikey={API_KEY}
              strokeWidth={3}
              strokeColor="#3e4bff"
            />
          )}
        </MapView>

        <TouchableSurface
          rounded
          style={{
            position: "absolute",
            bottom: 20,
            right: 20,
            zIndex: 10,
          }}
          useForeground
          onPress={handleSetCurrentUserLocation}
        >
          <View style={styles.locationIcon}>
            <Image style={styles.locationImage} source={locationIcon} />
          </View>
        </TouchableSurface>
      </View>
    </Layout>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "relative",
    flex: 1,
  },

  map: {
    width: "100%",
    height: "100%",
  },

  searchContainer: {
    position: "absolute",
    top: 50,
    left: 0,
    width: "100%",
    alignItems: "center",
    zIndex: 10,
  },

  searchInput: {
    width: "90%",
    height: 50,
    backgroundColor: Colors.background,
    borderRadius: 50,
    fontSize: 15,
    paddingHorizontal: 50,
    elevation: 2,
    fontFamily: "PoppinsRegular",
  },

  searchIcon: {
    position: "absolute",
    left: 30,
    top: 10,
  },

  close: {
    position: "absolute",
    right: 25,
    top: 10,
  },

  searchResults: {
    width: Dimensions.get("window").width - 40,
    // height: 300,
    minHeight: 50,
    maxHeight: 300,
    backgroundColor: Colors.background,
    borderRadius: 10,
    marginTop: 10,
    elevation: 2,
    overflow: "scroll",
  },

  locationIcon: {
    backgroundColor: Colors.background,
    borderRadius: 50,
    padding: 10,
    elevation: 2,
  },

  locationImage: {
    width: 30,
    height: 30,
  },
});
