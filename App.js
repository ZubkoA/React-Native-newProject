// import { StatusBar } from "expo-status-bar";
import { useCallback } from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import * as SplashScreen from "expo-splash-screen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { useFonts } from "expo-font";
import RegistrationScreen from "./screens/RegistrationScreen";

import LoginScreen from "./screens/LoginScreen";
import Mapscreen from "./screens/Mapscreen";
import Home from "./screens/Home";
import CommentsScreen from "./screens/CommentsScreen";
import { persistor, store } from "./redux/store";

const Stack = createNativeStackNavigator();

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
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="LoginScreen" component={LoginScreen} />
            <Stack.Screen
              name="RegistrationScreen"
              component={RegistrationScreen}
            />
            <Stack.Screen
              name="Home"
              component={Home}
              screenOptions={{ headerShown: false }}
            />
            <Stack.Screen
              name="Mapscreen"
              component={Mapscreen}
              screenOptions={{ headerShown: false }}
            />
            <Stack.Screen
              name="CommentsScreen"
              component={CommentsScreen}
              screenOptions={{ headerShown: false }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}
