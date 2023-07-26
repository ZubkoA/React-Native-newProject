import React from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";

import Colors from "../constants/colors";

const Button = ({ children, onPress, style }) => {
  return (
    <View style={[styles.btnOuterContainer, style]}>
      <Pressable
        style={({ pressed }) =>
          pressed
            ? [styles.btnInnerContainer, styles.pressed]
            : styles.btnInnerContainer
        }
        onPress={onPress}
        android_ripple={{ color: Colors.primary600 }}
      >
        <Text style={styles.btnText}>{children}</Text>
      </Pressable>
    </View>
  );
};

export default Button;

const styles = StyleSheet.create({
  btnOuterContainer: {
    borderRadius: 100,
    overflow: "hidden",
  },
  btnInnerContainer: {
    backgroundColor: Colors.primary500,
    paddingVertical: 16,
    paddingHorizontal: 32,
    elevation: 2,
  },
  btnText: {
    color: Colors.primary,
    textAlign: "center",
    fontSize: 16,
    lineHeight: 19,
  },
  pressed: {
    opacity: 0.75,
  },
});
