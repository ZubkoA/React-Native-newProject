import { View, StyleSheet, Pressable, Text } from "react-native";

import Card from "../components/Card";
import Title from "../components/Title";
import Colors from "../constants/colors";

const Home = ({ navigation }) => {
  function pressHandler() {
    navigation.navigate("LoginScreen");
  }
  return (
    <Card>
      <View style={styles.container}>
        <Title>Home</Title>
      </View>
      <View>
        <Pressable onPress={pressHandler}>
          <View style={styles.nav}>
            <Text style={styles.textNav}>Вже є акаунт?</Text>
            <Text style={styles.textNav}>Увійти</Text>
          </View>
        </Pressable>
      </View>
    </Card>
  );
};

export default Home;
const styles = StyleSheet.create({
  container: { paddingTop: 35, height: 400 },
  nav: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 48,
  },
  textNav: {
    fontFamily: "roboto-medium",
    color: Colors.textHelper,
    fontSize: 16,
    lineHeight: 19,
    textAlign: "center",
  },
});
