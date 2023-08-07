import { TouchableOpacity } from "react-native";
import ButtonBottomNav from "../components/ButtonBottomNav";
import { NavigationContainerFeather } from "@react-navigation/native";
import { MaterialIcons, Feather } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Colors from "../constants/colors";
import PostsScreen from "../screens/PostsScreen";
import CreatePostsScreen from "../screens/CreatePostsScreen";
import ProfileScreen from "../screens/ProfileScreen";

const Tab = createBottomTabNavigator();

const Home = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: { backgroundColor: Colors.primary },
      }}
      initialRouteName="PostsScreen"
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
};

export default Home;
