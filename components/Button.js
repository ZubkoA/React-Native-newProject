import React from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";

import Colors from "../constants/colors";

const Button = ({ children, onPress, style, styleText }) => {
  return (
    <View style={[styles.btnOuterContainer, style]}>
      <Pressable
        style={({ pressed }) => [
          styles.btnInnerContainer,
          pressed ? styles.pressed : null,
        ]}
        onPress={onPress}
        android_ripple={{ color: Colors.primary600 }}
      >
        <Text style={[styles.btnText, styleText]}>{children}</Text>
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
    paddingVertical: 16,
    paddingHorizontal: 32,
    elevation: 2,
  },
  btnText: {
    fontFamily: "roboto-medium",
    textAlign: "center",
    fontSize: 16,
    lineHeight: 19,
  },
  pressed: {
    opacity: 0.75,
  },
});
