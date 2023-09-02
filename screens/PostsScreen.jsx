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
import { auth, db } from "../config";
import { signOut } from "firebase/auth";
import { collection, getDocs, onSnapshot } from "firebase/firestore";

const PostsScreen = () => {
  const [posts, setPosts] = useState([]); // пости зберігаються тут, можете перенести в редакс, якщо хочете
  const navigation = useNavigation();
  console.log(posts);
  useEffect(() => {
    const dbRef = collection(db, "posts"); //тут додав підписку на onSnapshot, щоб брати всі пости
    const unsubscribe = onSnapshot(dbRef, (docsSnap) => {
      const updatedPosts = docsSnap.docs.map((doc) => doc.data());
      setPosts(updatedPosts);
    });
    return () => unsubscribe();
  }, []);

  const user = useSelector(selectUser);

  const handleLogOut = async () => {
    //  dispatch(logout); //це теж не працює, викликайте напряму
    await signOut(auth);
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
