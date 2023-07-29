import { View, Text, StyleSheet } from "react-native";
import Colors from "../constants/colors";

const TitlePost = ({ children }) => {
  return (
    <View style={styles.containerText}>
      <Text style={styles.title}>{children}</Text>
    </View>
  );
};

export default TitlePost;

const styles = StyleSheet.create({
  containerText: {
    marginLeft: 100,
    paddingTop: 11,
    paddingBottom: 11,
  },

  title: {
    fontFamily: "roboto-bold",
    fontSize: 17,
    textAlign: "center",
    color: Colors.textMain,
  },
});
