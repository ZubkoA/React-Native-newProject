import { Text, StyleSheet } from "react-native";
import Colors from "../constants/colors";

const TextPhoto = ({ children, style }) => {
  return <Text style={[styles.title, style]}>{children}</Text>;
};

export default TextPhoto;

const styles = StyleSheet.create({
  title: {
    fontFamily: "roboto-light",
    fontSize: 16,
    lineHeight: 19,
    marginTop: 8,
  },
});
