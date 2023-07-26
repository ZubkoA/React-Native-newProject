import { Text, StyleSheet } from "react-native";
import Colors from "../constants/colors";

const Title = ({ children }) => {
  return <Text style={styles.title}>{children}</Text>;
};

export default Title;

const styles = StyleSheet.create({
  title: {
    fontFamily: "roboto-bold",
    fontSize: 30,
    fontStyle: "normal",
    lineHeight: 35,
    letterSpacing: 0.01,
    color: Colors.textMain,
    textAlign: "center",
    marginBottom: 33,
  },
});
