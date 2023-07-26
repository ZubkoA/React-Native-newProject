import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Pressable,
} from "react-native";
import Title from "./Title";
import FormUserCabinet from "./FormUserCabinet";
import Colors from "../constants/colors";
import Card from "./Card";

const LoginScreen = () => {
  return (
    <View>
      <Card style={styles.container}>
        <Title>Увійти</Title>
        <FormUserCabinet />

        <View style={styles.nav}>
          <Pressable>
            <Text style={styles.textNav}>Немає акаунту?</Text>
          </Pressable>
          <Pressable>
            <Text style={styles.textNav}>Зареєструватися</Text>
          </Pressable>
        </View>
      </Card>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: { paddingTop: 32, height: 489 },
  btnContainer: {
    marginBottom: 16,
    marginTop: 27,
  },

  nav: {
    flexDirection: "row",
    justifyContent: "center",
  },
  textNav: {
    color: Colors.textHelper,
    fontSize: 16,
    lineHeight: 19,
    textAlign: "center",
  },
});
