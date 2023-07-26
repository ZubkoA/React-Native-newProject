// import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { View } from "react-native";
import RegistrationScreen from "./components/RegistrationScreen";

import * as Font from "expo-font";
import LoginScreen from "./components/LoginScreen";
import PostsScreen from "./screens/PostsScreen";

const fonts = () =>
  Font.loadAsync({
    "rob-bold": require("./assets/fonts/Roboto-Bold.ttf"),
    "rob-medium": require("./assets/fonts/Roboto-Medium.ttf"),
  });

export default function App() {
  // const [font, setFont] = useState(false);

  return (
    <View>
      <RegistrationScreen />
      {/* <LoginScreen /> */}
      {/* <PostsScreen /> */}
    </View>
  );
}
