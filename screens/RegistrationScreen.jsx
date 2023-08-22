import {
  View,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  Pressable,
  ScrollView,
  Image,
  Alert,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";

import FormRegistration from "../components/FormRegistration";
import Title from "../components/Title";
import Colors from "../constants/colors";
import Card from "../components/Card";
import { register } from "../util/http";
import Loading from "../components/Loading";
import { useDispatch, useSelector } from "react-redux";

const RegistrationScreen = ({ navigation }) => {
  // const state = useSelector((state) => state.auth.user);
  // console.log(state);

  const dispatch = useDispatch();

  function pressHandler() {
    navigation.navigate("LoginScreen");
  }

  const signUpHandler = ({ login, email, password }) => {
    const loginValid = login.length > 0;
    const emailValid = email.includes("@");
    const passwordValid = password.length > 5;
    if (!loginValid || !emailValid || !passwordValid) {
      Alert.alert("Invalid Input, Please check in your put values");
      return;
    }
    dispatch(register({ login, email, password }));
    navigation.navigate("Home");
  };

  return (
    <ScrollView style={styles.screen}>
      <KeyboardAvoidingView
        style={styles.screen}
        // behavior={Platform.OS == "ios" ? "padding" : "height"}
      >
        <Card>
          <View style={styles.container}>
            <Image style={styles.avatar} />

            <AntDesign style={styles.icon} name="pluscircleo" size={24} />

            <Title>Реєстрація</Title>

            <FormRegistration onAuthenticate={signUpHandler} />
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
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

export default RegistrationScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
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
