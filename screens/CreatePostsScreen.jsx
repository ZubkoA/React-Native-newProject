import * as Location from "expo-location";
import { useState, useEffect } from "react";
import { StyleSheet, View } from "react-native";

import Colors from "../constants/colors";

import CardPost from "../components/CardPost";
import TitlePost from "../components/TitlePost";
import CardPostFooterDel from "../components/CardPostFooterDel";
import TextPhoto from "../components/TextPhoto";
import FormCreatePost from "../components/FormCreatePost";
import ImgPicker from "../components/ImgPicker";
import Button from "../components/Button";
import { Profile } from "../model/profile";
import { useDispatch, useSelector } from "react-redux";
import { createPost } from "../util/httpPost";
import { selectUser } from "../util/selectors";

const CreatePostsScreen = ({ navigation }) => {
  const [selectImg, setSelectImg] = useState("");
  const [selectTitle, setSelectTitle] = useState("");
  const [location, setLocation] = useState(null);

  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  function takeImgHandler(imgUri) {
    setSelectImg(imgUri);
  }
  function takeTitleHandler(title, locationTitle) {
    setSelectTitle((prevState) => ({ ...prevState, title, locationTitle }));
  }
  const { locationTitle, title } = selectTitle;

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      const coords = {
        lat: location.coords.latitude,
        lng: location.coords.longitude,
      };
      setLocation(coords);
    })();
  }, []);

  const handleSubmit = (actions) => {
    const post = {
      img: selectImg,
      title,
      locationTitle,
      location,
      comments: [],
      likes: [],
      idUser: user.uid,
    };
    // navigation.navigate("PostsScreen");
    dispatch(createPost(post)).then((res) => {
      if (res.type === "posts/create/fulfilled") {
        setSelectImg("");
        setSelectTitle("");
        setLocation("");
        navigation.navigate("Posts");
        actions.resetForm();
      } else {
        return Alert.alert("Mistake", `server: ${res.payload}`);
      }
    });
  };

  return (
    <View style={styles.container}>
      <CardPost>
        <TitlePost>Створити публікацію</TitlePost>
      </CardPost>
      <View style={styles.main}>
        <ImgPicker onTakeImg={takeImgHandler} />
        <TextPhoto style={styles.colorText}>Завантажте фото</TextPhoto>
        <FormCreatePost onTakeTitle={takeTitleHandler} />
        <Button
          onPress={handleSubmit}
          style={styles.btnContainer}
          styleText={styles.btnText}
        >
          Опублікувати
        </Button>
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
  btnContainer: {
    marginBottom: 16,
    marginTop: 27,
    backgroundColor: Colors.second500,
  },
  btnText: { color: Colors.second700 },

  colorText: {
    color: Colors.second700,
  },
});
