import { View, Text, StyleSheet } from "react-native";
import { Colors } from "../../constants";
import TouchableSurface from "../buttons/TouchableSurface";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation, CommonActions } from "@react-navigation/native";

type HeaderProps = {
  title: string;
};

export default function Header({ title }: HeaderProps) {
  const navigation = useNavigation();

  const handleBack = () => {
    navigation.dispatch(CommonActions.goBack());
  };

  return (
    <View style={styles.container}>
      <TouchableSurface rounded onPress={handleBack}>
        <View style={styles.backIcon}>
          <Ionicons name="arrow-back" size={24} color={Colors.text} />
        </View>
      </TouchableSurface>

      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 60,
    paddingHorizontal: 20,
    backgroundColor: Colors.background,
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: Colors.grayLight,
  },

  title: {
    fontSize: 18,
    fontFamily: "PoppinsMedium",
    marginLeft: 20,
  },

  backIcon: {
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
  },
});
