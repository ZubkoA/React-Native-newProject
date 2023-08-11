import { useState, useEffect } from "react";
import { useIsFocused } from "@react-navigation/native";
import { View, StyleSheet } from "react-native";
import MapView, { Marker } from "react-native-maps";

const Mapscreen = ({ route }) => {
  const isFocused = useIsFocused();
  const [selectedLocation, setSelectedLocation] = useState();
  const location = route.params.pickedLocation;

  useEffect(() => {
    if (isFocused && route.params) {
      setSelectedLocation((prev) => ({
        ...prev,
        location,
      }));
    }
  }, [isFocused, route]);

  console.log(selectedLocation.location.lat);
  const region = {
    latitude: selectedLocation.location.lat,
    longitude: selectedLocation.location.lng,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };
  console.log(region);

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        showsUserLocation={true}
        initialRegion={region}
      >
        {selectedLocation && (
          <Marker
            title="Picked location"
            coordinate={selectedLocation.location}
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
