import { useState } from "react";
import * as ImagePicker from "expo-image-picker";
import {
  StyleSheet,
  View,
  Pressable,
  Image,
  Text,
  ImageBackgroundBase,
} from "react-native";

import { MaterialIcons } from "@expo/vector-icons";

import Colors from "../constants/colors";

function ImgPicker({ onTakeImg }) {
  const [image, setImage] = useState(null);

  const takeImgHandler = async () => {
    const img = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [16, 9],
      quality: 0.5,
    });

    if (!img.canceled) {
      setImage(img.assets[0].uri);
      onTakeImg(img.assets[0].uri);
    }
  };
 
  return (
    <View>
      <View style={styles.post}>
        {image ? (
          <Image style={styles.img} source={{ uri: image }} />
        ) : (
          <Pressable onPress={takeImgHandler}>
            <View style={styles.svgContainer}>
              <MaterialIcons
                name="photo-camera"
                size={24}
                color={Colors.second700}
              />
            </View>
          </Pressable>
        )}
      </View>
    </View>
  );
}
export default ImgPicker;

const styles = StyleSheet.create({
  post: {
    width: "100%",
    height: 240,
    // zIndex: 2,
    // position: "absolute",
    backgroundColor: Colors.second500,
    borderRadius: 16,
    // marginBottom: 33,
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
  img: { width: "100%", height: 240, borderRadius: 16 },
});
