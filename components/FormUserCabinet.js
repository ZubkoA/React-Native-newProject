import { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Pressable,
  KeyboardAvoidingView,
} from "react-native";
import Colors from "../constants/colors";
import Button from "./Button";

const FormUserCabinet = ({ navigation }) => {
  const initialState = {
    email: "",
    password: "",
  };

  const [inputs, setInputs] = useState(initialState);
  const [passwordVissible, setPasswordVissible] = useState(true);

  function resetInputHandler() {
    setInputs(initialState);
  }
  const handleChange = (text, input) => {
    setInputs((prevState) => ({ ...prevState, [input]: text }));
  };

  const handleSubmit = () => {
    navigation.navigate("PostsBtnScreen");
    resetInputHandler();
  };
  const { email, password } = inputs;
  return (
    <View>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <View>
          <TextInput
            style={styles.input}
            placeholder="Адреса електронної пошти"
            value={email}
            onChangeText={(text) => handleChange(text, "email")}
          />

          <TextInput
            style={styles.input}
            placeholder="Пароль"
            value={password}
            secureTextEntry={passwordVissible}
            onChangeText={(text) => handleChange(text, "password")}
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
      </KeyboardAvoidingView>

      <Button
        onPress={handleSubmit}
        style={styles.btnContainer}
        styleText={styles.btnText}
      >
        Увійти
      </Button>
    </View>
  );
};

export default FormUserCabinet;

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
    marginTop: 27,
    backgroundColor: Colors.primary500,
  },
  btnText: { color: Colors.primary },
});
