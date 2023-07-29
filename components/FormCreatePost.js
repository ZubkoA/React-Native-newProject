import { View, Text, StyleSheet, TextInput } from "react-native";
import { SimpleLineIcons } from "@expo/vector-icons";
import Colors from "../constants/colors";
import Button from "./Button";

const FormCreatePost = () => {
  return (
    <View style={styles.formContainer}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} placeholder="Назва..." />
      </View>
      <View style={styles.inputContainer}>
        <SimpleLineIcons
          name="location-pin"
          size={24}
          color={Colors.second700}
          paddingVertical={16}
        />
        <TextInput style={styles.input} placeholder="Місцевість..." />
      </View>

      <Button style={styles.btnContainer} styleText={styles.btnText}>
        Опубліковати
      </Button>
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
  btnContainer: {
    marginBottom: 16,
    marginTop: 27,
    backgroundColor: Colors.second500,
  },
  btnText: { color: Colors.second700 },
});
