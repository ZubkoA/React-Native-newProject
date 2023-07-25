import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Pressable,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import Title from "./Title";
import Button from "./Button";
import FormUserCabinet from "./FormUserCabinet";
import Colors from "../constants/colors";

const LoginScreen = () => {
  return (
    <View>
      <ImageBackground
        source={require("../assets/images/photoBG.png")}
        style={styles.bg}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.containerMenu}>
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
          </View>
        </TouchableWithoutFeedback>
      </ImageBackground>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  // container: { flex: 1 },
  bg: {
    // flex: 1,
    resizeMode: "cover",
    justifyContent: "flex-end",
  },
  containerMenu: {
    position: "relative",
    marginTop: 263,
    paddingHorizontal: 16,
    paddingTop: 32,
    height: 489,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    backgroundColor: Colors.primary,
  },

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
