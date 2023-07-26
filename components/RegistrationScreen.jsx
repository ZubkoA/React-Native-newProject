import { View, Text, StyleSheet, Pressable, Image } from "react-native";
import { AntDesign } from "@expo/vector-icons";

import FormRegistration from "./FormRegistration";
import Title from "./Title";
import Colors from "../constants/colors";
import Card from "./Card";

const RegistrationScreen = () => {
  return (
    <Card style={styles.container}>
      <Image style={styles.avatar}></Image>

      <AntDesign style={styles.icon} name="pluscircleo" size={24} />

      <Title>Реєстрація</Title>

      <FormRegistration />

      <View style={{ ...styles.nav, marginBottom: 66 }}>
        {/* <View style={{ ...styles.nav, marginBottom: showKeyboard ? 16 : 66 }}></View> */}
        <Pressable>
          <Text style={styles.textNav}>Вже є акаунт?</Text>
        </Pressable>
        <Pressable>
          <Text style={styles.textNav}>Увійти</Text>
        </Pressable>
      </View>
    </Card>
  );
};

export default RegistrationScreen;

const styles = StyleSheet.create({
  container: { paddingTop: 92, height: 549 },
  bg: {
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
    backgroundColor: Colors.primary,
  },
  avatar: {
    width: 120,
    height: 120,
    zIndex: 2,
    position: "absolute",
    left: 120,
    top: -60,
    backgroundColor: Colors.second500,
    borderRadius: 16,
    marginBottom: 33,
  },
  icon: {
    zIndex: 3,
    color: Colors.primary500,
    position: "absolute",
    left: 228,
    top: 20,
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
