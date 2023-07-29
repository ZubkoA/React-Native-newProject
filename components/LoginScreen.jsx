import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import Title from "./Title";
import FormUserCabinet from "./FormUserCabinet";
import Colors from "../constants/colors";
import Card from "./Card";

const LoginScreen = ({ navigation }) => {
  function pressHandler() {
    navigation.navigate("RegistrationScreen");
  }
  return (
    <Card>
      <View style={styles.container}>
        <Title>Увійти</Title>
        <FormUserCabinet navigation={navigation} />
        <View>
          <Pressable onPress={pressHandler}>
            <View style={styles.nav}>
              <Text style={styles.textNav}>Немає акаунту?</Text>

              <Text style={styles.textNav}>Зареєструватися</Text>
            </View>
          </Pressable>
        </View>
      </View>
    </Card>
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
    fontFamily: "roboto-medium",
    color: Colors.textHelper,
    fontSize: 16,
    lineHeight: 19,
    textAlign: "center",
  },
});
