import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Colors } from "../../constants/index";

type HospitalResultItemProps = {
  name: string;
  address: string;
};

export default function HospitalResultItem({
  name,
  address,
}: HospitalResultItemProps) {
  return (
    <View style={styles.hospitalItem}>
      <Text style={styles.hospitalItemTitle}>{name}</Text>
      <Text style={styles.hospitalItemAddress}>{address}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  hospitalItem: {
    backgroundColor: Colors.background,
    paddingHorizontal: 20,
    paddingVertical: 10,
    // borderRadius: 10,
    borderBottomColor: Colors.grayLight,
    borderBottomWidth: 1,
  },

  hospitalItemTitle: {
    fontFamily: "PoppinsBold",
    fontSize: 18,
    color: Colors.text,
  },

  hospitalItemAddress: {
    fontFamily: "PoppinsRegular",
    fontSize: 15,
    color: Colors.gray,
  },
});
