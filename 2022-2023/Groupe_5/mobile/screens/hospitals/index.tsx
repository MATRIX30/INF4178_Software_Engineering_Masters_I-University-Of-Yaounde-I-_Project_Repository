import { ScrollView, StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../../components/headers";
import Layout from "../Layout";
import Hospital from "./Hospital";
import { useSignal } from "@dilane3/gx";
import { HospitalState } from "../../gx/signals/hospitals";

export default function HospitalsScreen() {
  // Global state
  const { hospitals, ahpResults } = useSignal<HospitalState>("hospitals");

  return (
    <Layout>
      <SafeAreaView style={styles.container}>
        <Header title="Hospitals" />

        <ScrollView
          style={{ flex: 1 }}
          contentContainerStyle={{ paddingTop: 0 }}
        >
          {ahpResults.length === 0
            ? hospitals.map((hospital) => (
                <Hospital key={hospital.id} hospital={hospital} />
              ))
            : ahpResults.map((hospital) => (
                <Hospital key={hospital.id} hospital={hospital} />
              ))}
        </ScrollView>
      </SafeAreaView>
    </Layout>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
