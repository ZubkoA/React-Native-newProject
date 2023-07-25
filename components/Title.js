import { Text, StyleSheet } from "react-native";
import Colors from "../constants/colors";

const Title = ({ children }) => {
  return <Text style={styles.title}>{children}</Text>;
};

export default Title;

const styles = StyleSheet.create({
  title: {
    fontFamily: "Roboto",
    fontSize: 30,
    fontWeight: 600,
    fontStyle: "normal",
    lineHeight: 35,
    letterSpacing: 0.01,
    color: Colors.textMain,
    textAlign: "center",
    marginBottom: 33,
  },
});
