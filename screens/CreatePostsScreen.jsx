import { StyleSheet, View, Image } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import Colors from "../constants/colors";

import CardPost from "../components/CardPost";
import TitlePost from "../components/TitlePost";
import CardPostFooterDel from "../components/CardPostFooterDel";
import TextPhoto from "../components/TextPhoto";
import FormCreatePost from "../components/FormCreatePost";

const CreatePostsScreen = () => {
  return (
    <View style={styles.container}>
      <CardPost>
        <TitlePost>Створити публікацію</TitlePost>
      </CardPost>
      <View style={styles.main}>
        <Image style={styles.avatar} />
        <View style={styles.svgContainer}>
          <MaterialIcons
            name="photo-camera"
            size={24}
            color={Colors.second700}
          />
        </View>
        <TextPhoto style={styles.colorText}>Завантажте фото</TextPhoto>
        <FormCreatePost />
      </View>
      <CardPostFooterDel />
    </View>
  );
};

export default CreatePostsScreen;
const styles = StyleSheet.create({
  container: {
    justifyContent: "space-around",
  },

  main: {
    marginHorizontal: 16,
    marginTop: 32,
    height: 580,
  },
  avatar: {
    width: "100%",
    height: 240,
    zIndex: 2,
    position: "absolute",
    backgroundColor: Colors.second500,
    borderRadius: 16,
    marginBottom: 33,
  },
  svgContainer: {
    width: 60,
    height: 60,
    zIndex: 3,
    borderRadius: 150,
    borderWidth: 3,
    borderColor: Colors.primary,
    backgroundColor: Colors.primary,
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 120,
    marginVertical: 90,
  },
  colorText: {
    color: Colors.second700,
  },
});
