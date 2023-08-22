import { ActivityIndicator, Text, View, StyleSheet } from "react-native";

function Loading({ message }) {
  return (
    <View style={styles.container}>
      <Text style={styles.message}>
        <ActivityIndicator size="large" />
      </Text>
    </View>
  );
}
export default Loading;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 32,
  },
  message: {
    fontSize: 16,
    marginBottom: 12,
  },
});
