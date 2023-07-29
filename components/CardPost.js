import { View, StyleSheet } from "react-native";

import Colors from "../constants/colors";

const CardPost = ({ children }) => {
  return <View style={styles.header}>{children}</View>;
};

export default CardPost;

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 60,
    marginTop: 44,
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderBottomColor: Colors.second700,
  },
});
