import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Colors } from "../../constants";
import { Fontisto } from '@expo/vector-icons';

type CriteriaProps = {
  criteria: string;
};

export default function Criteria({ criteria }: CriteriaProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{criteria}</Text>

      <Fontisto 
        name="nav-icon-grid-a"
        size={20}
        color={Colors.gray}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 60,
    borderRadius: 10,
    backgroundColor: Colors.background,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: Colors.grayLight,
  },

  text: {
    fontSize: 16,
    fontFamily: "PoppinsMedium",
    color: Colors.text,
  },
});
