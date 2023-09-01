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
import { selectUser, selectPosts } from "../util/selectors";

const PostsScreen = () => {
  const navigation = useNavigation();

  const dispatch = useDispatch();

  const posts = useSelector(selectPosts);
  console.log(posts);
  const user = useSelector(selectUser);
  console.log(user);

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

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
            <Text style={styles.name}>{user.login}</Text>
            <Text style={styles.email}>{user.email}</Text>
          </View>
        </View>
        <PostDetail posts={posts} />
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
