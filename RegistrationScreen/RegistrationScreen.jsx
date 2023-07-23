import { useState } from "react";
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
import { AntDesign } from "@expo/vector-icons";

const RegistrationScreen = () => {
  const [showKeyboard, setShowKeyboard] = useState(false);

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../images/photoBG.png")}
        style={styles.bg}
      >
        <View style={styles.containerMenu}>
          <Image style={styles.avatar}></Image>

          <AntDesign style={styles.icon} name="pluscircleo" size={24} />

          <Text style={styles.text}>Реєстрація</Text>
          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
          >
            <View style={{ marginBottom: showKeyboard ? 16 : 27 }}>
              <TextInput
                style={styles.input}
                placeholder="Логін"
                onFocus={() => setShowKeyboard(true)}
              />
              <TextInput
                style={styles.input}
                placeholder="Адреса електронної пошти"
                onFocus={() => setShowKeyboard(true)}
              />
              <TextInput
                style={styles.input}
                placeholder="Пароль"
                onFocus={() => setShowKeyboard(true)}
              />
              <Pressable>
                <Text style={styles.textPassword}>Показати</Text>
              </Pressable>
            </View>
          </KeyboardAvoidingView>

          <TouchableOpacity style={styles.btn}>
            <Text style={styles.btnText}>Зареєстуватися</Text>
          </TouchableOpacity>
          <View style={{ ...styles.nav, marginBottom: showKeyboard ? 16 : 66 }}>
            <Pressable>
              <Text style={styles.textNav}>Вже є акаунт?</Text>
            </Pressable>
            <Pressable>
              <Text style={styles.textNav}>Увійти</Text>
            </Pressable>
          </View>
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
    paddingTop: 92,
    height: 549,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    backgroundColor: "#fff",
  },
  avatar: {
    width: 120,
    height: 120,
    zIndex: 2,
    position: "absolute",
    left: 120,
    top: -60,
    backgroundColor: "#F6F6F6",
    borderRadius: 16,
    marginBottom: 33,
  },
  icon: {
    zIndex: 3,
    color: "#FF6C00",
    position: "absolute",
    left: 228,
    top: 20,
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

export default RegistrationScreen;
