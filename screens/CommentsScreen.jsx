import { StyleSheet, TextInput, View, Image, FlatList } from "react-native";
import { Feather } from "@expo/vector-icons";
import Colors from "../constants/colors";

import CardPost from "../components/CardPost";
import TitlePost from "../components/TitlePost";
import { COMMENTS } from "../model/comments";
import CommentsRender from "../components/CommentsRender";

const CommentsScreen = () => {
  return (
    <View style={styles.container}>
      <CardPost>
        <TitlePost>Коментарі</TitlePost>
      </CardPost>
      <View style={styles.main}>
        <View style={styles.imgContainer}>
          <Image
            source={require("../assets/images/default.png")}
            style={styles.img}
          />
        </View>
        <View style={styles.wrapRender}>
          <FlatList
            data={COMMENTS}
            renderItem={(itemData) => (
              <CommentsRender
                avatar={itemData.item.avatar}
                text={itemData.item.text}
                data={itemData.item.data}
                index={itemData.index}
              />
            )}
            keyExtractor={(item) => item.id}
          />
        </View>
        <View style={styles.wrapInput}>
          <TextInput style={styles.input} placeholder="Коментувати..." />
          <View style={styles.svgContainer}>
            <Feather name="arrow-up" size={24} color={Colors.primary} />
          </View>
        </View>
      </View>
    </View>
  );
};

export default CommentsScreen;

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-around",
  },
  imgContainer: { marginBottom: 32 },
  img: {
    width: "100%",
    height: 280,
    zIndex: 2,
    backgroundColor: Colors.second500,
    borderRadius: 16,
  },

  main: {
    marginHorizontal: 16,
    marginTop: 32,
    height: 580,
  },
  wrapRender: {
    marginBottom: 31,
    flex: 1,
  },
  wrapInput: {
    flexDirection: "row",
    borderRadius: 100,
    overflow: "hidden",
    borderColor: Colors.second600,
    backgroundColor: Colors.second500,
    height: 50,
    justifyContent: "space-between",
  },
  svgContainer: {
    width: 34,
    height: 34,
    margin: 8,
    alignItems: "center",
    borderRadius: 150,
    borderWidth: 3,
    borderColor: Colors.primary500,
    backgroundColor: Colors.primary500,
  },
  input: {
    padding: 16,
    fontFamily: "roboto-light",
    fontSize: 16,
    lineHeight: 19,
    color: Colors.second700,
  },
});
