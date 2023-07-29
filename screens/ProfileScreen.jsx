import { View, StyleSheet, FlatList, Image } from "react-native";
import { Ionicons, Feather } from "@expo/vector-icons";
import Title from "../components/Title";
import Colors from "../constants/colors";
import Card from "../components/Card";

import { PROFILE } from "../model/profile";
import ProfileRender from "../components/ProfileRender";

const ProfileScreen = () => {
  return (
    <Card>
      <View style={styles.container}>
        <Image
          source={require("../assets/images/avatar.png")}
          style={styles.avatar}
        />
        <View style={styles.wrapIcon}>
          <Ionicons
            style={styles.icon}
            name="md-close-circle-outline"
            size={24}
          />
        </View>
        <View style={styles.logout}>
          <Feather name="log-out" size={24} color="#BDBDBD" />
        </View>
        <Title>Natali Romanova</Title>
        <View style={styles.wrapRender}>
          <FlatList
            data={PROFILE}
            renderItem={({ item }) => (
              <ProfileRender
                img={item.img}
                title={item.title}
                message={item.message}
                like={item.like}
                location={item.location}
              />
            )}
            keyExtractor={(item) => item.id}
          />
        </View>
      </View>
    </Card>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: { paddingTop: 92, height: 549 },

  avatar: {
    width: 120,
    height: 120,
    zIndex: 2,
    position: "absolute",
    left: 120,
    top: -60,
    backgroundColor: Colors.second500,
    borderRadius: 16,
    marginBottom: 33,
  },
  wrapIcon: {
    backgroundColor: Colors.primary,
    position: "absolute",
    zIndex: 3,
    left: 228,
    top: 20,
    borderRadius: 100,
    height: 24,
    width: 24,
  },
  icon: {
    color: Colors.second700,
  },
  logout: {
    position: "absolute",
    right: 0,
    top: 22,
  },

  wrapRender: {
    marginBottom: 31,
    flex: 1,
  },
});
