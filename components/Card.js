import {
  View,
  StyleSheet,
  ImageBackground,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";

import Colors from "../constants/colors";

const Card = ({ children }) => {
  return (
    <ImageBackground
      source={require("../assets/images/photoBG.png")}
      style={styles.bg}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.containerMenu}>{children}</View>
      </TouchableWithoutFeedback>
    </ImageBackground>
  );
};

export default Card;

const styles = StyleSheet.create({
  bg: {
    resizeMode: "cover",
    justifyContent: "flex-end",
  },
  containerMenu: {
    position: "relative",
    marginTop: 263,
    paddingHorizontal: 16,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    backgroundColor: Colors.primary,
  },
});
