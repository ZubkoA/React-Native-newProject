import React from "react";
import { StyleSheet, Text, View, Pressable, Image } from "react-native";

import { MaterialIcons, Feather, AntDesign } from "@expo/vector-icons";
import Colors from "../constants/colors";

const PostsScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.containerText}>
          <Text style={styles.title}>Публікації</Text>
        </View>
        <Feather name="log-out" size={24} color="#BDBDBD" />
      </View>
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
      <View style={styles.footer}>
        <MaterialIcons name="grid-view" size={24} color={Colors.textMain} />
        <Pressable style={styles.buttonLink}>
          <AntDesign name="plus" size={24} color="white" />
        </Pressable>
        <Feather name="user" size={24} color={Colors.textMain} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-around",
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 60,
    marginTop: 44,
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderBottomColor: Colors.second700,
  },
  containerText: {
    marginLeft: 100,
    paddingTop: 11,
    paddingBottom: 11,
  },

  title: {
    fontSize: 17,
    textAlign: "center",
    color: Colors.textMain,
  },
  main: {
    marginHorizontal: 16,
    marginTop: 32,
    height: 578,
  },
  wrap: { flexDirection: "row", gap: 8 },
  mainText: {
    color: Colors.textMain,
    fontFamily: "Roboto",
    alignSelf: "center",
  },
  name: { fontSize: 13, fontWeight: 600 },
  email: { fontSize: 11, fontWeight: 500 },

  footer: {
    flexDirection: "row",
    justifyContent: "center",
    borderTopWidth: 1,
    borderTopColor: Colors.second700,
    height: 83,
    alignItems: "center",
  },

  buttonLink: {
    color: Colors.primary500,
    borderRadius: 20,
    paddingVertical: 7,
    backgroundColor: Colors.primary500,
    width: 70,
    height: 40,
    alignItems: "center",
    marginHorizontal: 31,
  },
});

export default PostsScreen;
