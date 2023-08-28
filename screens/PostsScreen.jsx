import {
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  FlatList,
} from "react-native";
import { useNavigation, useIsFocused } from "@react-navigation/native";

import { Feather } from "@expo/vector-icons";
import Colors from "../constants/colors";
import CardPost from "../components/CardPost";
import TitlePost from "../components/TitlePost";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import PostDetail from "../components/PostDetail";
import { logout } from "../util/http";
import { getPosts } from "../util/httpPost";

const PostsScreen = ({ route }) => {
  const navigation = useNavigation();
  const isFocused = useIsFocused();
  const dispatch = useDispatch();

  const stateUser = useSelector((state) => state.auth.user);

  const [postData, setPostData] = useState([]);

  useEffect(() => {
    if (isFocused && route.params) {
      setPostData((curPosts) => [...curPosts, route.params.post]);
    }
  }, [isFocused, route]);

  useEffect(() => {
    if (stateUser.token) {
      dispatch(getPosts(stateUser.uid));
    }
  }, [stateUser]);

  const handleLogOut = () => {
    dispatch(logout);
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
        <PostDetail posts={postData} />
      </View>

      <PostDetail />
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
