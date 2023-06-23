import { Image, StyleSheet, Text, View } from "react-native";
import { Colors } from "../../constants";
import { Ionicons } from "@expo/vector-icons";
import HospitalEntity from "../../entities/hospital";
import Button from "../../components/buttons/Button";
import { useActions } from "@dilane3/gx";
import { useNavigation, CommonActions } from "@react-navigation/native";

type HospitalProps = {
  hospital: HospitalEntity;
};

export default function Hospital({ hospital }: HospitalProps) {
  const navigation = useNavigation();

  // Global actions
  const { setCurrentLocation } = useActions("location");
  const { selectHospital } = useActions("hospitals");

  // Some handlers

  const handleSelectHospital = () => {
    setCurrentLocation({ lat: hospital.latitude, lng: hospital.longitude });
    selectHospital(hospital);

    navigation.dispatch(
      CommonActions.navigate({
        name: "Home",
      })
    );
  };

  console.log(hospital.images[0]);

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={{
            uri: `http://192.168.43.123:3333/hospitals/image/${hospital.images[0]}`,
          }}
          style={styles.image}
        />
      </View>

      <View style={styles.body}>
        <Text style={styles.name}>{hospital.name}</Text>
        <View style={styles.adressSection}>
          <Ionicons name="location-outline" size={24} color={Colors.text} />
          <Text style={styles.address}>{hospital.address}</Text>
        </View>

        <View style={styles.row}>
          <View style={styles.row}>
            {/* <View style={styles.icon}>
              <Ionicons name="heart-outline" size={24} color={Colors.text} />
              <Text style={styles.address}>60%</Text>
            </View> */}

            <View style={styles.icon}>
              <Ionicons name="car-outline" size={24} color={Colors.text} />
              <Text style={styles.address}>
                {(hospital.distance / 1000).toFixed(2)} km
              </Text>
            </View>
          </View>

          <View style={styles.badge}>
            <Text style={styles.badgeText}>{hospital.type}</Text>
          </View>
        </View>

        <View style={[styles.row, { marginTop: 20 }]}>
          <Button onPress={handleSelectHospital}>
            <Text style={styles.view}>View on map</Text>
          </Button>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "auto",
    paddingBottom: 10,
    backgroundColor: Colors.background,
  },

  imageContainer: {
    width: "100%",
    height: 250,
  },

  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },

  body: {
    padding: 20,
  },

  name: {
    fontSize: 24,
    fontFamily: "PoppinsBold",
    color: Colors.text,
  },

  adressSection: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },

  address: {
    fontSize: 16,
    fontFamily: "PoppinsRegular",
    color: Colors.gray,
    marginLeft: 10,
  },

  row: {
    flexDirection: "row",
    alignItems: "center",
  },

  icon: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 20,
  },

  badge: {
    backgroundColor: Colors.grayLight,
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 10,
    marginLeft: "auto",
  },

  badgeText: {
    fontSize: 12,
    fontFamily: "PoppinsRegular",
    color: Colors.primary,
  },

  view: {
    fontSize: 16,
    fontFamily: "PoppinsRegular",
    color: Colors.background,
  },
});
