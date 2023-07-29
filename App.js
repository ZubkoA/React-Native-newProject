// import { StatusBar } from "expo-status-bar";
import { useState, useCallback } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import * as SplashScreen from "expo-splash-screen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialIcons, Feather } from "@expo/vector-icons";
import Colors from "./constants/colors";
import { useFonts } from "expo-font";
import RegistrationScreen from "./components/RegistrationScreen";
import CreatePostsScreen from "./screens/CreatePostsScreen";
import LoginScreen from "./components/LoginScreen";
import PostsScreen from "./screens/PostsScreen";
import CommentsScreen from "./screens/CommentsScreen";
import ProfileScreen from "./screens/ProfileScreen";
import Mapscreen from "./screens/Mapscreen";
import Home from "./screens/Home";
import ButtonBottomNav from "./components/ButtonBottomNav";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function ButtonNav() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: { backgroundColor: Colors.primary },
      }}
    >
      <Tab.Screen
        name="PostsScreen"
        component={PostsScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <MaterialIcons
              name="grid-view"
              a
              size={24}
              color={focused ? Colors.textMain : Colors.second700}
            />
          ),
        }}
      />
      <Tab.Screen
        name="AddPost"
        component={CreatePostsScreen}
        options={{
          tabBarButton: (props) => (
            <TouchableOpacity onPress={CreatePostsScreen} {...props}>
              <ButtonBottomNav />
            </TouchableOpacity>
          ),
        }}
      />
      <Tab.Screen
        name="User"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Feather
              name="user"
              size={24}
              color={focused ? Colors.textMain : Colors.second700}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  const [fontsLoaded] = useFonts({
    "roboto-bold": require("./assets/fonts/Roboto-Bold.ttf"),
    "roboto-medium": require("./assets/fonts/Roboto-Medium.ttf"),
    "roboto-light": require("./assets/fonts/Roboto-Light.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen
          name="Home"
          component={Home}
          screenOptions={{ headerShown: false }}
        />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen
          name="RegistrationScreen"
          component={RegistrationScreen}
        />
        <Stack.Screen name="PostsBtnScreen" component={ButtonNav} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
