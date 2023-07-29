import { StyleSheet, View, Pressable, Image } from "react-native";

import { AntDesign } from "@expo/vector-icons";
import Colors from "../constants/colors";

const CardPostFooterDel = () => {
  return (
    <View style={styles.footer}>
      <Pressable style={styles.buttonLink}>
        <AntDesign name="delete" size={24} color={Colors.second700} />
      </Pressable>
    </View>
  );
};

export default CardPostFooterDel;

const styles = StyleSheet.create({
  footer: {
    flexDirection: "row",
    justifyContent: "center",
    borderTopWidth: 1,
    borderTopColor: Colors.second700,
    height: 83,
    alignItems: "center",
  },
  buttonLink: {
    borderRadius: 20,
    paddingVertical: 7,
    backgroundColor: Colors.second500,
    width: 70,
    height: 40,
    alignItems: "center",
    marginHorizontal: 31,
  },
});
