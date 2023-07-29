import { View, Image, Text, StyleSheet } from "react-native";
import Colors from "../constants/colors";
import {
  AntDesign,
  SimpleLineIcons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

const ProfileRender = ({ img, title, message, like, location }) => {
  return (
    <View style={styles.container}>
      <View style={styles.imgContainer}>
        <Image source={img} style={styles.img} />
      </View>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.iconContainer}>
        <View style={styles.wrap}>
          <MaterialCommunityIcons
            name="message-reply"
            size={24}
            color={Colors.primary500}
          />
          <Text style={styles.text}>{message}</Text>

          <AntDesign name="like2" size={24} color={Colors.primary500} />
          <Text style={styles.text}>{like}</Text>
        </View>
        <View style={styles.wrapLocation}>
          <SimpleLineIcons
            name="location-pin"
            size={24}
            color={Colors.second700}
          />
          <Text style={styles.text}>{location}</Text>
        </View>
      </View>
    </View>
  );
};

export default ProfileRender;

const styles = StyleSheet.create({
  container: {
    marginBottom: 34,
  },
  imgContainer: {
    marginBottom: 8,
  },
  img: {
    width: "100%",
    borderRadius: 8,
  },
  title: {
    fontFamily: "roboto-bold",
    fontSize: 16,
    fontStyle: "normal",
    lineHeight: 18,
    letterSpacing: 0.3,
    color: Colors.textMain,
    marginBottom: 8,
  },
  iconContainer: {
    flexDirection: "row",
    gap: 16,
    height: 24,
    justifyContent: "space-between",
  },
  wrap: {
    flexDirection: "row",
    gap: 6,
    alignItems: "center",
  },
  wrapLocation: {
    flexDirection: "row",
    gap: 4,
    alignItems: "center",
  },
  text: {
    fontFamily: "roboto-medium",
    fontSize: 16,
    lineHeight: 19,
    color: Colors.textMain,
  },
});
