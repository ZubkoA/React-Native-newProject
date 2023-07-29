import { View, Image, Text, StyleSheet } from "react-native";
import Colors from "../constants/colors";

const CommentsRender = ({ avatar, text, data, index }) => {
  //  style={({ pressed }) => [
  // styles.btnInnerContainer,
  // pressed ? styles.pressed : null,
  // ]}
  let findIndex = Boolean();
  function holeIndex(index) {
    if (index % 2 == 0) {
      findIndex = "True";
    } else {
      findIndex = "False";
    }
    return findIndex;
  }
  holeIndex(index);
  return (
    <View
      style={[findIndex == "True" ? styles.reverseContainer : styles.container]}
    >
      <View style={styles.imgContainer}>
        <Image source={avatar} style={styles.img} />
      </View>
      <View style={styles.commentContainer}>
        <Text style={styles.message}>{text}</Text>
        <Text style={styles.data}>{data}</Text>
      </View>
    </View>
  );
};

export default CommentsRender;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    gap: 16,
    marginBottom: 24,
  },
  reverseContainer: {
    flex: 1,
    flexDirection: "row-reverse",
    gap: 16,
    marginBottom: 24,
  },
  imgContainer: {
    flex: 1,
  },
  img: { width: "100%" },
  commentContainer: {
    flex: 9,
    backgroundColor: Colors.second500,
    borderRadius: 6,
    padding: 16,
  },

  message: {
    fontFamily: "roboto-medium",
    fontSize: 13,
    fontStyle: "normal",
    lineHeight: 18,
    letterSpacing: 0.3,
    color: Colors.textMain,
    marginBottom: 6,
  },
  data: {
    fontFamily: "roboto-medium",
    fontSize: 11,
    color: Colors.second700,
    alignSelf: "flex-end",
  },
});
