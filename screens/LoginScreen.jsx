import React, { useEffect } from "react";
import { Alert, View, Text, StyleSheet, Pressable } from "react-native";
import Title from "../components/Title";
import FormUserCabinet from "../components/FormUserCabinet";
import Colors from "../constants/colors";
import Card from "../components/Card";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../util/http";
import Loading from "../components/Loading";

const LoginScreen = ({ navigation }) => {
  const dispatch = useDispatch();

  function pressHandler() {
    navigation.navigate("RegistrationScreen");
  }

  const loginHandler = ({ email, password }) => {
    dispatch(login({ email, password })).then((response) => {
      if (response.type === "auth/login/fulfilled") {
        navigation.navigate("Home");
        reset();
      } else if (response.type === "auth/login/pending") {
        return <Loading>Waiting...</Loading>;
      } else {
        return Alert.alert("Mistake");
      }
    });
  };
  return (
    <Card>
      <View style={styles.container}>
        <Title>Увійти</Title>
        <FormUserCabinet onLogin={loginHandler} />
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
