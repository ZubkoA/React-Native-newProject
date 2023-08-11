import { useState } from "react";

import { Alert, View, StyleSheet, TextInput } from "react-native";
import { SimpleLineIcons } from "@expo/vector-icons";

import {
  getCurrentPositionAsync,
  useForegroundPermissions,
  PermissionStatus,
} from "expo-location";

import Colors from "../constants/colors";

const FormCreatePost = ({ onTakeTitle }) => {
  const initialState = {
    title: "",
    locationTitle: "",
  };

  const [inputs, setInputs] = useState(initialState);

  const { title, locationTitle } = inputs;
  const handleChange = (text, input) => {
    setInputs((prevState) => ({ ...prevState, [input]: text }));
    onTakeTitle(title, locationTitle);
  };

  return (
    <View style={styles.formContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Назва..."
          value={title}
          onChangeText={(text) => handleChange(text, "title")}
        />
      </View>
      <View style={styles.inputContainer}>
        <SimpleLineIcons
          name="location-pin"
          size={24}
          color={Colors.second700}
          paddingVertical={16}
        />
        <TextInput
          style={styles.input}
          placeholder="Місцевість..."
          value={locationTitle}
          onChangeText={(text) => handleChange(text, "locationTitle")}
        />
      </View>
    </View>
  );
};

export default FormCreatePost;

const styles = StyleSheet.create({
  formContainer: {
    marginTop: 32,
    position: "relative",
  },
  inputContainer: {
    borderBottomWidth: 1,
    borderColor: Colors.second600,
    color: Colors.second700,
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: 16,
  },
  input: {
    fontFamily: "roboto-light",
    fontSize: 16,
    lineHeight: 19,
    paddingVertical: 16,
    paddingHorizontal: 4,
  },
  locationContainer: { position: "absolute", right: 16, bottom: 38 },
  textPasswordContainer: {
    // position: "absolute",
    // right: 16,
    // bottom: 138,
  },
});
