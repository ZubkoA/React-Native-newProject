import { View, StyleSheet } from "react-native";
import Card from "../components/Card";
import Title from "../components/Title";

const Mapscreen = () => {
  return (
    <Card>
      <View style={styles.container}>
        <Title>MAP</Title>
      </View>
    </Card>
  );
};

export default Mapscreen;

const styles = StyleSheet.create({
  container: { paddingTop: 35, height: 400 },
});
