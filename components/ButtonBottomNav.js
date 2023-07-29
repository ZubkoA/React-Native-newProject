import React from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";

import Colors from "../constants/colors";

const ButtonBottomNav = () => {
  return (
    <View style={styles.buttonLink}>
      <AntDesign name="plus" size={24} color="white" />
    </View>
  );
};

export default ButtonBottomNav;

const styles = StyleSheet.create({
  buttonLink: {
    color: Colors.primary500,
    borderRadius: 20,
    paddingVertical: 7,
    backgroundColor: Colors.primary500,
    width: 70,
    height: 40,
    alignItems: "center",
    marginHorizontal: 31,
    marginTop: 5,
  },
});
