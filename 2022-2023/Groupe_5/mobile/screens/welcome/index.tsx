import { Dimensions, ScrollView } from "react-native";
import { Image, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Colors } from "../../constants";
import Layout from "../Layout";
import TouchableSurface from "../../components/buttons/TouchableSurface";
import { Ionicons } from "@expo/vector-icons";
import Button from "../../components/buttons/Button";
import { useState } from "react";
import { useActions } from "@dilane3/gx";
import { READ_TERMS } from "../../constants";
import storage from "../../storage";
import { useNavigation, CommonActions } from "@react-navigation/native";

const image1 = require("../../assets/images/illustration1.png");
const image2 = require("../../assets/images/illustration2.png");

export default function WelcomeScreen() {
  const navigation = useNavigation();

  // Local state
  const [termsAccepted, setTermsAccepted] = useState(false);

  // Global actions
  const { setTermsRead } = useActions("terms");

  // Handlers
  const handleTermsAcceptance = () => {
    setTermsAccepted(!termsAccepted);
  };

  const handleReadTerms = async () => {
    // await storage.setItem(READ_TERMS, READ_TERMS);

    setTermsRead(true);

    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{ name: "App" }],
      })
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={{ alignItems: "center" }}
      >
        <>
          <Image style={styles.image} source={image2} />

          <Text style={styles.title}>Welcome to Quick Care</Text>

          <Text style={styles.description}>
            Search for an appropriate hospital to receive treatments about
            Malaria
          </Text>

          <View style={styles.terms}>
            <TouchableSurface
              rounded
              style={{ marginRight: 20 }}
              onPress={handleTermsAcceptance}
            >
              <View style={styles.checkmarkBox}>
                <View
                  style={[
                    styles.checkmark,
                    {
                      borderColor: termsAccepted ? Colors.primary : Colors.gray,
                    },
                  ]}
                >
                  {termsAccepted && (
                    <Ionicons
                      name="checkmark-outline"
                      size={24}
                      color={Colors.primary}
                      style={{
                        position: "absolute",
                        left: -2,
                      }}
                    />
                  )}
                </View>
              </View>
            </TouchableSurface>

            <Text style={styles.termsText}>I agree to the </Text>
            <Text style={[styles.termsText, styles.termsLink]}>
              Terms and conditions
            </Text>
          </View>

          <Button
            width={Dimensions.get("window").width - 40}
            style={{ marginTop: 40, marginBottom: 20 }}
            disabled={!termsAccepted}
            onPress={handleReadTerms}
          >
            <Text style={styles.buttonText}>Start Searching</Text>
          </Button>
        </>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flex: 1,
    backgroundColor: Colors.background,
    alignItems: "center",
    justifyContent: "flex-start",
    padding: 20,
  },

  image: {
    width: "100%",
    height: 300,
    resizeMode: "contain",
  },

  title: {
    fontSize: 24,
    fontFamily: "PoppinsBold",
  },

  description: {
    fontSize: 16,
    fontFamily: "PoppinsRegular",
    color: Colors.gray,
    textAlign: "center",
    marginTop: 20,
  },

  terms: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    marginTop: 30,
  },

  checkmarkBox: {
    width: 30,
    height: 30,
    alignItems: "center",
    justifyContent: "center",
  },

  checkmark: {
    position: "relative",
    width: 20,
    height: 20,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: Colors.gray,
    alignItems: "center",
    justifyContent: "center",
  },

  termsText: {
    fontSize: 14,
    color: Colors.text,
  },

  termsLink: {
    textDecorationLine: "underline",
    color: Colors.primary,
  },

  buttonText: {
    fontSize: 16,
    fontFamily: "PoppinsBold",
    color: Colors.background,
  },
});
