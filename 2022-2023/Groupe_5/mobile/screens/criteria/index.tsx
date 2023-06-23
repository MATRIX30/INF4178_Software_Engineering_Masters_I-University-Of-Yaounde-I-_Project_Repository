import { useActions, useSignal } from "@dilane3/gx";
import { useNavigation, CommonActions } from "@react-navigation/native";
import { useRef, useState } from "react";
import {
  StyleSheet,
  Text,
  ScrollView,
  View,
  ActivityIndicator,
} from "react-native";
import Animated, {
  useAnimatedScrollHandler,
  useSharedValue,
} from "react-native-reanimated";
import { SafeAreaView } from "react-native-safe-area-context";
import { getBestHospitals } from "../../api/hospitals";
import Button from "../../components/buttons/Button";
import Header from "../../components/headers";
import Hospital from "../../entities/hospital";
import Layout from "../Layout";
import Critera from "./Criteria";
import MoubableCriteria from "./MouvableCriteria";

const CRITERIAS = [
  {
    id: 0,
    criteria: "Distance",
  },

  {
    id: 1,
    criteria: "Price",
  },

  {
    id: 2,
    criteria: "Popularity",
  },

  {
    id: 3,
    criteria: "Type",
  },
];

const positionsList = {
  0: 0,
  1: 1,
  2: 2,
  3: 3,
};

export default function CriteriaScreen() {
  // Navigation
  const navigation = useNavigation();

  // Global state
  const { lat, lng, city } = useSignal("location");
  const { setAhpResults } = useActions("hospitals");

  // Local state
  const [loading, setLoading] = useState(false);

  const positions = useSharedValue(positionsList);
  const scrollY = useSharedValue(0);

  const handleScroll = useAnimatedScrollHandler((event) => {
    scrollY.value = event.contentOffset.y;
  });

  // Some handlers
  const handleGetCriteriaPriority = async () => {
    const orderedCriteria: { criteria: string; priority: number }[] = [];

    for (const criteria of CRITERIAS) {
      orderedCriteria.push({
        criteria: criteria.criteria,
        priority:
          positions.value[criteria.id as keyof typeof positionsList] + 1,
      });
    }

    setLoading(true);

    const { data, error } = await getBestHospitals(
      orderedCriteria,
      { latitude: lat, longitude: lng },
      city
    );

    setLoading(false);

    if (data) {
      const hospitals = data.map(
        (hospital: any) =>
          new Hospital({ ...hospital, type: hospital.hospitalType.label })
      );

      setAhpResults(hospitals);

      navigation.dispatch(CommonActions.navigate("Hospital"));
    }
  };

  return (
    <Layout>
      <SafeAreaView style={styles.container}>
        <Header title="Criteria" />

        <Animated.ScrollView
          onScroll={handleScroll}
          scrollEventThrottle={16}
          style={{ flex: 1 }}
          contentContainerStyle={{
            padding: 20,
            height: CRITERIAS.length * 80 + 20,
          }}
        >
          {CRITERIAS.map((criteria) => (
            <MoubableCriteria
              key={criteria.id}
              criteria={criteria.criteria}
              id={criteria.id}
              positions={positions}
              scrollY={scrollY}
              criteriaCount={CRITERIAS.length}
            />
          ))}
        </Animated.ScrollView>

        <View
          style={{
            paddingHorizontal: 20,
            paddingBottom: 20,
          }}
        >
          <Button pv={15} onPress={handleGetCriteriaPriority}>
            {loading ? (
              <ActivityIndicator
                size={"small"}
                color="#fff"
                style={{ paddingVertical: 3 }}
              />
            ) : (
              <Text
                style={{
                  color: "#fff",
                  fontFamily: "PoppinsBold",
                  fontSize: 16,
                }}
              >
                Search Hospitals
              </Text>
            )}
          </Button>
        </View>
      </SafeAreaView>
    </Layout>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
