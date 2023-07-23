import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TextInput,
  Pressable,
  Image,
  KeyboardAvoidingView,
  TouchableOpacity,
} from "react-native";

const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../images/photoBG.png")}
        style={styles.bg}
      >
        <View style={styles.containerMenu}>
          <Text style={styles.text}>Увійти</Text>
          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
          >
            <View>
              <TextInput
                style={styles.input}
                placeholder="Адреса електронної пошти"
              />

              <TextInput style={styles.input} placeholder="Пароль" />
              <Pressable>
                <Text style={styles.textPassword}>Показати</Text>
              </Pressable>
            </View>

            <TouchableOpacity style={styles.btn}>
              <Text style={styles.btnText}>Зареєстуватися</Text>
            </TouchableOpacity>
            <View style={styles.nav}>
              <Pressable>
                <Text style={styles.textNav}>Немає акаунту?</Text>
              </Pressable>
              <Pressable>
                <Text style={styles.textNav}>Зареєструватися</Text>
              </Pressable>
            </View>
          </KeyboardAvoidingView>
        </View>
      </ImageBackground>
    </View>
  );
};

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
    backgroundColor: "#fff",
  },

  text: {
    fontFamily: "Roboto",
    fontSize: 30,
    fontWeight: 600,
    fontStyle: "normal",
    lineHeight: 35,
    letterSpacing: 0.01,
    color: "#212121",
    textAlign: "center",
    marginBottom: 33,
  },

  input: {
    borderWidth: 1,
    borderColor: "#E8E8E8",
    borderRadius: 8,
    backgroundColor: "#F6F6F6",
    color: "#BDBDBD",
    fontSize: 16,
    lineHeight: 19,
    padding: 16,
    marginBottom: 16,
  },
  textPassword: {
    color: "#1B4371",
    fontSize: 16,
    lineHeight: 19,
    position: "absolute",
    right: 16,
    top: -58,
  },
  btn: {
    borderRadius: 100,
    backgroundColor: "#FF6C00",
    paddingHorizontal: 32,
    paddingTop: 16,
    paddingBottom: 16,
    marginBottom: 16,
    marginTop: 27,
  },
  btnText: {
    color: "#fff",
    textAlign: "center",
    fontSize: 16,
    lineHeight: 19,
  },
  nav: {
    flexDirection: "row",
    justifyContent: "center",
  },
  textNav: {
    color: "#1B4371",
    fontSize: 16,
    lineHeight: 19,
    textAlign: "center",
  },
});

export default LoginScreen;
