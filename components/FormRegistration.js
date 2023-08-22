import { useState } from "react";
import { View, Text, StyleSheet, TextInput, Pressable } from "react-native";
import Button from "./Button";
import Colors from "../constants/colors";

const FormRegistration = ({ onAuthenticate }) => {
  const initialState = {
    login: "",
    email: "",
    password: "",
  };

  const [showKeyboard, setShowKeyboard] = useState(false);
  const [inputs, setInputs] = useState(initialState);
  const [passwordVissible, setPasswordVissible] = useState(true);

  // function resetInputHandler() {
  //   setInputs(initialState);
  // }
  const handleChange = (text, input) => {
    setInputs((prevState) => ({ ...prevState, [input]: text }));
  };

  const handleSubmit = () => {
    let { email, password } = inputs;
    email = email.toLowerCase().trim();
    password = password.trim();

    onAuthenticate({
      login,
      email,
      password,
    });

    // resetInputHandler();
  };

  const { login, email, password } = inputs;
  return (
    <View>
      <View style={{ marginBottom: showKeyboard ? 16 : 27 }}>
        <TextInput
          style={styles.input}
          placeholder="Логін"
          value={login}
          onChangeText={(text) => handleChange(text, "login")}
          onFocus={() => setShowKeyboard(true)}
        />
        <TextInput
          style={styles.input}
          placeholder="Адреса електронної пошти"
          value={email}
          onChangeText={(text) => handleChange(text, "email")}
          onFocus={() => setShowKeyboard(true)}
        />
        <TextInput
          style={styles.input}
          placeholder="Пароль"
          secureTextEntry={passwordVissible}
          value={password}
          onChangeText={(text) => handleChange(text, "password")}
          onFocus={() => setShowKeyboard(true)}
        />
        <View style={styles.textPasswordContainer}>
          <Pressable
            onPress={() => {
              setPasswordVissible(!passwordVissible);
            }}
          >
            <Text style={styles.textPassword}>Показати</Text>
          </Pressable>
        </View>
      </View>

      <Button
        onPress={handleSubmit}
        style={styles.btnContainer}
        styleText={styles.btnText}
      >
        Зареєстуватися
      </Button>
    </View>
  );
};

export default FormRegistration;
const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: Colors.second600,
    borderRadius: 8,
    backgroundColor: Colors.second500,
    color: Colors.second700,
    fontFamily: "roboto-light",
    fontSize: 16,
    lineHeight: 19,
    padding: 16,
    marginBottom: 16,
  },
  textPasswordContainer: {
    position: "absolute",
    right: 16,
    bottom: 38,
  },
  textPassword: {
    fontFamily: "roboto-medium",
    color: Colors.textHelper,
    fontSize: 16,
    lineHeight: 19,
  },
  btnContainer: {
    marginBottom: 16,
    color: Colors.primary,
    backgroundColor: Colors.primary500,
  },
  btnText: { color: Colors.primary },
});
