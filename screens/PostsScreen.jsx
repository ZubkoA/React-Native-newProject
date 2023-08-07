import { StyleSheet, Text, View, Image, Pressable } from "react-native";

import { Feather } from "@expo/vector-icons";
import Colors from "../constants/colors";
import CardPost from "../components/CardPost";
import TitlePost from "../components/TitlePost";
// import CardPostFooter from "../components/CardPostFooter";

const PostsScreen = ({ navigation }) => {
  const handleLogOut = () => {
    navigation.navigate("LoginScreen");
  };
  return (
    <View style={styles.container}>
      <CardPost>
        <TitlePost>Публікації</TitlePost>
        <Pressable onPress={handleLogOut}>
          <Feather name="log-out" size={24} color="#BDBDBD" />
        </Pressable>
      </CardPost>
      <View style={styles.main}>
        <View style={styles.wrap}>
          <Image
            style={styles.img}
            source={require("../assets/images/avatar.png")}
          />
          <View style={styles.mainText}>
            <Text style={styles.name}>Natali Romanova</Text>
            <Text style={styles.email}>email@example.com</Text>
          </View>
        </View>
      </View>
      {/* <CardPostFooter /> */}
    </View>
  );
};

export default PostsScreen;

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-around",
  },

  main: {
    marginHorizontal: 16,
    marginTop: 32,
    height: 578,
  },
  wrap: { flexDirection: "row", gap: 8 },
  mainText: {
    color: Colors.textMain,
    alignSelf: "center",
  },
  name: { fontFamily: "roboto-bold", fontSize: 13, fontWeight: 600 },
  email: { fontFamily: "roboto-medium", fontSize: 11, fontWeight: 500 },
});
