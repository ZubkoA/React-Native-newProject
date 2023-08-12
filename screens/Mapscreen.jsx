import { View, StyleSheet } from "react-native";
import MapView, { Marker } from "react-native-maps";

const Mapscreen = ({ route }) => {
  const latitude = route.params.geoLocation.lat;
  const longitude = route.params.geoLocation.lng;

  const region = {
    latitude: latitude,
    longitude: longitude,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        showsUserLocation={true}
        initialRegion={region}
      >
        {route.params.geoLocation && (
          <Marker
            title="Picked location"
            coordinate={{ latitude: latitude, longitude: longitude }}
            description="Hello"
          />
        )}
      </MapView>
    </View>
  );
};

export default Mapscreen;

const styles = StyleSheet.create({
  container: { paddingTop: 35 },
  map: {
    width: "100%",
    height: "100%",
  },
});
