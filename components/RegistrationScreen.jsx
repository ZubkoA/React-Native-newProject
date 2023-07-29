import { View, Text, StyleSheet, Pressable, Image } from "react-native";
import { AntDesign } from "@expo/vector-icons";

import FormRegistration from "./FormRegistration";
import Title from "./Title";
import Colors from "../constants/colors";
import Card from "./Card";

const RegistrationScreen = ({ navigation }) => {
  function pressHandler() {
    navigation.navigate("LoginScreen");
  }
  return (
    <Card>
      <View style={styles.container}>
        <Image style={styles.avatar} />

        <AntDesign style={styles.icon} name="pluscircleo" size={24} />

        <Title>Реєстрація</Title>

        <FormRegistration navigation={navigation} />
        <View>
          <Pressable onPress={pressHandler}>
            <View style={{ ...styles.nav, marginBottom: 66 }}>
              <Text style={styles.textNav}>Вже є акаунт?</Text>

              <Text style={styles.textNav}>Увійти</Text>
            </View>
          </Pressable>
        </View>
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
